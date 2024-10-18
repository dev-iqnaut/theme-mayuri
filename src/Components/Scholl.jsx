import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "./firebaseConfig"; // Adjust the path as necessary

const YourComponent = () => {
  const [schoolLogo, setSchoolLogo] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          console.log("Fetched site data:", siteData); // Log fetched data

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
        console.error("Error fetching school data:", err);
        setError(err.message || "Error fetching school data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchoolData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex items-center">
      <img
        src={schoolLogo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_lioPzz-gZp3vNwcaFWpFmnAqKxYxryo8Q&s"}
        alt={`${schoolName} Logo`}
        className="w-12 h-12 mr-2"
      />
      <span className="text-2xl font-bold text-gray-700">{schoolName || "School Name"}</span>
    </div>
  );
};

export default YourComponent;
