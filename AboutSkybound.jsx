import { useEffect, useState } from 'react';  
// import './AboutSkybound.css';
import './aboutskybounds.css';

export default ()=>{
    const [isShrunk, setIsShrunk] = useState(false);  
    const handleScroll = () => {  
        if (window.scrollY > 50) {  
            setIsShrunk(true);  
        } else {  
            setIsShrunk(false);  
        }  
    };  
    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);  

    return(
        <div  className={`inner-main-content-part-3 ${isShrunk ? 'shrink' : ''}`}>
        <video autoPlay loop muted>  
         <source src="src/assets/videos/first1.mp4" type="video/mp4" />  
        </video>  
        <div className='inner-main-content-part-3-About-Skybound-box'>
          <a href="#" className='about-skybound'><h1 className='about-heading'>About SKYBOUND </h1></a>
          <div className='inner-main-content-part-3-About-Skybound-box-text-image'>
            <h2 className="about-text-box frontofcard">Welcome to skybound studio, where creativity meets functionality, and spaces are transformed into extraordinary experiences. We are skybound studio, the visionary behind is a passionate and skilled designer and her team dedicated to bringing your interior dreams to life.</h2>
            {/* <img src="src/assets/images-icons/1.png" alt=""  className='about-image x1  backofcard'/> */}
          </div>
        </div>
      </div>
    )
}