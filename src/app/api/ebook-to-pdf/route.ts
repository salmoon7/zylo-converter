import { NextRequest, NextResponse } from "next/server";
import CloudConvert from "cloudconvert";

const cloudConvert = new CloudConvert(
  process.env.CLOUDCONVERT_API_KEY as string
);

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }

  const buffer = await file.arrayBuffer();

  let inputFormat = "epub";
  if (file.name.endsWith(".mobi")) inputFormat = "mobi";
  else if (file.name.endsWith(".azw")) inputFormat = "azw";

  try {
    const job = await cloudConvert.jobs.create({
      tasks: {
        "import-my-file": {
          operation: "import/upload",
        },
        "convert-my-file": {
          operation: "convert",
          input: "import-my-file",
          input_format: inputFormat,
          output_format: "pdf",
        },
        "export-my-file": {
          operation: "export/url",
          input: "convert-my-file",
        },
      },
    });

    const uploadTask = job.tasks.find(
      (task: any) => task.name === "import-my-file"
    );

    if (!uploadTask) {
      return NextResponse.json(
        { error: "Upload task not found" },
        { status: 500 }
      );
    }

    await cloudConvert.tasks.upload(uploadTask, Buffer.from(buffer), file.name);

    const completedJob = await cloudConvert.jobs.wait(job.id);
    const exportTask = completedJob.tasks.find(
      (task: any) => task.name === "export-my-file"
    );

    if (
      !exportTask ||
      !exportTask.result ||
      !exportTask.result.files ||
      exportTask.result.files.length === 0
    ) {
      return NextResponse.json(
        { error: "Export task failed or returned no files" },
        { status: 500 }
      );
    }

    const fileUrl = exportTask.result.files[0].url;
    return NextResponse.json({ downloadUrl: fileUrl });
  } catch (error) {
    console.error("Conversion error:", error);
    return NextResponse.json({ error: "Conversion failed." }, { status: 500 });
  }
}
