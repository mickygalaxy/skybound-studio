// src/components/OurGoals.jsx
import "./OurGoals.css";

const goalData = [
  {
    title: "Innovative Design Solutions",
    description:
      "Differentiate from competitors by offering creative and personalized design solutions that cater to modern lifestyles.",
    icon: "🎨",
  },
  {
    title: "Leveraging Technology",
    description:
      "Use 3D visualization, virtual consultations, and project management tools to attract tech-savvy clients and enhance project efficiency.",
    icon: "🖥️",
  },
  {
    title: "Partnerships & Collaborations",
    description:
      "Form strategic partnerships with home decor stores, architectural firms, and real estate developers to expand market reach.",
    icon: "🤝",
  },
  {
    title: "Competitive Pricing",
    description:
      "Offer high-quality services at competitive prices to appeal to a wider range of clients and establish trust in the market.",
    icon: "💰",
  },
  {
    title: "Strong Online Presence",
    description:
      "Establish credibility through a professional website, social media marketing, and an online portfolio showcasing past projects.",
    icon: "🌐",
  },
];

const OurGoals = () => {
  return (
    <div className=" our-goals relative w-full bg-gradient-to-br from-[#6933c7] via-[#ffffff46] to-[#292929] text-white px-6 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-white tracking-wide antialiased drop-shadow-md">
          OUR <span className="text-green-500">GOALS</span>
        </h2>
        <p className="text-lg lg:text-xl text-white tracking-widest mb-12 antialiased font-bold">
          Focused on driving growth through innovation, technology, and partnerships.
        </p>
      </div>

      {/* Goals Grid Section */}
      <div className="grid grid-cols-1 justify-items-center-safe lg:justify-center-safe sm:grid-cols-2 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {goalData.map((item, index) => (
          <div
            key={index}
            className="goal-card group relative overflow-hidden bg-white text-gray-900 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105"
          >
            {/* Icon Animation */}
            <div className="icon-wrapper text-5xl mb-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2 transition-colors duration-500 group-hover:text-green-500">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base">{item.description}</p>

            {/* Hover Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 text-center">
              <h3 className="text-xl font-bold text-white text-center">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGoals;
