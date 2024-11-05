
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const ConnectedH = () => {
  const [contactData, setContactData] = useState({
    email: '',
    facebookLink: '',
    linkedinLink: '',
    location: '',
    openingHours: '',
    phoneNumber: '',
    twitterLink: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const docRef = doc(db, 'sites', 'www.ascentm.in');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData?.contactUs) {
            setContactData(siteData.contactUs);
          } else {
            setError('Contact-Us data not found.');
          }
        } else {
          throw new Error('No such document!');
        }
      } catch (err) {
        setError(err.message || 'Error fetching contact data.');
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="relative flex items-center justify-between py-2 px-6 lg:px-32 bg-gradient-to-b from-green-50 to-white h-screen">
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left: Display Contact Data */}
        <div className="md:w-1/2 w-full space-y-4 text-center md:text-left">
          <h3 className="text-gray-500 font-semibold">Get Connected</h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Education That Sparks Imagination <br />
            Nurturing Curiosity Inspire
          </h1>
         
          <p className="text-gray-700">
            Opening Hours: {contactData.openingHours}
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-2 space-y-4 md:space-y-0">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              Submit &rarr;
            </button>
          </div>
        </div>
        
        {/* Right: Image of Boy */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://img.freepik.com/premium-vector/schoolboy-saying-hello-time-back-school_546897-234.jpg"
            alt="Boy background"
            className="object-contain w-1/2 md:w-3/4 lg:w-1/2 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectedH;
