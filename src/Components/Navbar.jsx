


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faBars, faEnvelope, faPhone, faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // For routing
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Adjust the path as necessary

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [schoolLogo, setSchoolLogo] = useState(""); // State for the school logo
  const [schoolName, setSchoolName] = useState(""); // State for the school name
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.location.href = selectedValue; // Redirect to selected page
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fetching contact data and school details from Firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          console.log("Fetched site data:", siteData); // Log fetched data

          // Fetching contact data
          if (siteData["ContactUs"]) {
            setContactData(siteData["ContactUs"]);
          }

          // Fetching school details
          if (siteData && siteData.Home && siteData.Home.schoolDetails) {
            const { schoolLogo, schoolName } = siteData.Home.schoolDetails;
            setSchoolLogo(schoolLogo);
            setSchoolName(schoolName);
          } else {
            console.error("School details not found in Home section.");
            setError("School details not found in Home section.");
          }
        } else {
          console.error("No such document!");
          setError("No such document!");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        {/* Upper pink bar */}
        <div className="bg-pink-600 p-2">
          <div className="container mx-auto flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex space-x-6 text-white text-sm">
              {loading ? (
                <p>Loading contact info...</p>
              ) : error ? (
                <p>{error}</p>
              ) : contactData ? (
                <>
                  <div className="flex items-center space-x-1">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{contactData.phone_number || "(Phone not available)"}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>{contactData.email || "Email not available"}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{contactData.location || "Location not available"}</span>
                  </div>
                </>
              ) : (
                <p>No contact data available</p>
              )}
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href={contactData?.facebook_link || "#"} className="text-white hover:text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={contactData?.twitter_link || "#"} className="text-white hover:text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={contactData?.linkedin_link || "#"} className="text-white hover:text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={schoolLogo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_lioPzz-gZp3vNwcaFWpFmnAqKxYxryo8Q&s"}
                alt={`${schoolName} Logo`}
                className="w-12 h-12 mr-2"
              />
              <span className="text-2xl font-bold text-gray-700">{schoolName || "Ascent"}</span>
            </div>

            {/* Full Menu (Hidden on small screens) */}
            <ul className="hidden md:flex items-center space-x-8">
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/">Home</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/about">About Us</Link>
              </li>
              {/* <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/new">New</Link>
              </li> */}

<li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black py-2 px-2 rounded bg-white hover:bg-gray-100" onChange={handleSelectChange}>
                  <option value="">Academic</option>
                  <option value="/academic_re">Academic Resources</option>
                  <option value="/academic">Academic</option>
                  <option value="/admission">Admission</option>
                  <option value="/news">News</option>
                  <option value="/faculty">Faculty</option>
                  <option value="/gallery">Gallery</option>
                  <option value="/infrastructure">Infrastructure</option>
                </select>
              </li>
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black py-2 px-2 rounded bg-white hover:bg-gray-100" onChange={handleSelectChange}>
                  <option value="">Services</option>
                  <option value="/service">Service</option>
                  <option value="/serviceDetails">Service Details</option>
                </select>
              </li>
             
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black py-2 px-2 rounded bg-white hover:bg-gray-100" onChange={handleSelectChange}>
                  <option value="">Blog</option>
                  <option value="/blog">Blog</option>
                  <option value="/blogDetails">Blog Details</option>
                </select>
              </li>

              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/faq">FAQ</Link>
              </li>


              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faSearch} className="text-gray-600 cursor-pointer" />
              <FontAwesomeIcon icon={faBars} className="text-gray-600 cursor-pointer md:hidden" onClick={toggleMenu} />
              <button className="bg-teal-500 text-white py-2 px-4 rounded-full flex items-center hover:bg-teal-600 transition duration-300">
                Get a quote
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white shadow-md p-4 md:hidden">
            <div className="flex justify-end">
              <FontAwesomeIcon icon={faTimes} className="text-gray-600 cursor-pointer" onClick={toggleMenu} />
            </div>
            <ul className="space-y-4">
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/about" onClick={toggleMenu}>About Us</Link>
              </li>

              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black py-2 px-2 rounded bg-white hover:bg-gray-100" onChange={handleSelectChange}>
                <option value="">Academic</option>
                  <option value="/academic_re">Academic Resources</option>
                  <option value="/academic">Academic</option>
                  <option value="/admission">Admission</option>
                  <option value="/news">News</option>
                  <option value="/faculty">Faculty</option>
                  <option value="/gallery">Gallery</option>
                  <option value="/infrastructure">Infrastructure</option>
                </select>
              </li>

              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black py-2 px-2 rounded bg-white hover:bg-gray-100" onChange={handleSelectChange}>
                  <option value="">Services</option>
                  <option value="/service">Service</option>
                  <option value="/serviceDetails">Service Details</option>
                </select>
              </li>
             
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black py-2 px-2 rounded bg-white hover:bg-gray-100" onChange={handleSelectChange}>
                  <option value="">Blog</option>
                  <option value="/blog">Blog</option>
                  <option value="/blogDetails">Blog Details</option>
                </select>
              </li>

              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/faq" onClick={toggleMenu}>FAQ</Link>
              </li>

              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
