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





























import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Make sure this path is correct

const ContactSection = () => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [diagnosticInfo, setDiagnosticInfo] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        console.log("Attempting to fetch document:", docRef.path);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const contactUsData = docSnap.data().ContactUs;
          setContactData(contactUsData);
          console.log("Fetched data:", contactUsData);
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        console.error("Error fetching contact data:", err);
        setError(err.message || "Error fetching contact data.");
        setDiagnosticInfo({
          errorCode: err.code,
          errorName: err.name,
          fullErrorMessage: err.toString(),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        {diagnosticInfo && (
          <details>
            <summary>Diagnostic Information</summary>
            <pre>{JSON.stringify(diagnosticInfo, null, 2)}</pre>
          </details>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Contact Us</h1>
      {contactData ? (
        <div>
          <p>Email: {contactData.email}</p>
          <p>Location: {contactData.location}</p>
          <p>Phone: {contactData.phone_number}</p>
          <p>Opening Hours: {contactData.opening_hours}</p>
          <p>
            Facebook: <a href={contactData.facebook_link}>{contactData.facebook_link}</a>
          </p>
          <p>
            LinkedIn: <a href={contactData.linkedin_link}>{contactData.linkedin_link}</a>
          </p>
          <p>
            Twitter: <a href={contactData.twitter_link}>{contactData.twitter_link}</a>
          </p>
        </div>
      ) : (
        <p>No contact data available.</p>
      )}
    </div>
  );
};

export default ContactSection;
