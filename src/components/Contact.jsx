import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
// import {Contact_Number,Gmail} from "../assets/constants"


const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // Loading state

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeInOut', staggerChildren: 0.2 },
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          access_key: '07a3c296-84c9-4358-b64f-e134175cb6cb', // Replace with your actual API key
        }),
      });

      setLoading(false); // Stop loading

      if (res.ok) {
        toast.success("Message delivered!"); // Show success toast
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        toast.error("Submission failed, please try again.");
      }
    }catch(e) {
      setLoading(false);
      toast.error("An error occurred. Please try again later."+ e );
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-custom-bg lg:mx-32 md:mx-16 sm:mx-8 mx-4 my-10 rounded-3xl p-10 text-white"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <p className="text-xl font-medium">Contact</p>
        <h2 className="text-4xl font-bold">Get in Touch with Me!</h2>
      </motion.div>

      <motion.div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Contact Info Section */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 space-y-6">
            {/* Your contact info items */}
            <motion.div whileHover={{ scale: 1.05 }} variants={itemVariants} className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-white" />
              <div>
                <h2 className="font-semibold">Location:</h2>
                <p>Chennai,TamilNadu</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} variants={itemVariants} className="flex items-center space-x-4">
              <FaPhoneAlt className="text-white" />
              <div>
                <h2 className="font-semibold">Contact Number:</h2>
                <p>91+ 6374570440</p>
              </div>
            </motion.div>

            {/* Email Section */}
            <motion.div whileHover={{ scale: 1.05 }} variants={itemVariants} className="flex items-center space-x-4">
              <FaEnvelope className="text-white"/>
              <div>
                <h2 className="font-semibold">Email Us:</h2>
                <p>suriya6374570440@gmail.com</p>
              </div>
            </motion.div>
        </motion.div>
        {/* Contact Form Section */}
        <motion.div variants={itemVariants} className="w-full lg:w-2/3">
          <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md bg-transparent text-white"
                  placeholder="Steve Milner"
                  required
                />
                <FaUser className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-400" />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md bg-transparent text-white"
                  placeholder="youremail@example.com"
                  required
                />
                <FaEnvelope className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-400" />
              </motion.div>
            </div>

            {/* Message */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md bg-transparent text-white"
                rows="4"
                placeholder="Write your message"
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
                  type="submit"
                  disabled={loading}
                  variants={itemVariants}
                  className={`w-full ${loading ? 'bg-transparent' : 'bg-transparent'} hover:bg-transparent border border-white text-white py-3 rounded-md flex justify-center items-center transition-transform duration-300 ease-in-out transform`}
                  whileHover={{ scale: 1.05 }} // Add hover scaling
                >
                  {loading ? 'Sending...' : 'Send Me a Message'} <FaPaperPlane className="ml-2" />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
