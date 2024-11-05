

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore instance from your Firebase configuration file

function ParentsCorner() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Document data:", data); // Log the data structure for debugging

          // Accessing parentsCorner within siteData
          const contentUrl = data.siteData?.parentsCorner?.content;
          if (contentUrl) {
            setContent(contentUrl);
          } else {
            console.log("The parentsCorner or content field is missing in the Firestore document.");
          }
        } else {
          console.error("No such document found! Check your collection and document ID.");
        }
      } catch (error) {
        console.error("Error fetching document:", error.message);
      } finally {
        setLoading(false); // Set loading to false once data fetch is complete
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 border-2 border-green-500 rounded-lg shadow-lg bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-4">Parents Corner</h2>
      {loading ? (
        <p className="text-lg text-gray-600">Loading...</p>
      ) : (
        content && (
          <img
            className="w-full h-auto rounded-md mt-4"
            src={content}
            alt="Parents Corner"
          />
        )
      )}
    </div>
  );
}

export default ParentsCorner;
