import { createContext, useState, useEffect } from 'react';

const SocialMediaContext = createContext();

const API_URL = 'http://localhost:7777/socialmedia';

export const SocialMediaProvider = ({ children }) => {
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  useEffect(() => {
    const fetchSocialMediaLinks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Trim platform names to avoid any leading or trailing whitespace issues
        setSocialMediaLinks(
          data.map(link => ({
            ...link,
            platform: link.platform.trim(),
          }))
        );
      } catch (error) {
        console.error('Failed to fetch social media links:', error);
      }
    };

    fetchSocialMediaLinks();
  }, []);

  return (
    <SocialMediaContext.Provider value={{ socialMediaLinks }}>
      {children}
    </SocialMediaContext.Provider>
  );
};

export default SocialMediaContext;
