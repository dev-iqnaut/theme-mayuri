


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faPhone, faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
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
          if (siteData["contactUs"]) {
            setContactData(siteData["contactUs"]);
            console.log("Fetched contact data:", siteData["contactUs"]);
          } else {
            console.error("Contact data not found in contactUs section.");
          }

          // Fetching school details
          if (siteData?.home?.schoolDetails) {
            const { schoolLogo, schoolName } = siteData.home.schoolDetails;
            setSchoolLogo(schoolLogo);
            setSchoolName(schoolName);
            console.log("School Logo:", schoolLogo, "School Name:", schoolName);
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
        {/* <div className="bg-pink-600 p-2 px-4 md:px-32">
          <div className="container mx-auto flex justify-between items-center">
           
            <div className="flex space-x-6 text-white text-sm">
              {loading ? (
                <p>Loading contact info...</p>
              ) : error ? (
                <p>{error}</p>
              ) : contactData ? (
                <>
                  <div className="flex items-center space-x-1">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{contactData.phoneNumber || "(Phone not available)"}</span>
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

          
            <div className="flex space-x-4">
              <a href={contactData?.facebookLink || "#"} className="text-white hover:text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={contactData?.twitterLink || "#"} className="text-white hover:text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={contactData?.linkedinLink || "#"} className="text-white hover:text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </div>
          </div>
        </div> */}

<div className="bg-pink-600 p-2 px-4 md:px-32">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    {/* Contact Info */}
    <div className="flex flex-col md:flex-row md:space-x-6 text-white text-sm mb-2 md:mb-0">
      {loading ? (
        <p>Loading contact info...</p>
      ) : error ? (
        <p>{error}</p>
      ) : contactData ? (
        <div className="flex space-x-6">
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faPhone} />
            <span>{contactData.phoneNumber || "(Phone not available)"}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{contactData.email || "Email not available"}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>{contactData.location || "Location not available"}</span>
          </div>
        </div>
      ) : (
        <p>No contact data available</p>
      )}
    </div>

    {/* Social Media Links */}
    <div className="flex space-x-4 mt-2 md:mt-0">
      <a href={contactData?.facebookLink || "#"} className="text-white hover:text-gray-300 transition-colors duration-200">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href={contactData?.twitterLink || "#"} className="text-white hover:text-gray-300 transition-colors duration-200">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href={contactData?.linkedinLink || "#"} className="text-white hover:text-gray-300 transition-colors duration-200">
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
          <div className="container mx-auto flex justify-between items-center px-4 md:px-32">
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
            {/* <ul className="hidden md:flex items-center space-x-8">
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/">Home</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/about">About Us</Link>
              </li>
            
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200 relative">
          <div className="flex items-center">
    <select
      className="text-black py-2 pl-2 pr-8 rounded bg-white hover:bg-gray-100 appearance-none"
      onChange={handleSelectChange}
    >
      <option value="">Academic</option>
      <option value="/academic_re">Academic Resources</option>
      <option value="/academic">Academic</option>
      <option value="/admission">Admission</option>
      <option value="/news">News</option>
      <option value="/faculty">Faculty</option>
      <option value="/cbse">CBSE Compliance</option>
      <option value="/gallery">Gallery</option>
      <option value="/infrastructure">Infrastructure</option>
    </select>
    <span className="absolute right-16 top-3 pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </div>
</li>

             

<li className="text-gray-700 hover:text-gray-900 transition-colors duration-200 relative">
  <select
    className="text-black py-2 px-2 rounded bg-white hover:bg-gray-100 appearance-none pr-8"
    onChange={handleSelectChange}
  >
    <option value="">Services</option>
    <option value="/service">Service</option>
    <option value="/serviceDetails">Service Details</option>
  </select>
  <div className="absolute right-14 top-3 pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</li>

              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/contact">Contact</Link>
              </li>
            </ul> */}

