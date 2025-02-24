"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6">
      {/* 🌟 Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Zylo Convert is a free, fast, and reliable file conversion and
          compression tool, built by a team of passionate developers to make
          file management easier.
        </p>
      </div>

      {/* 🚀 How It Works */}
      <div className="mt-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          How It Works
        </h2>
        <p className="text-gray-700">
          Simply upload your files, choose the format, and get high-quality
          conversions or compressions instantly.
        </p>
      </div>

      {/* 🏆 Meet the Team */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary text-center mb-6">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 📄 Supported Formats */}
      <div className="mt-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Supported Formats
        </h2>
        <p className="text-gray-700">
          We support image, video, document, and archive formats, including PNG,
          JPG, MP4, PDF, DOCX, ZIP, and more.
        </p>
      </div>

      {/* 🔥 Future Roadmap */}
      <div className="mt-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Future Roadmap
        </h2>
        <p className="text-gray-700">
          We're working on adding more formats, AI-powered compression, and
          real-time collaboration features.
        </p>
      </div>

      {/* 📩 Contact & Support */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700">
          Have questions or feedback? Reach out to us at{" "}
          <span className="font-semibold">support@zyloconvert.com</span>
        </p>
      </div>
    </section>
  );
};

// 🧑‍💻 Team Members (You can replace with actual images and names)
const teamMembers = [
  { name: "John Doe", role: "Frontend Developer", image: "/team1.jpg" },
  { name: "Jane Smith", role: "Backend Developer", image: "/team2.jpg" },
  { name: "Alice Johnson", role: "UI/UX Designer", image: "/team3.jpg" },
];

export default About;
