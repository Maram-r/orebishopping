import React, { useEffect, useState } from "react";

const ClaimDetails = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/claims");
        const data = await response.json();
        setClaims(data);
      } catch (error) {
        console.error("Error fetching claims:", error);
      }
    };

    fetchClaims();
  }, []);

  return (
    <div className="max-w-container mx-auto px-4">
      <h1 className="font-titleFont font-semibold text-3xl">Claim Details</h1>
      {claims.length > 0 ? (
        <div className="py-6">
          {claims.map((claim) => (
            <div key={claim.id} className="mb-4 p-4 border border-gray-300">
              <p className="font-titleFont font-semibold">Name: {claim.clientName}</p>
              <p>Email: {claim.email}</p>
              <p>Description: {claim.messages}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No claims submitted yet.</p>
      )}
    </div>
  );
};

export default ClaimDetails;