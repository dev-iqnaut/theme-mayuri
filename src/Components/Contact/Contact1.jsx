

// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const ContactSection = () => {
//   const [contactData, setContactData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContactData = async () => {
//       try {
//         const docRef = doc(db, "sites", "www.ascentm.in"); // Replace with your document reference
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const siteData = docSnap.data().siteData;
//           if (siteData && siteData["ContactUs"]) {
//             setContactData(siteData["ContactUs"]);
//           } else {
//             setError("Contact-Us data not found.");
//           }
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         setError(err.message || "Error fetching contact data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContactData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

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
//           <p className="text-gray-500">
//             {contactData.location || "Location not available."}
//           </p>
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
//           <p className="text-gray-500">
//             {contactData.email || "Email not available."}
//           </p>
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
//           <p className="text-gray-500">
//             {contactData.phone_number || "Phone number not available."}
//           </p>
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
      <div className="w-full h-64 md:h-96 mt-8 relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.087615796771!2d-122.47825568468355!3d37.81992797975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809b5f8159c1%3A0xb77b5f6b0eb75928!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1638572804026!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default ContactSection;
