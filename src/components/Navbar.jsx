import { useState } from "react";
import { LiaHandshake } from "react-icons/lia";
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const linkVariants = {
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 50,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#121214",
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <>
      <nav className="fixed  w-full flex items-center justify-between py-5 px-4 md:px-10 lg:px-32 text-white bg-black z-50">
        {/* Logo centered in mobile */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          
          className="text-lg md:text-2xl lg:text-4xl font-bold mx-auto md:mx-0"
        >
          <Link to={"/"} onClick={scrollToTop}>SURIYA</Link>
        </motion.h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <motion.div onClick={() => setIsNavOpen(!isNavOpen)} className="cursor-pointer">
            {isNavOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </motion.div>
        </div>

        {/* Navigation Links for Desktop and Tablet */}
        <ul className={`hidden md:flex space-x-6`}>
          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/" onClick={scrollToTop} className="text-sm md:text-base lg:text-sm">
              Home
            </Link>
          </motion.li>

          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/about" onClick={scrollToTop} className="text-sm md:text-base lg:text-sm">
              About
            </Link>
          </motion.li>

          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/services" onClick={scrollToTop} className="text-sm md:text-base lg:text-sm">
              Service
            </Link>
          </motion.li>

          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/works" onClick={scrollToTop} className="text-sm md:text-base lg:text-sm">
              Works
            </Link>
          </motion.li>

          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/contact" onClick={scrollToTop} className="text-sm md:text-base lg:text-sm">
              Contact
            </Link>
          </motion.li>
        </ul>

        {/* Hire Me Button */}
        <motion.button
              whileHover="hover"
              variants={buttonVariants}
              className="hidden md:flex bg-custom-bg text-white text-xs md:text-sm lg:text-base py-2 px-4 rounded-2xl text-center border border-white items-center"
            >
              <Link to="/contact" className="flex items-center">
                Hire Me <LiaHandshake className="ml-2" />
              </Link>
          </motion.button>


        {/* Mobile Nav Links Dropdown */}
        <ul className={`md:hidden absolute top-16 right-0 w-full cursor-pointer bg-black flex-col items-center space-y-4 px-4 py-6 transition-all duration-300 ease-in-out ${isNavOpen ? 'flex' : 'hidden'}`}>
          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/" onClick={() => { scrollToTop(); setIsNavOpen(false); }} className="text-base block">
              Home
            </Link>
          </motion.li>

          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/about" onClick={() => { scrollToTop(); setIsNavOpen(false); }} className="text-base block">
              About
            </Link>
          </motion.li>

          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/services" onClick={() => { scrollToTop(); setIsNavOpen(false); }} className="text-base block">
              Service
            </Link>
          </motion.li>

          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/works" onClick={() => { scrollToTop(); setIsNavOpen(false); }} className="text-base block">
              Works
            </Link>
          </motion.li>

          <motion.li whileHover="hover" variants={linkVariants}>
            <Link to="/contact" onClick={() => { scrollToTop(); setIsNavOpen(false); }} className="text-base block">
              Contact
            </Link>
          </motion.li>

          <motion.button
              whileHover="hover"
              variants={buttonVariants}
              className="bg-custom-bg text-white text-base py-2 px-4 rounded-2xl hover:scale-105 text-center border border-white flex items-center"
            >
              <Link to="/contact" className="flex items-center">
                Hire Me <LiaHandshake className="ml-2" />
              </Link>
          </motion.button>

        </ul>
      </nav>

      <div className="h-[80px]"></div> {/* Adjust the height based on your navbar */}
    </>
  );
};

export default Navbar;
