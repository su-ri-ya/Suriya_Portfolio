import { FaPencilRuler,FaServer,FaCode} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Contact from "./Contact"

const Services = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-custom-bg mx-4 md:mx-10 lg:mx-32 my-10 rounded-3xl p-6 md:p-10 text-white"
    >
      {/* Services Title */}
      <motion.div variants={itemVariants} className="text-center mb-8">
        <p className="text-lg md:text-xl font-medium">Services</p>
        <h2 className="text-2xl md:text-4xl font-bold">Quality Services</h2>
      </motion.div>

      {/* Service Items */}
      <motion.div className="flex flex-wrap justify-center gap-6">
  {/* Service 1: Web Application Development */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    variants={itemVariants}
    className="bg-custom-bg rounded-xl px-6 py-10 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] border border-gray-600 border-opacity-30 relative shadow-lg"
  >
    <div className="flex items-center space-x-4 mb-4">
      <FaCode className="text-3xl md:text-4xl text-white" />
      <h3 className="text-lg md:text-xl font-semibold">Web Application Development</h3>
    </div>
    <p className="text-gray-400 text-sm md:text-base">
      I develop scalable and high-performance web applications tailored to your business needs.
    </p>
  </motion.div>

  {/* Service 2: Website Design */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    variants={itemVariants}
    className="bg-custom-bg rounded-xl px-6 py-10 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] border border-gray-600 border-opacity-30 relative shadow-lg"
  >
    <div className="flex items-center space-x-4 mb-4">
      <FaPencilRuler className="text-3xl md:text-4xl text-white" />
      <h3 className="text-lg md:text-xl font-semibold">Website Design</h3>
    </div>
    <p className="text-gray-400 text-sm md:text-base">
      I craft modern and responsive website designs that blend aesthetics with functionality.
    </p>
  </motion.div>

  {/* Service 3: Full-Stack Development */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    variants={itemVariants}
    className="bg-custom-bg rounded-xl px-6 py-10 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] border border-gray-600 border-opacity-30 relative shadow-lg"
  >
    <div className="flex items-center space-x-4 mb-4">
      <FaServer className="text-3xl md:text-4xl text-white" />
      <h3 className="text-lg md:text-xl font-semibold">Full-Stack Development</h3>
    </div>
    <p className="text-gray-400 text-sm md:text-base">
      I offer full-stack development services to create end-to-end solutions for your business.
    </p>
  </motion.div>
</motion.div>

      </motion.section>
      <Contact />
    </>
    
  );
};

export default Services;
