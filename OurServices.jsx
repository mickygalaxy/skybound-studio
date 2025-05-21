// src/components/OurServices.jsx
import "./OurServices.css";

const services = [
  {
    name: "Residential Interior Design",
    icon: "🏡",
  },
  {
    name: "Modular Kitchen",
    icon: "🍽️",
  },
  {
    name: "Sustainable Design",
    icon: "🌱",
  },
  {
    name: "Color Assistance",
    icon: "🎨",
  },
  {
    name: "Vaastu Consultation",
    icon: "🧘",
  },
  {
    name: "Space Planning",
    icon: "📐",
  },
  {
    name: "3D Visualization",
    icon: "🖥️",
  },
  {
    name: "Wardrobe Design",
    icon: "👗",
  },
];

const OurServices = () => {
  return (
    <div className="over-services relative w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1ab0] to-[#9586c1] text-white px-6 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-white tracking-wide">
          OUR <span className="text-orange-500">SERVICES</span>
        </h2>
        <p className="text-lg lg:text-xl text-white mb-12 font-bold antialiased">
          Crafting spaces that reflect your vision with elegance and functionality.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card group relative overflow-hidden bg-white text-gray-900 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105"
          >
            <div className="icon-wrapper text-5xl mb-4 group-hover:animate-bounce">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 text-base">
              Elevate your space with our expert touch.
            </p>

            {/* Hover Animation Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 text-center">
              <h3 className="text-2xl font-bold text-white pl-2 pr-2">{service.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
