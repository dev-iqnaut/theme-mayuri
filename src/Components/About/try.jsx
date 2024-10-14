// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const AboutUsSection2 = () => {
//   const [aboutData, setAboutData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         console.log("Fetching about data...");
//         const docRef = doc(db, "sites", "www.ascentm.in");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           console.log("Document fetched successfully:", docSnap.data());
//           const siteData = docSnap.data().siteData;
//           setAboutData(siteData["About-Us"]); // Access the "About-Us" map
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         console.error("Detailed error fetching about data:", err);
//         setError(err.message || "Error fetching about data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAboutData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h1>About Us</h1>
//       {aboutData ? (
//         <div>
//           <h2>Focus</h2>
//           <p>{aboutData.focus}</p>
//           <h2>Mission</h2>
//           <p>{aboutData.mission}</p>
//           <h2>Principal's Message</h2>
//           <p>{aboutData.principal_message.principal_message}</p>
//           <img src={aboutData.principal_message.principal_image} alt="Principal" />
//           <h2>School History</h2>
//           <p>{aboutData.school_history}</p>
//           <h2>Vision</h2>
//           <p>{aboutData.vision}</p>
//         </div>
//       ) : (
//         <p>No about data available.</p>
//       )}
//     </div>
//   );
// };

// export default AboutUsSection2;








import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const AboutUsSection2 = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        console.log("Fetching about data...");
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document fetched successfully:", docSnap.data());

          const siteData = docSnap.data().siteData;
          console.log("Site Data fetched:", siteData); // Log the entire siteData

          // Ensure that siteData and "About-Us" exist
          if (siteData && siteData["About-Us".trim()]) {
            setAboutData(siteData["About-Us".trim()]); // Access the "About-Us" field
            console.log("About data set:", siteData["About-Us".trim()]); // Log the About-Us data
          } else {
            console.error("About-Us data not found in siteData");
            setError("About-Us data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        console.error("Detailed error fetching about data:", err);
        setError(err.message || "Error fetching about data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Check if aboutData is set correctly
  console.log("Rendering aboutData:", aboutData);

  return (
    <div>
      <h1>About Us</h1>
      {aboutData ? (
        <div>
          <h2>Focus</h2>
          <p>{aboutData.focus || "Focus data not available."}</p>
          <h2>Mission</h2>
          <p>{aboutData.mission || "Mission data not available."}</p>
          <h2>Principal's Message</h2>
          <p>{aboutData.principal_message?.principal_message || "Principal's message not available."}</p>
          {aboutData.principal_message?.principal_image ? (
            <img src={aboutData.principal_message.principal_image} alt="Principal" />
          ) : (
            <p>Principal image not available.</p>
          )}
          <h2>School History</h2>
          <p>{aboutData.school_history || "School history not available."}</p>
          <h2>Vision</h2>
          <p>{aboutData.vision || "Vision data not available."}</p>
        </div>
      ) : (
        <p>No about data available.</p>
      )}
    </div>
  );
};

export default AboutUsSection2;
