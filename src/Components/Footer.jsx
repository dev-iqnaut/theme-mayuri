




import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Adjust the path to your config

const Footer = () => {
  const [contactData, setContactData] = useState({
    email: '',
    phone_number: '',
    location: '',
    facebook_link: '',
    twitter_link: '',
    linkedin_link: '',
  });
  const [aboutData, setAboutData] = useState({ focus: '', mission: '' }); // To hold About-Us data
  const [schoolLogo, setSchoolLogo] = useState(''); // State for the school logo
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const docRef = doc(db, 'sites', 'www.ascentm.in');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData) {
            if (siteData.ContactUs) {
              setContactData(siteData.ContactUs); // Fetching ContactUs fields
            }
            if (siteData["About-Us"]) {
              setAboutData({
                focus: siteData["About-Us"].focus || '',
                mission: siteData["About-Us"].mission || '',
              }); // Fetching focus and mission
            }
            // Fetching school details
            if (siteData.Home && siteData.Home.schoolDetails) {
              const { schoolLogo } = siteData.Home.schoolDetails;
              setSchoolLogo(schoolLogo || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_lioPzz-gZp3vNwcaFWpFmnAqKxYxryo8Q&s'); // Set logo with a fallback
            } else {
              console.error("School details not found in Home section.");
              setError("School details not found in Home section.");
            }
          } else {
            setError('Site data not found.');
          }
        } else {
          setError('No such document!');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message || 'Error fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.location.href = selectedValue; // Redirect to selected page
    }
  };

  return (
    <footer className="bg-teal-600 py-8 border-t px-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 p-6 md:p-12">
        {/* Logo and description */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={schoolLogo} // Use the fetched school logo
            alt="School Logo"
            className="w-16 mb-2"
          />
          <p className="text-center md:text-left text-black max-w-xs text-sm">Ascent</p>
          <p className="text-center md:text-left text-black max-w-xs text-sm">
            {aboutData.focus || 'Focus not available.'}
          </p>
          <p className="text-center md:text-left text-black max-w-xs text-sm">
            {aboutData.mission || 'Mission not available.'}
          </p>

          {/* Dynamic Social Media Links */}
          <div className="flex space-x-4 mt-2">
            {contactData.facebook_link && (
              <a href={contactData.facebook_link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                <FaFacebookF />
              </a>
            )}
            {contactData.twitter_link && (
              <a href={contactData.twitter_link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                <FaTwitter />
              </a>
            )}
            {contactData.linkedin_link && (
              <a href={contactData.linkedin_link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                <FaLinkedinIn />
              </a>
            )}
          </div>
        </div>

        {/* Pages */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Pages</h4>
          <ul className="space-y-1 text-black text-sm">
          <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            
<li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black  rounded bg-teal-600 hover:bg-gray-100" onChange={handleSelectChange}>
                  <option value="">Academic</option>
                  <option value="/academic_re">Academic Resources</option>
                  <option value="/academic">Academic</option>
                  <option value="/admission">Admission</option>
                  <option value="/news">News</option>
                  <option value="/faculty">Faculty</option>
                  <option value="/Cbse">CBSE Compliance</option>
                  <option value="/gallery">Gallery</option>
                  <option value="/infrastructure">Infrastructure</option>
                </select>
              </li>
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black rounded bg-teal-600 hover:bg-gray-100" onChange={handleSelectChange}>
                  <option value="">Services</option>
                  <option value="/service">Service</option>
                  <option value="/serviceDetails">Service Details</option>
                </select>
              </li>

              
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black rounded bg-teal-600 hover:bg-gray-100" onChange={handleSelectChange}>
                  <option value="">Blog</option>
                  <option value="/blog">Blog</option>
                  <option value="/blogDetails">Blog Details</option>
                </select>
              </li>


            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact - Dynamically loaded data */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-black text-sm flex flex-col items-start">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-white mr-2" />
              {contactData.location || 'Location not available'}
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-white mr-2" />
              {contactData.email || 'Email not available'}
            </li>
            <li className="flex items-center">
              <FaPhone className="text-white mr-2" />
              {contactData.phone_number || 'Phone not available'}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom part */}
      <div className="container mx-auto mt-6 text-center border-t pt-4 text-black text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
        <span>
      © Created by 
      <a 
        href="https://www.linkedin.com/in/mayuri-mahadik-060099279/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-black hover:text-white underline ml-1 transition-colors duration-300">
        Mayuri Raghunath Mahadik
      </a> 
       2024 | All Rights Reserved
    </span>
          <div className="flex mt-2 md:mt-0 space-x-2">
            <a href="#" className="hover:text-white mx-2">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white mx-2">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white mx-2">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
