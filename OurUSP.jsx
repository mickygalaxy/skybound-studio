// src/components/OurUSP.jsx
import "./OurUSP.css";

const uspData = [
  {
    title: "Eco-Friendly Design",
    description:
      "Specialize in sustainable and environmentally friendly design practices. Use eco-friendly materials, energy-efficient solutions, and promote a green lifestyle.",
    icon: "🌱",
  },
  {
    title: "Virtual Interior Design Services",
    description:
      "Provide remote interior design services using virtual tools and technologies. Cater to clients who prefer online consultations and design solutions.",
    icon: "🖥️",
  },
  {
    title: "Wellness Design",
    description:
      "Design spaces that promote health and well-being. Incorporate elements like natural light, air quality improvement, and ergonomic design.",
    icon: "🌞",
  },
];

const OurUSP = () => {
  return (
    <div className=" our-usp relative w-full bg-gradient-to-b from-[#000000f9] via-[#1a1a1a] to-[#292929] text-white px-6 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-white tracking-wide drop-shadow-md">
          OUR <span className="text-green-500">USP</span>
        </h2>
        <p className="text-lg lg:text-xl text-white mb-12 font-bold antialiased">
          We bring a unique blend of innovation, sustainability, and wellness to every space.
        </p>
      </div>

      {/* USP Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {uspData.map((usp, index) => (
          <div
            key={index}
            className="usp-card group relative overflow-hidden bg-white text-gray-900 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105"
          >
            {/* Icon with Hover Effect */}
            <div className="icon-wrapper text-5xl mb-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              {usp.icon}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2 transition-colors duration-500 group-hover:text-green-500">
              {usp.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-base">{usp.description}</p>

            {/* Hover Animation Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-rose-500 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 text-center ">
              <h3 className="text-2xl font-bold text-white pl-2 pr-2">{usp.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurUSP;
