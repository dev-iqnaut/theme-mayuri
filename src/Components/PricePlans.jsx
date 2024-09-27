import React from 'react';

const PricingPlans = () => {
  return (
    <section className="py-12 px-10"> {/* Adjusted left and right padding */}
      {/* Section heading */}
      <div className="text-center mb-12">
        <h4 className="text-lg text-blue-500">Our Pricing</h4>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Transforming lives through <br /> knowledge by education
        </h2>
      </div>

      {/* Pricing cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Starter Plan</h3>
          <p className="text-4xl font-bold mb-4">$19<span className="text-lg font-normal">/mo</span></p>
          <ul className="mb-6">
            <li className="text-green-500">✓ Mistakes To Avoid</li>
            <li className="text-green-500">✓ Your Startup</li>
            <li className="text-green-500">✓ Know About Fonts</li>
            <li className="text-gray-400">✗ Winning Metric for Your Startup</li>
            <li className="text-gray-400">✗ Your Startup</li>
          </ul>
          <button className="px-6 py-2 bg-orange-200 text-orange-600 rounded-lg">Buy Now</button>
        </div>

        {/* Golden Plan */}
        <div className="bg-yellow-500 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Golden Plan</h3>
          <p className="text-4xl font-bold mb-4">$39<span className="text-lg font-normal">/mo</span></p>
          <ul className="mb-6">
            <li className="text-white">✓ Mistakes To Avoid</li>
            <li className="text-white">✓ Your Startup</li>
            <li className="text-white">✓ Know About Fonts</li>
            <li className="text-white">✓ Winning Metric for Your Startup</li>
            <li className="text-white">✓ Your Startup</li>
          </ul>
          <button className="px-6 py-2 bg-white text-yellow-500 rounded-lg">Buy Now</button>
        </div>

        {/* Platinum Plan */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Platinum Plan</h3>
          <p className="text-4xl font-bold mb-4">$79<span className="text-lg font-normal">/mo</span></p>
          <ul className="mb-6">
            <li className="text-green-500">✓ Mistakes To Avoid</li>
            <li className="text-green-500">✓ Your Startup</li>
            <li className="text-green-500">✓ Know About Fonts</li>
            <li className="text-green-500">✓ Winning Metric for Your Startup</li>
            <li className="text-green-500">✓ Your Startup</li>
          </ul>
          <button className="px-6 py-2 bg-orange-200 text-orange-600 rounded-lg">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
