// src/components/MarketAnalysis.jsx
import "./MarketAnalysis.css";

const marketData = [
  {
    title: "Diverse Design Styles",
    description:
      "The market demands interior designers who can cater to diverse design styles ranging from contemporary and modern to traditional and minimalist. Flexibility in adapting to client preferences is crucial.",
    icon: "🎨",
  },
  {
    title: "Quality and Affordability",
    description:
      "Clients seek interior designers who offer high-quality design solutions at competitive prices. Balancing quality with affordability is essential to attract a wide range of customers.",
    icon: "💰",
  },
  {
    title: "Innovative Solutions",
    description:
      "There is a growing preference for innovative design solutions that optimize space utilization, incorporate sustainable materials, and enhance functionality while maintaining aesthetic appeal.",
    icon: "🚀",
  },
  {
    title: "Technology Integration",
    description:
      "Clients expect designers to leverage technology for 3D visualization, virtual reality (VR), and augmented reality (AR) to provide immersive design experiences and improve communication throughout the project.",
    icon: "🖥️",
  },
  {
    title: "Personalized Customer Service",
    description:
      "Exceptional customer service, including attentive communication, timely project updates, and responsiveness to client feedback, is paramount for client satisfaction and retention.",
    icon: "🤝",
  },
  {
    title: "Timely Project Completion",
    description:
      "Meeting project deadlines and ensuring timely completion of projects without compromising on quality is a key requirement in the market.",
    icon: "⏰",
  },
];

const MarketAnalysis = () => {
  return (
    <div className="market-analysis relative w-full bg-gradient-to-br from-[#ecfac0] via-[#ffd4d4] to-[#d5d5d5] text-white px-6 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-white tracking-wide antialiased drop-shadow-md">
          MARKET <span className="text-green-500">ANALYSIS</span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 mb-12 tracking-widest font-bold antialiased">
          Understanding the evolving requirements and trends in the interior design industry.
        </p>
      </div>

      {/* Market Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {marketData.map((item, index) => (
          <div
            key={index}
            className="market-card group relative overflow-hidden bg-white text-gray-900 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105"
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-700 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 text-center">
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketAnalysis;
