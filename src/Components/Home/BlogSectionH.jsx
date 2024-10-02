import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Empowering Children Through Education the a Igniting',
      date: 'October 19, 2023',
      author: 'By admin',
      image: 'https://images.indianexpress.com/2018/09/room-dreamstime.jpg?w=414',
      description: 'Empowering children to unlock their potential...',
    },
    {
      id: 2,
      title: 'Joyful Journeys Childcare and Education Igniting Curiosity',
      date: 'October 19, 2023',
      author: 'By admin',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwumYRWT-HL0yM84f0NpSmI8eskIj_7f0lw&s',
      description: 'Childcare that sparks curiosity...',
    },
    {
      id: 3,
      title: 'Empowering Children Through Education the a Igniting Curiosity and Imagination',
      date: 'October 19, 2023',
      author: 'By admin',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBLC8fhrPGV99tj5WUT6l9kyrzxFb6LwI5w&s',
      description: 'Igniting curiosity and imagination...',
    },
  ];

  return (
    <div className="bg-[#FEF7F3] py-10">
      <div className="container mx-auto px-28">
        <h2 className="text-sm font-semibold text-teal-500">Latest Blog And News</h2>
        <h1 className="text-3xl font-bold mt-2 mb-8">Wonderworks Child Development Center Discovery Kids Preschool</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="grid gap-6">
            {blogs.slice(0, 2).map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-lg p-4 flex">
                <img src={blog.image} alt={blog.title} className="w-1/3 rounded-lg" />
                <div className="ml-4">
                  <div className="text-sm text-gray-500">{blog.date} | {blog.author}</div>
                  <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
                  <a href="#" className="text-teal-500 mt-2 inline-block">Read More →</a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <img src={blogs[2].image} alt={blogs[2].title} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-6">
              <div className="text-sm text-gray-500">{blogs[2].date} | {blogs[2].author}</div>
              <h3 className="text-lg font-bold mt-2">{blogs[2].title}</h3>
              <a href="#" className="text-teal-500 mt-2 inline-block">Read More →</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="p-2 rounded-full bg-green-500 text-white mr-4">
            ←
          </button>
          <button className="p-2 rounded-full bg-green-500 text-white">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
