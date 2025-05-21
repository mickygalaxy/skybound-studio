import "./OurProjects.css";

const projectData = [
  {
    title: "Luxury Living Room",
    image: "/src/assets/project/1.jpeg", 
    description: "A modern and luxurious living room designed with elegance and comfort.",
  },
  {
    title: "Luxury Living Room",
    image: "/src/assets/project/2.webp",
    description: "A modern and luxurious living room designed with elegance and comfort.",
  },
  {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/3.jpeg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
   {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/4.jpg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
   {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/5.jpg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
   {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/6.jpg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
   {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/7.jpg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
   {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/8.jpg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
   {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/9.jpeg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
   {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/10.jpg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
   {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/11.jpeg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
   {
    title: "Minimalist Bedroom",
    image: "/src/assets/project/12.jpeg", 
    description: "A cozy and minimalist bedroom with a peaceful and calm atmosphere.",
  },
];

const OurProjects = () => {
  return (
    <div className="our-projet relative w-full bg-gradient-to-br from-[#1b1414] via-[#000000] to-[#240447] text-white px-6 py-12 lg:py-24">
     <div className="our-projects-container">
     
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 text-white tracking-wide antialiased drop-shadow-md">
          OUR <span className="text-green-500">PROJECTS</span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 mb-12 tracking-widest font-bold antialiased">
          Showcasing our finest work that blends innovation, style, and functionality.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card group relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2 sm:text-2xl">{project.title}</h3>
              <p className="text-gray-200 text-sm sm:text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default OurProjects;
