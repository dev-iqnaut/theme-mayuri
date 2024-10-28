




import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Footer = () => {
  const [contactData, setContactData] = useState({
    email: '',
    phoneNumber: '',
    location: '',
    facebookLink: '',
    twitterLink: '',
    linkedinLink: '',
  });
  const [aboutData, setAboutData] = useState({ focus: '', mission: '' });
  const [schoolLogo, setSchoolLogo] = useState('');
  const [schoolName, setSchoolName] = useState("");
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
            if (siteData.contactUs) setContactData(siteData.contactUs);
            if (siteData.aboutUs) {
              setAboutData({
                focus: siteData.aboutUs.focus || '',
                mission: siteData.aboutUs.mission || '',
              });
            }
            if (siteData.home && siteData.home.schoolDetails) {
              setSchoolLogo(siteData.home.schoolDetails.schoolLogo || 'default_logo_url_here');
              setSchoolName(siteData.home.schoolDetails.schoolName);
            }
          } else setError('Site data not found.');
        } else setError('No such document!');
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

  const handleLinkClick = (path) => {
    if (path) {
      window.location.href = path;
    }
  };

  return (
    <footer className="bg-teal-800 py-12 text-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 px-8 md:px-32">
        
        {/* Logo and About Section */}
        <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center">
  <img src={schoolLogo} alt="School Logo" className="w-20 mb-4" />
  {/* <p className="ml-4 text-center md:text-left font-bold text-xl text-white">{schoolName || "Ascent"}</p> */}
  <p className="ml-4 text-center md:text-left font-bold text-3xl text-white">{schoolName || "Ascent"}</p>

</div>

          <p className="text-center md:text-left max-w-xs text-sm mt-2">{aboutData.focus || 'Focus not available.'}</p>
          <p className="text-center md:text-left max-w-xs text-sm mt-1">{aboutData.mission || 'Mission not available.'}</p>
          
          {/* Social Media Links Below Mission */}
          <div className="flex space-x-4 mt-4">
            {contactData.facebookLink && <a href={contactData.facebookLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition-colors"><FaFacebookF /></a>}
            {contactData.twitterLink && <a href={contactData.twitterLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition-colors"><FaTwitter /></a>}
            {contactData.linkedinLink && <a href={contactData.linkedinLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition-colors"><FaLinkedinIn /></a>}
          </div>
        </div>

        {/* Pages Section with Divider */}
        <div className="flex flex-col items-center md:items-start">
              

<h3 className="text-lg  mb-4 font-bold text-white pl-14">Pages</h3>
<ul className="grid grid-cols-2 gap-y-2 text-gray-300 text-sm">
  <li><a href="/" onClick={() => handleLinkClick('/')} className="hover:text-white transition duration-300">Home</a></li>
  <li><a href="/about" onClick={() => handleLinkClick('/about')} className="hover:text-white transition duration-300">About Us</a></li>
  <li><a href="/academic_re" onClick={() => handleLinkClick('/academic_re')} className="hover:text-white transition duration-300"> Resources</a></li>
  <li><a href="/academic" onClick={() => handleLinkClick('/academic')} className="hover:text-white transition duration-300">Academic</a></li>
  <li><a href="/admission" onClick={() => handleLinkClick('/admission')} className="hover:text-white transition duration-300">Admission</a></li>
  <li><a href="/news" onClick={() => handleLinkClick('/news')} className="hover:text-white transition duration-300">News</a></li>
  <li><a href="/faculty" onClick={() => handleLinkClick('/faculty')} className="hover:text-white transition duration-300">Faculty</a></li>
  <li><a href="/cbse" onClick={() => handleLinkClick('/cbse')} className="hover:text-white transition duration-300">CBSE Compliance</a></li>
  <li><a href="/gallery" onClick={() => handleLinkClick('/gallery')} className="hover:text-white transition duration-300">Gallery</a></li>
  <li><a href="/infrastructure" onClick={() => handleLinkClick('/infrastructure')} className="hover:text-white transition duration-300">Infrastructure</a></li>
  <li><a href="/service" onClick={() => handleLinkClick('/service')} className="hover:text-white transition duration-300">Service</a></li>
  <li><a href="/serviceDetails" onClick={() => handleLinkClick('/serviceDetails')} className="hover:text-white transition duration-300">Service Details</a></li>
  <li><a href="/blog" onClick={() => handleLinkClick('/blog')} className="hover:text-white transition duration-300">Blog</a></li>
  <li><a href="/blogDetails" onClick={() => handleLinkClick('/blogDetails')} className="hover:text-white transition duration-300">Blog Details</a></li>
  <li><a href="/faq" onClick={() => handleLinkClick('/faq')} className="hover:text-white transition duration-300">FAQ</a></li>
  <li><a href="/contact" onClick={() => handleLinkClick('/contact')} className="hover:text-white transition duration-300">Contact</a></li>
</ul>
        </div>

        {/* Contact Information with Divider */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
          <div className="border-t border-gray-600 w-full mb-4"></div> {/* Divider line below Contact heading */}
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><FaMapMarkerAlt className="text-white mr-2" />{contactData.location || 'Location not available'}</li>
            <li className="flex items-center"><FaEnvelope className="text-white mr-2" />{contactData.email || 'Email not available'}</li>
            <li className="flex items-center"><FaPhone className="text-white mr-2" />{contactData.phone_number || 'Phone not available'}</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold mb-4 text-white">Our Newsletter</h4>
          <p className="text-sm mb-4 text-gray-300">Subscribe to our newsletter <br/> to get our latest updates</p>
          <div className="flex">
            <input type="email" placeholder="Enter Your Email" className="p-2 text-sm w-full bg-gray-700 rounded-l-md focus:outline-none" />
            <button className="bg-orange-500 p-2 rounded-r-md text-white"><FaArrowRight /></button>
          </div>
        </div>
      </div>

      {/* Bottom part */}
      {/* <div className="container mx-auto mt-8 text-center border-t border-gray-600 pt-4 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
          <span>© Created by <a href="https://www.linkedin.com/in/mayuri-mahadik-060099279/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline ml-1 transition-colors duration-300">Mayuri Raghunath Mahadik</a> 2024 | All Rights Reserved</span>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto mt-8 text-center border-t border-gray-600 pt-4 text-sm text-gray-400">
  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-96">
    <span>© Created by 
      <a href="https://www.linkedin.com/in/mayuri-mahadik-060099279/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline ml-1 transition-colors duration-300">
        Mayuri Raghunath Mahadik
      </a> 
       2024 | All Rights Reserved
    </span>
    <div className="flex space-x-4">
      <a href="#" className="hover:text-white">Terms & Conditions</a>
      <span>|</span>
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <span>|</span>
      <a href="#" className="hover:text-white">Contact Us</a>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
