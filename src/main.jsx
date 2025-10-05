import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // Assuming this is the Main component
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact'; // Contact will only be used on the contact route
import Projects from './components/Projects';
import AboutMe from './components/AboutMe.jsx'
import Services from './components/Services.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom'
import { SocialMediaProvider } from './context/SocialMediaContext';
import EduSkills from './components/EduSkills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialMediaProvider>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<EduSkills />} />
          <Route path="/works" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch all other routes and redirect to home */}
          <Route path="*" element={< Navigate  to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SocialMediaProvider>
  </StrictMode>
)
