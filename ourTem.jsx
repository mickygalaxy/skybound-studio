// src/components/OurTeam.jsx
import "./OurTeam.css"; // Add custom styles for team

const teamMembers = [
  {
    name: "FRANCOIS MERCER",
    role: "FOUNDER & CEO",
    image: "src/assets/ceo.png", // Replace with actual images if available
  },
 
];

const OurTeam = () => {
  return (
    <div className="all-card our-team relative w-full bg-gradient-to-b from-[#321d39] via-[#c58888] to-[#e0dfdf] text-white px-6 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-white drop-shadow-md">
          OUR <span className="text-orange-500">TEAM</span>
        </h2>
        <p className="text-lg lg:text-xl text-white mb-12 font-bold antialiased">
          Meet the creative minds behind Skybound Studio, committed to excellence and innovation.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card bg-white text-gray-900 shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-58 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-orange-500 text-lg mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
