import React from "react";

const About = () => {
  const authors = [
    { id: 1, name: "Adilet Alpysbayev", role: "Website Developer" },
    { id: 2, name: "Abylay Pugashbek", role: "Team Lead | Marketer" },
    { id: 3, name: "Alan Tokhtabay", role: "Bot Developer" },
    { id: 4, name: "Adilkhan Seiytkaziev", role: "Team Lead | Mobilograph" },
    { id: 5, name: "Dariya Aidarkyzy", role: "Interviewer" },
    { id: 6, name: "Rustam Kenzhali", role: "Marketer" },
  ];

  return (
    <div className="about-container p-6 mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold mb-4 flex justify-center">About Us</h1>
      <h3 className="text-xl font-bold mb-4 flex justify-center">
        Group: CS-2114S
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {authors.map((author) => (
          <div
            key={author.id}
            className="author-item bg-yellow-100 p-4 rounded-md shadow-md mb-4"
          >
            <h2 className="text-xl font-bold mb-2">{author.name}</h2>
            <p className="text-gray-800 mb-2">{author.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
