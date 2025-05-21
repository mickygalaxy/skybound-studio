import './App.css'

import { useEffect, useState } from 'react';
import Header from './Header/header.jsx'
import MainContent from "./MainContent/mainContent.jsx"
import AboutSkybound from './AboutSkybound.jsx'
import MissionAndVision from "./MissionAndVision.jsx"
import AboutUs from './AboutUs';
import OurTeam from './ourTem';
import OurServices from './OurServices';
import OurUSP from './OurUSP';
import MarketAnalysis from './MarketAnalysis';
import OurGoals from './OurGoals';
import OurProjects from './OurProjects.jsx';
import Footer from './Footer';
import LogoLoder from './LogoLoder.jsx';
function App() {



 const [isLoading, setIsLoading] = useState(true);

  // Callback to be called when loader animation completes
  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (




      // <>
      //   <main className='flex flex-col items-center justify-center w-full m-top-60'>

      //    <MainContent/>
      //    <AboutSkybound/>
      //    <MissionAndVision/>
      //    <AboutUs/>
      //    <OurTeam/>
      //    <OurServices/>
      //    <OurUSP/>
      //    <MarketAnalysis/>
      //    <OurGoals className="-mb-12"/>
      //    <OurProjects/>
      //    <Footer/>
      //   </main>   
      // </>
      <>
      {isLoading ? (
        <LogoLoder onComplete={handleLoaderComplete} />
      ) : (
        <main className="flex flex-col items-center justify-center w-full m-top-60 animate-fadeIn">
          <MainContent />
          <AboutSkybound />
          <MissionAndVision />
          <AboutUs />
          <OurTeam />
          <OurServices />
          <OurUSP />
          <MarketAnalysis />
          <OurGoals className="-mb-12" />
          <OurProjects />
          <Footer />
        </main>
      )}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          10% {
            opacity: 0;
            transform: translateY(-50px);
            transition: all 0.5s ease-in-out;
          }
          
         
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.9s ease-in-out forwards;
        }
      `}</style>
    </>


   
  )
}

export default App
