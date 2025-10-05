import { motion } from 'framer-motion';
import EduSkills from './EduSkills';

const AboutMe = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };
  const handleDownloadCV = async () => {
    try {
      const response = await fetch('http://localhost:7777/api/resume'); // Replace with your actual CV endpoint
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
    }
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-10 rounded-3xl p-6 md:p-8 lg:p-10 bg-custom-bg text-white shadow-lg">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="w-full text-center mb-8"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            About Me
          </motion.h2>
          <p className="text-sm md:text-xl text-gray-300 font-light">
            A little bit about my journey and passion.
          </p>
        </motion.div>

        {/* Content Container */}
        <motion.div
          whileHover="hover"
          className="w-full md:w-3/4 lg:w-auto text-center md:text-left"
        >
          {/* Paragraph */}
          <p className="text-xs md:text-lg lg:text-xl leading-relaxed font-light text-gray-100">
            Hi, I’m Suriya, a passionate full-stack developer with a background in web design, development, and problem-solving. I enjoy creating web experiences that blend functionality with aesthetics. Over the years, I have honed my skills in technologies like React, Tailwind CSS, and more.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-block bg-transparent border border-white text-white py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
            <a
              onClick={handleDownloadCV}
              className="inline-block bg-transparent border border-white text-white py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>

      <EduSkills />
    </>
  );
};

export default AboutMe;
