import Link from "next/link";

const documentTypes = [
  { title: "PDF to Word", path: "/convert/document/pdf-to-word" },
  { title: "Word to PDF", path: "/convert/document/word-to-pdf" },
];

export default function DocumentConversion() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <h1 className="text-3xl font-bold mb-6">Document Conversions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documentTypes.map((doc, index) => (
          <Link key={index} href={doc.path}>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition cursor-pointer">
              <h3 className="text-xl">{doc.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
