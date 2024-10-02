




import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faBars, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'; 

// Define the handleSelectChange function
const handleSelectChange = (event) => {
  const selectedValue = event.target.value;
  if (selectedValue) {
    window.location.href = selectedValue; // Redirect to selected page
  }
};


const Navbar = () => {
  return (
    <div >
          <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      {/* Upper pink bar */}
      <div className=" bg-pink-600 p-2 ">
        <div className="container mx-auto flex justify-between items-center ">
          {/* Contact Info */}
          <div className="flex space-x-6 text-white text-sm pl-28">
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faPhone} />
              <span>(629) 555-0129</span>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>6391 Elgin St. Celina, 10299</span>
            </div>
          </div>

          {/* Social Icons */}
          {/* <div className="flex space-x-4">
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div> */}
          <div className="flex space-x-4 pr-32">
  <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
  <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
    <FontAwesomeIcon icon={faPinterestP} />
  </a>
</div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md p-4 pl-28">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_lioPzz-gZp3vNwcaFWpFmnAqKxYxryo8Q&s" alt="Ascent Logo" className="w-12 h-12 mr-2" />
            <span className="text-2xl font-bold text-gray-700">Ascent</span>
          </div>

          {/* Navigation */}
          {/* <ul className="flex space-x-8">
            <li className="text-gray-700 hover:text-gray-900">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-700 hover:text-gray-900">
              <a href="/About">About Us</a>
            </li>
            <li>
              <select
              className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
              onChange={handleSelectChange}
            >
              <option value="">Services</option>
              <option value="/Service">Service</option>
              <option value="/Service Details">Service Details</option>
            </select>
            </li> 

            <li className="text-gray-700 hover:text-gray-900">
              <a href="/FAQ">FAQ</a>
            </li>
            <li className="text-gray-700 hover:text-gray-900">
            <select
              className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
              onChange={handleSelectChange}
            >
              <option value="">Blog</option>
              <option value="/Blogs">Blog</option>
              <option value="/BlogDetails">BlogDetails</option>
            </select>
            </li>
            <li className="text-gray-700 hover:text-gray-900">
              <a href="/Contact">Contact</a>
            </li>
          </ul> */}

<ul className="flex items-center space-x-8">
  {/* Home */}
  <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
    <a href="/">Home</a>
  </li>

  {/* About Us */}
  <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
    <a href="/About">About Us</a>
  </li>

  {/* Services Dropdown */}
  <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
    <select
      className="text-black py-2 px-2 rounded transition-colors duration-200 bg-white hover:bg-gray-100"
      onChange={handleSelectChange}
    >
      <option value="">Services</option>
      <option value="/Service">Service</option>
      <option value="/ServiceDetails">Service Details</option>
    </select>
  </li>

  {/* FAQ */}
  <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
    <a href="/FAQ">FAQ</a>
  </li>

  {/* Blog Dropdown */}
  <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
    <select
      className="text-black py-2 px-2 rounded transition-colors duration-200 bg-white hover:bg-gray-100"
      onChange={handleSelectChange}
    >
      <option value="">Blog</option>
      <option value="/Blog">Blog</option>
      <option value="/BlogDetails">Blog Details</option>
    </select>
  </li>

  {/* Contact */}
  <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
    <a href="/Contact">Contact</a>
  </li>
</ul>





          {/* Right Section */}
          <div className="flex items-center space-x-4 pr-24">
            {/* Search Icon */}
            <FontAwesomeIcon icon={faSearch} className="text-gray-600 cursor-pointer" />

            {/* Menu Icon */}
            <FontAwesomeIcon icon={faBars} className="text-gray-600 cursor-pointer" />

            {/* Get a Quote Button */}
            <button className="bg-teal-500 text-white py-2 px-4 rounded-full flex items-center hover:bg-teal-600 transition duration-300">
              Get a quote
             
            </button>
          </div>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
