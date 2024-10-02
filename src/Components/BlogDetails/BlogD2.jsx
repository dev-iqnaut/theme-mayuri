

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const BlogD2 = () => {
  const categories = [
    { name: "EduTech Solutions", count: "01", link: "/edutech-solutions" },
    { name: "SmartAcademy", count: "07", link: "/smartacademy" },
    { name: "KnowledgeHub", count: "02", link: "/knowledgehub" },
    { name: "Specialist", count: "04", link: "/specialist" },
    { name: "Education is the door", count: "03", link: "/education-door" },
  ];

  const posts = [
    {
      id: 1,
      title: "Expand your horizons with Most Of education",
      category: "Category",
      comments: 0,
    },
    {
      id: 2,
      title: "Invest in education invest in yourself Best",
      category: "Category",
      comments: 0,
    },
    {
      id: 3,
      title: "Empower yourself through learning",
      category: "Category",
      comments: 0,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Section (Main Content) */}
      <div className="lg:col-span-2">
        {/* Tags Section */}
       
        {/* Blog Post Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-semibold text-green-500 mb-4">99</h1>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <p className="font-bold mt-4">Fahad Hossain_</p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLQbcpuuoy30XtrRF4HWxjYFHd5nhoudh-w&s"
            alt="Children Playing"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="https://img.freepik.com/premium-photo/young-woman-teacher-teaches-lesson-class-teenage-children-teacher-stands-near-school-desk-with-girl-student-checks-knowledge-education-school-college-teaching-concept_116407-12192.jpg"
            alt="Children Learning"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Bottom Section with Icons */}
        <div className="mt-8">
          <p className="text-gray-600">
            Aliquam eros justo, posuere loborti viverra laoreet mattis ullamcorper posuere viverra.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              <span className="text-gray-700">Knowledge is the key education is the door</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-pink-500 mr-2"></i>
              <span className="text-gray-700">Discover the power of education</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-yellow-500 mr-2"></i>
              <span className="text-gray-700">Education opens doors to opportunities, fosters growth</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-blue-500 mr-2"></i>
              <span className="text-gray-700">Expand your horizons with education</span>
            </div>
          </div>


          
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {['All Project', 'Edu Connect', 'Smart Academy'].map((tag, index) => (
              <button
                key={index}
                className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Post Navigation Section */}
        <div className="flex justify-between items-center my-6">
          <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">
            <i className="fas fa-chevron-left mr-2"></i> Previous post
          </a>
          <div className="flex space-x-4">
            
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
          <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">
            Next post <i className="fas fa-chevron-right ml-2"></i>
          </a>
        </div>

{/* 
<div className="flex justify-between items-center my-6">
 
  <div className="flex items-center">
    <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">
      <i className="fas fa-chevron-left mr-2"></i> Previous post
    </a>
  </div>

  
  <div className="flex space-x-4">
    <button className="bg-red-400 text-white rounded-full p-2 hover:bg-red-500 transition duration-300">
      <i className="fas fa-times"></i> {
    </button>
    <a href="#" className="text-gray-500 hover:text-red-500 transition duration-300">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="#" className="text-gray-500 hover:text-red-500 transition duration-300">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" className="text-gray-500 hover:text-red-500 transition duration-300">
      <i className="fab fa-pinterest"></i>
    </a>
  </div>

  
  <div className="flex items-center">
    <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">
      Next post <i className="fas fa-chevron-right ml-2"></i>
    </a>
  </div>
</div> */}




        {/* Comment Section */}
        {/* <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold mb-6">Write your comment</h3>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <i className="fas fa-phone absolute top-3 right-4 text-gray-400"></i>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <i className="fas fa-paper-plane absolute top-3 right-4 text-gray-400"></i>
              </div>
            </div>

            <div className="mb-6">
              <textarea
                placeholder="Write your message here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="5"
              ></textarea>
            </div>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Send Now
            </button>
          </form>
        </div> */}

<div className="bg-white shadow-md rounded-lg p-6 mt-8">
  <h3 className="text-xl font-semibold mb-6">Write your comment</h3>
  <form>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {/* Name Input with User Icon */}
      <div className="relative">
        <i className="fas fa-user absolute top-3 left-3 text-gray-400"></i> {/* User Icon */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Email Input with Envelope Icon */}
      <div className="relative">
        <i className="fas fa-envelope absolute top-3 left-3 text-gray-400"></i> {/* Email Icon */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>

    {/* Message Textarea with Comment Icon */}
    <div className="relative mb-6">
      <i className="fas fa-comment-dots absolute top-3 left-3 text-gray-400"></i> {/* Comment Icon */}
      <textarea
        placeholder="Write your message here"
        className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        rows="5"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition flex items-center">
      <i className="fas fa-paper-plane mr-2"></i> {/* Paper Plane Icon */}
      Send Now
    </button>
  </form>
</div>





      </div>

      {/* Right Section (Categories and Recent Posts) */}
      <div className="lg:col-span-1 space-y-8">
        {/* Categories Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href={category.link}
                  className="flex justify-between items-center border border-gray-300 p-4 rounded-lg hover:bg-green-100 hover:text-green-600 transition duration-300 ease-in-out"
                >
                  <span className="text-gray-700 font-medium">
                    {category.name}
                  </span>
                  <span className="text-gray-500">{category.count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <a
                key={post.id}
                href="#"
                className="block p-4 bg-white shadow-md rounded-md hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="text-sm text-gray-600 flex justify-between items-center mb-2">
                  <span>{post.category}</span>
                  <span>Comments {post.comments}</span>
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {post.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Tags_</h3>
          <div className="flex flex-wrap gap-2">
            {['LearnWell', 'Edu Pro', 'Study Boost', 'Academy', 'LearnEase', 'BrainWave'].map((tag, index) => (
              <button
                key={index}
                className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default BlogD2;
