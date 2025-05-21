// src/components/Footer.jsx
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import "./Footer.css"; 
// const Footer = () => {
//   return (
//     <footer className=" footer-box relative w-full bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#292929] text-white px-6 py-12 lg:py-16 ">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
//         {/* Left Section */}
//         <div>
//           <h3 className="text-2xl font-bold text-white mb-4">LET'S CONNECT</h3>
//           <p className="text-gray-600">We'd love to hear from you! Reach out for collaborations, inquiries, or just to say hello.</p>
//         </div>

//         {/* Middle Section */}
//         <div className="text-center">
//           <h3 className="text-2xl font-bold text-white mb-4">WITH US!</h3>
//           <ul className="text-gray-600 space-y-2">
//             <li className="transition-all duration-300 hover:text-green-400">
//               📞 +123-456-7890
//             </li>
//             <li className="transition-all duration-300 hover:text-green-400">
//               ✉️ hello@reallygreatsite.com
//             </li>
//             <li className="transition-all duration-300 hover:text-green-400">
//               🌐 www.reallygreatsite.com
//             </li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="text-center lg:text-right">
//           <h3 className="text-2xl font-bold text-white mb-4">FOLLOW US</h3>
//           <div className="flex justify-center lg:justify-end space-x-4">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//             >
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="mt-12 border-t border-gray-700"></div>

//       {/* Copyright Section */}
//       <div className="text-center mt-6">
//         <p className="text-gray-500 text-sm">
//           © {new Date().getFullYear()} Skybound Studio. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-box relative w-full bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#292929] text-white px-6 py-12 lg:py-16" role="contentinfo">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">LET'S CONNECT</h3>
          <p className="text-gray-600">We'd love to hear from you! Reach out for collaborations, inquiries, or just to say hello.</p>
        </div>

        {/* Middle Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">WITH US!</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="transition-all duration-300 hover:text-green-400">
              📞 +912345678987
            </li>
            <li className="transition-all duration-300 hover:text-green-400">
              ✉️ info@skyboundspaces.com
            </li>
            <li className="transition-all duration-300 hover:text-green-400">
              🌐 www.skyboundspaces.com
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-right">
          <h3 className="text-2xl font-bold text-white mb-4">FOLLOW US</h3>
          <div className="flex justify-center lg:justify-end space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-700"></div>

      {/* Copyright Section */}
      <div className="text-center mt-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Skybound Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;