<ul className="hidden md:flex items-center space-x-8">
  <li className="text-gray-700 hover:text-orange-500 transition-colors duration-200">
    <Link to="/">Home</Link>
  </li>
  <li className="text-gray-700 hover:text-orange-500 transition-colors duration-200">
    <Link to="/about">About Us</Link>
  </li>

<li className="text-gray-700 hover:text-gray-900 transition-colors duration-200 relative">
        <div className="flex items-center group">
          {/* Academic button */}
          <button className="hover:text-orange-500">Academic</button>
          
          {/* Dropdown menu positioned below the button */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-teal-500 text-white rounded-md p-2 mt-1 z-10">
            <Link to="/academic_re" className="block px-4 py-1 hover:bg-teal-700">Academic Resources</Link>
            <Link to="/academic" className="block px-4 py-1 hover:bg-teal-700">Academic</Link>
            <Link to="/admission" className="block px-4 py-1 hover:bg-teal-700">Admission</Link>
            <Link to="/news" className="block px-4 py-1 hover:bg-teal-700">News</Link>
            <Link to="/faculty" className="block px-4 py-1 hover:bg-teal-700">Faculty</Link>
            <Link to="/cbse" className="block px-4 py-1 hover:bg-teal-700">CBSE Compliance</Link>
            <Link to="/gallery" className="block px-4 py-1 hover:bg-teal-700">Gallery</Link>
            <Link to="/infrastructure" className="block px-4 py-1 hover:bg-teal-700">Infrastructure</Link>
          </div>
        </div>
      </li>

  {/* Dropdown for Services */}
  
  <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200 relative">
        <div className="flex items-center group">
          {/* Services button */}
          <button className="hover:text-orange-500">Services</button>
          
          {/* Dropdown menu, positioned below the button */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-teal-500 text-white rounded-md p-2 mt-1 z-10">
            <Link to="/service" className="block px-4 py-1 hover:bg-teal-700">Service</Link>
            <Link to="/serviceDetails" className="block px-4 py-1 hover:bg-teal-700">Service Details</Link>
          </div>
        </div>
      </li>
      <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200 relative">
        <div className="flex items-center group">
          {/* Services button */}
          <button className="hover:text-orange-500">Blog</button>
          
          {/* Dropdown menu, positioned below the button */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-teal-500 text-white rounded-md p-2 mt-1 z-10">
            <Link to="/blog" className="block px-4 py-1 hover:bg-teal-700">Blog</Link>
            <Link to="/blogDetails" className="block px-4 py-1 hover:bg-teal-700">Blog Details</Link>
          </div>
        </div>
      </li>

  <li className="text-gray-700 hover:text-orange-500 transition-colors duration-200">
    <Link to="/faq">FAQ</Link>
  </li>
  <li className="text-gray-700 hover:text-orange-500 transition-colors duration-200">
    <Link to="/contact">Contact</Link>
  </li>
</ul>


            {/* Right Section */}
            <div className="flex items-center space-x-4">
             
              <FontAwesomeIcon icon={faBars} className="text-gray-600 cursor-pointer md:hidden" onClick={toggleMenu} />
              <button className="bg-teal-500 text-white py-2 px-4 rounded-full flex items-center hover:bg-teal-600 transition duration-300">
                Get a quote
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg p-4">
            <ul className="flex flex-col space-y-4">
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/">Home</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <select className="text-black py-2 px-2 rounded bg-white hover:bg-gray-100" onChange={handleSelectChange}>
                  <option value="">Academic</option>
                  <option value="/academic_re">Academic Resources</option>
                  <option value="/academic">Academic</option>
                  <option value="/admission">Admission</option>
                  <option value="/news">News</option>
                  <option value="/faculty">Faculty</option>
                  <option value="/cbse">CBSE Compliance</option>
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
                  <option value="">Blogs</option>
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
            <div className="flex justify-end mt-4">
              <FontAwesomeIcon icon={faTimes} className="text-gray-600 cursor-pointer" onClick={toggleMenu} />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
