// src/components/AboutUs.jsx
// 

import { motion } from "framer-motion";
import './App.css';

const AboutUs = () => {
  return (
    <div className="aboutus relative w-full bg-gradient-to-br from-[#223131] via-[#721e72] to-[#ffffff] text-gray-800 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24 overflow-hidden scaling-div">
      <div className="max-w-5xl mx-auto relative px-4 sm:px-6 lg:px-0 py-8 sm:py-12 scaling-div">
        {/* Wave Border */}
        <div className="wave-border absolute -inset-2"></div>

        {/* Main Content with Hover & Animation */}
        <motion.div
          className="relative z-10 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-8 lg:p-16 transition-all duration-500 hover:shadow-2xl hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Heading with Hover Effect */}
          <motion.h2
            whileHover={{ scale: 1.1, color: "#ff7f50" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 transition-all"
          >
            ABOUT US
          </motion.h2>

          {/* Content Section */}
          <p className="text-box text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 transition-all hover:text-gray-900 pl-2 pr-2">
            At <span className="text-orange-500 font-semibold">Skybound Studio</span>, we believe that
            every space tells a story, and we are here to help you craft a narrative that resonates
            with your lifestyle, brand, or vision. With a keen eye for detail, a commitment to quality,
            and a flair for innovation, we take pride in delivering bespoke interior design solutions
            that exceed expectations.
          </p>

          <p className="text-box text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed transition-all hover:text-gray-900">
            Our approach to interior design goes beyond aesthetics. We see each project as an opportunity
            to create a harmonious blend of style and functionality. From concept to completion, we
            collaborate closely with our clients to understand their needs, preferences, and aspirations,
            ensuring that the final design reflects their unique personality and purpose.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;