import React from "react";
import Banner_Details from "./banner-details";
import { Button } from "reactstrap";

const Banners = () => {
  const sectionData = [
    {
      bannerSrc: "https://via.placeholder.com/150",
      title: "Section 1 Title",
      description: "Description for section 1.",
    },
    {
      bannerSrc: "https://via.placeholder.com/150",
      title: "Section 2 Title",
      description: "Description for section 2.",
    },
    {
      bannerSrc: "https://via.placeholder.com/150",
      title: "Section 3 Title",
      description: "Description for section 3.",
    },
    {
      bannerSrc: "https://via.placeholder.com/150",
      title: "Section 4 Title",
      description: "Description for section 4.",
    },
    {
      bannerSrc: "https://via.placeholder.com/150",
      title: "Section 5 Title",
      description: "Description for section 5.",
    },
  ];

  return (
    <div className=" p-6">
      {sectionData.map((section, index) => (
        <Banner_Details
          key={index}
          bannerSrc={section.bannerSrc}
          title={section.title}
          description={section.description}
        />
      ))}
    </div>
  );
};

export default Banners;
