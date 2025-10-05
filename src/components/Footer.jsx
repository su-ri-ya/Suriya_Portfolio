import { useContext, useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SocialMediaContext from '../context/SocialMediaContext'; // Import the context

const Footer = () => {
  const { socialMediaLinks } = useContext(SocialMediaContext); // Access the context data
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Check if socialMediaLinks data has been fetched
    if (socialMediaLinks && socialMediaLinks.length > 0) {
      setIsLoading(false);
    }
  }, [socialMediaLinks]);

  // Animation Variants
  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.3,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.5,
      transition: { yoyo: 5 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-32 w-32">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
    </div>
  );

  // Create dynamic socialLinks array using fetched data
  const socialLinks = [
    { icon: FaGithub, url: socialMediaLinks.find(link => link.platform.trim().toLowerCase() === 'github')?.url },
    { icon: FaInstagram, url: socialMediaLinks.find(link => link.platform.trim().toLowerCase() === 'instagram')?.url },
    { icon: FaLinkedin, url: socialMediaLinks.find(link => link.platform.trim().toLowerCase() === 'linkedin')?.url },
    { icon: FaWhatsapp, url: socialMediaLinks.find(link => link.platform.trim().toLowerCase() === 'whatsapp')?.url },
  ];

  return (
    <motion.footer
      className="bg-custom-bg text-white py-8 px-4 md:px-10 lg:px-32 mx-4 md:mx-10 lg:mx-32 my-10 rounded-3xl"
      initial="hidden"
      animate="visible"
      variants={linkVariants}
    >
      {isLoading ? (
        <LoadingSpinner /> // Show spinner while loading
      ) : (
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Section: Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return social.url ? ( // Check if the URL exists before rendering the icon
                <motion.a
                  key={index}
                  href={social.url.startsWith('http') ? social.url : `http://${social.url}`} // Add http if missing
                  variants={iconVariants}
                  whileHover="hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]" />
                </motion.a>
              ) : null; // Render nothing if URL is missing
            })}
          </div>

          {/* Right Section: Copyright */}
          <motion.div variants={linkVariants}>
            <p className="text-gray-400 text-xs md:text-sm lg:text-base">
              &copy; {new Date().getFullYear()} SURIYA. All rights reserved.
            </p>
          </motion.div>
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;
