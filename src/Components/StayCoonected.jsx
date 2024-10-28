

// import React from "react";
// import stay from '../Components/Assets/Stay.jpeg';

// const StayConnected = () => {
//   return (
//     <div className="bg-orange-50 py-16">
//       <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
//         {/* Left Section - Text Content */}
//         <div className="space-y-4 max-w-lg text-center lg:text-left">
//           <p className="text-teal-500 font-semibold">Stay With Us</p>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//             The path to success starts with education
//           </h1>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies
//             dictum facilisis sem. Imperdiet massa turpis sit proin metus
//             volutpat.
//           </p>
//           <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition">
//             Read More
//           </button>
//         </div>

//         {/* Right Section - Image */}
//         <div className="w-full lg:w-auto">
//           <img
//             src={stay}
//             alt="Tree and Kids Illustration"
//             className="w-full max-w-md mx-auto lg:mx-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StayConnected;


import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Make sure firebaseConfig is correctly set up
import stay from '../Components/Assets/Stay.jpeg';

const StayConnected = () => {
  const [contactData, setContactData] = useState({
    email: "",
    facebookLink: "",
    linkedinLink: "",
    location: "",
    openingHours: "",
    phoneNumber: "",
    twitterLink: "",
  });
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  // Fetch contact data from Firestore
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in"); // Adjust collection and document path as needed
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData; // Accessing nested siteData
          if (siteData && siteData["contactUs"]) {
            setContactData(siteData["contactUs"]); // Setting the contact data
          } else {
            setError("Contact-Us data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching contact data.");
      } finally {
        setLoading(false); // Loading complete
      }
    };

    fetchContactData();
  }, []);

  // Render loading or error state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Section - Text Content */}
        <div className="space-y-4 max-w-lg text-center lg:text-left">
          <p className="text-teal-500 font-semibold">Stay With Us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            The path to success starts with education
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies
            dictum facilisis sem. Imperdiet massa turpis sit proin metus
            volutpat.
          </p>
          <p className="text-gray-700">
            Opening Hours: {contactData.openingHours} AM
          </p>
         
          <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition">
            Read More
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-auto">
          <img
            src={stay} // Replace with your image path
            alt="Illustration"
            className="w-full max-w-md mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
