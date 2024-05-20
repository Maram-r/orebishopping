import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Types = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  const contracts = [
    {
      type: "Computers Contracts",
      price: "50dt/month",
      duration: "1 year",
      details: "Covers repairs, replacements, and technical support for all types of computers including desktops, laptops, and tablets.",
      link: "/contracts/computers",
    },
    {
      type: "Phones Contracts",
      price: "30dt/month",
      duration: "1 year",
      details: "Includes coverage for accidental damage, theft, and software issues for smartphones and basic phones.",
      link: "/contracts/phones",
    },
    {
      type: "Home Appliances Contracts",
      price: "40dt/month",
      duration: "2 years",
      details: "Protects against malfunctions and damages for major home appliances such as refrigerators, washing machines, and ovens.",
      link: "/contracts/home-appliances",
    },
  ];

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contracts Types" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Contracts Types</span>{" "}
          Explore our range of contracts. Each plan offers unique benefits to suit your needs.
        </h1>
        <div className="space-y-4">
          {contracts.map((contract, index) => (
            <Link to={"Home/category/Smartphones"}  className="block border p-4 rounded-lg shadow-lg hover:bg-gray-100">
              <h2 className="text-lg font-semibold text-primeColor">{contract.type}</h2>
              <p className="text-lightText">Price: {contract.price}</p>
              <p className="text-lightText">Duration: {contract.duration}</p>
              <p className="text-lightText">Details: {contract.details}</p>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Types;
