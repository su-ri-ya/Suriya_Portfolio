import { useContext, useState, useEffect } from 'react';
import profile from '../assets/profile.jpg';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiCss3, SiPython } from 'react-icons/si';
import Projects from './Projects';
import SocialMediaContext from '../context/SocialMediaContext';

const Main = () => {
  const { socialMediaLinks } = useContext(SocialMediaContext);
  const [loadingCV, setLoadingCV] = useState(false); // For CV download spinner
  const [loadingSocials, setLoadingSocials] = useState(true); // For social links spinner

  const handleDownloadCV = async () => {
    setLoadingCV(true); // Start CV spinner
    try {
      const response = await fetch('http://localhost:7777/resume'); // Replace with your actual CV endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Suriya_Resume.pdf'; // Set the desired filename for the CV
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); // Clean up the URL object
    } catch (error) {
      console.error('Error downloading CV:', error);
    } finally {
      setLoadingCV(false); // Stop CV spinner
    }
  };

  // Set loadingSocials to false once social media links are loaded
  useEffect(() => {
    if (socialMediaLinks.length > 0) {
      setLoadingSocials(false);
    }
  }, [socialMediaLinks]);

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-10 px-8 lg:px-32 mt-10 text-white gap-10 lg:gap-14">
        {/* Profile Card */}
        <div className="w-full lg:w-1/3 h-auto lg:h-[574px] flex justify-center items-center bg-custom-bg flex-col p-8 md:p-10 lg:p-[40px] rounded-3xl">
          <img
            src={profile}
            alt="Suriya"
            className="w-[150px] h-[160px] sm:w-[160px] sm:h-[200px] md:w-[250px] md:h-[260px] lg:w-[250px] lg:h-[250px] xl:w-[350px] xl:h-[350px] object-cover rounded-[50%]"
          />
          <h1 className="text-[30px] md:text-[35px] lg:text-[35px] mb-0">Suriya</h1>
          <h2 className="text-gray-600 mt-0 text-base md:text-lg">I am a Developer</h2>
          
          {/* Social Media Links with Loading Spinner */}
          <div className="flex justify-center items-center gap-5 mt-2">
            {loadingSocials ? (
              <div className="spinner"> {/* Simple spinner */}
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
              </div>
            ) : (
              socialMediaLinks.map(link => (
                <li key={link._id} className="list-none">
                  <div className="hover:scale-125 transition-transform duration-200">
                    <a href={link.url.startsWith('http') ? link.url : `http://${link.url}`} target="_blank" rel="noopener noreferrer">
                      {link.platform.toLowerCase() === "github" && (
                        <FaGithub className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] p-1 shadow-lg hover:text-gray-400" />
                      )}
                      {link.platform.toLowerCase() === "instagram" && (
                        <FaInstagram className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] p-1 shadow-lg hover:text-gray-400" />
                      )}
                      {link.platform.toLowerCase() === "linkedin" && (
                        <FaLinkedin className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] p-1 shadow-lg hover:text-gray-400" />
                      )}
                      {link.platform.toLowerCase() === "whatsapp" && (
                        <FaWhatsapp className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] p-1 shadow-lg hover:text-gray-400" />
                      )}
                    </a>
                  </div>
                </li>
              ))
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-2/3">
          <div className="w-full h-auto lg:h-[350px] bg-custom-bg px-6 py-8 lg:px-10 lg:py-10 flex flex-col justify-center items-start rounded-2xl">
            <p className="text-base md:text-lg text-gray-400">Hello There!</p>
            <h2 className="text-xs md:text-1xl lg:text-2xl font-bold mb-5 sm:text-base">
              I’m a recent graduate seeking a developer role, skilled in crafting innovative web solutions. Available for freelance projects to bring ideas to life.
            </h2>
            <div className="flex items-center mb-4">
              <span className="text-green-400">●</span>
              <p className="ml-2 text-xs md:text-lg">Available for Freelancing</p>
            </div>
            <button
              onClick={handleDownloadCV} // Call the function when the button is clicked
              className="bg-transparent text-white py-3 px-6 rounded-full hover:scale-125 border border-white "
            >
              {loadingCV ? 'Downloading...' : 'Download CV'}
            </button>
          </div>

          {/* Skill Icons */}
          <section className="w-full h-auto lg:h-[200px] bg-custom-bg px-6 py-6 lg:px-10 lg:py-10 flex flex-row justify-center lg:justify-start items-center gap-4 md:gap-6 mt-6 rounded-2xl overflow-x-auto whitespace-nowrap">
            {[SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiCss3, SiPython, FaNodeJs].map((Icon, index) => (
              <div key={index} className="hover:scale-110 transition-transform duration-200">
                <Icon className="w-[15px] h-[15px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] hover:text-gray-400" />
              </div>
            ))}
          </section>
        </div>
      </section>
      <Projects />
    </>
  );
};

export default Main;
