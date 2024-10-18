// import React from 'react';

// const ContactSection = () => {
//   return (
//     <div className="w-full">
//       {/* Contact Info Section */}
//       <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-6 md:p-10">
//         {/* Location Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-full md:w-1/3">
//           <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
//             <img
//               src="https://img.icons8.com/ios-filled/50/000000/marker.png"
//               alt="Location Icon"
//               className="w-10 h-10"
//             />
//           </div>
//           <h3 className="text-xl font-bold mb-2">Location</h3>
//           <p className="text-gray-500">120os road no12, Mirpur, Bangladesh</p>
//         </div>

//         {/* Mail Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-full md:w-1/3">
//           <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
//             <img
//               src="https://img.icons8.com/ios-filled/50/000000/email.png"
//               alt="Mail Icon"
//               className="w-10 h-10"
//             />
//           </div>
//           <h3 className="text-xl font-bold mb-2">Mail</h3>
//           <p className="text-gray-500">nafiz123@gmail.com - fahad1234@mail.com</p>
//         </div>

//         {/* Contact Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-full md:w-1/3">
//           <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
//             <img
//               src="https://img.icons8.com/ios-filled/50/000000/phone.png"
//               alt="Phone Icon"
//               className="w-10 h-10"
//             />
//           </div>
//           <h3 className="text-xl font-bold mb-2">Contact</h3>
//           <p className="text-gray-500">013254974147, 01258369741</p>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="w-full h-64 mt-8">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YgIQjVoqqUpsZlTVRkVxsL0omE2X_X0U_g&s" // Replace with actual map image or Google Maps embed
//           alt="Map"
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default ContactSection;















// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const ContactUsSection = () => {
//   const [contactData, setContactData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContactData = async () => {
//       try {
//         console.log("Fetching contact data...");
//         const docRef = doc(db, "sites", "www.ascentm.in");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           console.log("Document fetched successfully:", docSnap.data());

//           const siteData = docSnap.data().siteData;
//           console.log("Site Data fetched:", siteData); // Log the entire siteData

//           // Ensure that siteData and "ContactUs" exist
//           if (siteData && siteData["ContactUs"]) {
//             setContactData(siteData["ContactUs"]); // Access the "ContactUs" field
//             console.log("Contact data set:", siteData["ContactUs"]); // Log the ContactUs data
//           } else {
//             console.error("Contact-Us data not found in siteData");
//             setError("Contact-Us data not found.");
//           }
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         console.error("Detailed error fetching contact data:", err);
//         setError(err.message || "Error fetching contact data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContactData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       {contactData ? (
//         <div>
//           <h2>Email</h2>
//           <p>{contactData.email || "Email not available."}</p>

//           <h2>Phone Number</h2>
//           <p>{contactData.phone_number || "Phone number not available."}</p>

//           <h2>Location</h2>
//           <p>{contactData.location || "Location not available."}</p>

//           <h2>Opening Hours</h2>
//           <p>{contactData.opening_hours ? `${contactData.opening_hours} AM` : "Opening hours not available."}</p>

//           <h2>Facebook</h2>
//           {contactData.facebook_link ? (
//             <p>
//               Join us on Facebook:{" "}
//               <a href={contactData.facebook_link} target="_blank" rel="noopener noreferrer">
//                 {contactData.facebook_link}
//               </a>
//             </p>
//           ) : (
//             <p>Facebook link not available.</p>
//           )}

//           <h2>LinkedIn</h2>
//           {contactData.linkedin_link ? (
//             <p>
//               Join us on LinkedIn:{" "}
//               <a href={contactData.linkedin_link} target="_blank" rel="noopener noreferrer">
//                 {contactData.linkedin_link}
//               </a>
//             </p>
//           ) : (
//             <p>LinkedIn link not available.</p>
//           )}

//           <h2>Twitter</h2>
//           {contactData.twitter_link ? (
//             <p>
//               Follow us on Twitter:{" "}
//               <a href={contactData.twitter_link} target="_blank" rel="noopener noreferrer">
//                 {contactData.twitter_link}
//               </a>
//             </p>
//           ) : (
//             <p>Twitter link not available.</p>
//           )}
//         </div>
//       ) : (
//         <p>No contact data available.</p>
//       )}
//     </div>
//   );
// };

// export default ContactUsSection;













import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const ContactSection = () => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in"); // Replace with your document reference
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData["ContactUs"]) {
            setContactData(siteData["ContactUs"]);
          } else {
            setError("Contact-Us data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching contact data.");
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full">
      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-6 md:p-10">
        {/* Location Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-full md:w-1/3">
          <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/marker.png"
              alt="Location Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <p className="text-gray-500">
            {contactData.location || "Location not available."}
          </p>
        </div>

        {/* Mail Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-full md:w-1/3">
          <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email.png"
              alt="Mail Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Mail</h3>
          <p className="text-gray-500">
            {contactData.email || "Email not available."}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-full md:w-1/3">
          <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Phone Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-gray-500">
            {contactData.phone_number || "Phone number not available."}
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-64 mt-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YgIQjVoqqUpsZlTVRkVxsL0omE2X_X0U_g&s" // Replace with actual map image or Google Maps embed
          alt="Map"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactSection;
