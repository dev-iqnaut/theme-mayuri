import React from 'react';

const ContactSection = () => {
  return (
    <div className="w-full">
      {/* Contact Info Section */}
      <div className="flex justify-center items-center space-x-8 p-10">
        {/* Location Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/marker.png"
              alt="Location Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <p className="text-gray-500">120os road no12, Mirpur, Bangladesh</p>
        </div>

        {/* Mail Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email.png"
              alt="Mail Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Mail</h3>
          <p className="text-gray-500">nafiz123@gmail.com - fahad1234@mail.com</p>
        </div>

        {/* Contact Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Phone Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-gray-500">013254974147, 01258369741</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-64 mt-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YgIQjVoqqUpsZlTVRkVxsL0omE2X_X0U_g&s" // Replace with actual map image or Google Maps embed
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactSection;
