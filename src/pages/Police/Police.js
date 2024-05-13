import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Policy" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Police</span>{" "}
          This Part of the our Services is Coming Soon ! Stay Tuned For The Anti-Threft Protection ! 

        </h1>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;