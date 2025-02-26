import Link from "next/link";

const documentTypes = [
  { title: "PDF to Word", path: "/convert/document/pdf-to-word" },
  { title: "Word to PDF", path: "/convert/document/word-to-pdf" },
];

export default function DocumentConversion() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        Convert Your Documents
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
        {documentTypes.map((doc, index) => (
          <Link key={index} href={doc.path} aria-label={`Convert ${doc.title}`}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-center">{doc.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
