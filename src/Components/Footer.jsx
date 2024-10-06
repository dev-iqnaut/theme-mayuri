import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from 'react-icons/fa'; // Ensure you have react-icons installed
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import additional icons

const Footer = () => {
  return (
    <footer className="bg-teal-600 py-8 border-t p-36">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
        {/* Logo and description */}
        <div className="flex flex-col items-center md:items-start">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_lioPzz-gZp3vNwcaFWpFmnAqKxYxryo8Q&s" alt="Ascent Logo" className="w-16 mb-2" />
          <p className="text-center md:text-left text-black max-w-xs text-sm">
            Ascent
          </p>
          <p className="text-center md:text-left text-black max-w-xs text-sm">
            Yes, there are many notable corporate businesses worldwide.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href=" " className="text-white hover:text-green-800"><FaFacebookF /></a>
            <a href=" " className="text-white hover:text-green-800"><FaTwitter /></a>
            <a href=" " className="text-white hover:text-green-800"><FaLinkedinIn /></a>
            <a href=" " className="text-white hover:text-green-800"><FaPinterest /></a>
          </div>
        </div>

        {/* Pages */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Pages</h4>
          <ul className="space-y-1 text-black text-sm">
            <li><a href=" " className="hover:text-green-600">About Us</a></li>
            <li><a href=" " className="hover:text-green-600">Latest Service</a></li>
            <li><a href=" " className="hover:text-green-600">Blog & News</a></li>
            <li><a href=" " className="hover:text-green-600">FAQ</a></li>
            <li><a href=" " className="hover:text-green-600">Our Creative Team</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-black text-sm flex flex-col items-start">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-white mr-2" />
              1179 KFC Road, Lisbon, Portugal
            </li>
            <li className="flex items-center">
              <FaEnvelope className=" text-white mr-2" />
              Sakib23@gmail.com
            </li>
            <li className="flex items-center">
              <FaPhone className="text-white mr-2" />
              012547892354
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom part */}
      <div className="container mx-auto mt-6 text-center border-t pt-4 text-black text-sm">
  <div className="flex justify-center items-center">
    © Created by Mayuri Raghunath Mahadik 2024 | All Rights Reserved
    <div className="flex ml-4 space-x-2">
      <a href=" " className="hover:text-green-600 mx-2">Terms & Conditions</a>
      <span>|</span>
      <a href=" " className="hover:text-green-600 mx-2">Privacy Policy</a>
      <span>|</span>
      <a href=" " className="hover:text-green-600 mx-2">Contact Us</a>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
