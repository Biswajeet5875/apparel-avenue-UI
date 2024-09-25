import React from "react";
import "./homepage-slider.css";

// change the section while importing data
const HomeSlider = () => {
  const products = Array.from({ length: 10 }, (_, sectionIdx) =>
    Array.from({ length: 10 }, (_, cardIdx) => ({
      id: `${sectionIdx}-${cardIdx}`,
      title: `Product ${sectionIdx + 1}-${cardIdx + 1}`,
      price: `${(Math.random() * 100).toFixed(2)}$`,
      image: "https://via.placeholder.com/150",
    }))
  );

  return (
    <div className="p-6 space-y-8">
      {products.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          <h2 className="text-2xl font-semibold mb-4">
            Product {sectionIdx + 1}
          </h2>
          <div className="overflow-x-scroll flex scrollbar-none space-x-4">
            {section.map((product) => (
              <div
                key={product.id}
                className="min-w-[300px] bg-white shadow-md rounded-md p-4 flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52 object-cover rounded-md"
                />
                <h3 className="text-lg font-medium mt-4">{product.title}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSlider;
