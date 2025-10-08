import { FaGraduationCap, FaCode } from "react-icons/fa"; // Import icons for both education and experience
import { useEffect, useState } from "react";
import { TbCertificate } from "react-icons/tb";
import { motion } from "framer-motion";
import BASE_URL from "../constants.js"

const EduSkills = () => {
  const [eduDetails, setEduDetails] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loadingEdu, setLoadingEdu] = useState(true);
  const [loadingCert, setLoadingCert] = useState(true);

  // Fetch education details from the backend
  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const res = await fetch(
          BASE_URL + "/alleducation"
        );
        const data = await res.json();
        setEduDetails(data);
      } catch (error) {
        console.error("Failed to fetch education details:", error);
      } finally {
        setLoadingEdu(false);
      }
    };

    fetchEducationData();
  }, []);

  // Fetch certificate details from the backend
  useEffect(() => {
    const fetchCertificateData = async () => {
      try {
        const res = await fetch(
          BASE_URL +"/certificates"
        );
        const data = await res.json();
        setCertificates(data);
      } catch (error) {
        console.error("Failed to fetch certificate details:", error);
      } finally {
        setLoadingCert(false);
      }
    };

    fetchCertificateData();
  }, []);

  const skills = [
    { icon: <FaCode className="text-1xl" />, name: "Web Development" },
    { icon: <FaCode className="text-1xl" />, name: "UI/UX Design" },
    { icon: <FaCode className="text-1xl" />, name: "Video Editing" },
    { icon: <FaCode className="text-1xl" />, name: "Web Design" },
  ];

  return (
    <motion.section className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-8 px-4 sm:px-8 lg:px-16 xl:px-32 mt-10 text-white gap-8 lg:gap-10">
      {/* Left Container - Skills & Certificates */}
      <motion.div
        className="w-full lg:w-2/4 h-auto lg:h-[574px] flex justify-center items-center bg-custom-bg flex-col p-6 sm:p-8 md:p-10 lg:p-[40px] rounded-3xl shadow-lg"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Skills Section */}
        <div className="mb-6 w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">
            SKILLS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border border-gray-700 p-4 sm:p-5 rounded-lg">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="icon text-gray-800">{skill.icon}</div>
                <span className="text-sm sm:text-lg font-semibold text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
            CERTIFICATES
          </h2>
          <div className="space-y-3 border border-gray-700 p-3 rounded-lg">
            {loadingCert ? (
              <div className="flex justify-center items-center">
                {/* Tailwind Spinner */}
                <div className="w-8 h-8 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
              </div>
            ) : certificates.length > 0 ? (
              certificates.map((cert, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <TbCertificate className="text-2xl text-white" />
                  <div className="content">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-200">
                      {cert.Title}
                    </h4>
                    <span className="text-gray-400">{cert.organization}</span>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">No certificates found.</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Right Container - Education Details */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-2/4">
        <motion.div
          className="w-full h-auto lg:h-[574px] bg-custom-bg px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 flex flex-col justify-center items-start rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6 w-full">
            {loadingEdu ? (
              <div className="flex justify-center items-center">
                {/* Tailwind Spinner */}
                <div className="w-8 h-8 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
              </div>
            ) : eduDetails.length > 0 ? (
              eduDetails.map((edu) => (
                <div
                  key={edu._id}
                  className="flex items-start space-x-4 bg-custom-bg p-4 sm:p-5 rounded-xl shadow-md border border-gray-700"
                >
                  <div className="icon text-white">
                    <FaGraduationCap className="text-2xl sm:text-3xl" />
                  </div>
                  <div className="content">
                    <span className="years text-gray-400 text-sm sm:text-base">
                      {`${new Date(edu.startYear).getFullYear()} - ${new Date(
                        edu.endYear
                      ).getFullYear()}`}
                    </span>
                    <h4 className="text-base sm:text-xl font-semibold text-white">
                      {edu.title}
                    </h4>
                    <span className="text-gray-500 text-sm sm:text-base block">
                      {edu.grade}
                    </span>
                    <span className="institution text-gray-500 text-sm sm:text-base">
                      {edu.institution}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">
                No education details found.
              </p>
            )}
          </div>
          </motion.div>
      </div>
    </motion.section>
  );
};

export default EduSkills;
