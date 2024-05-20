
// src/components/Contrats.js
import React, { useEffect, useState } from "react";

const Contracts = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await fetch('http://localhost:5000/contracts');
        const data = await response.json();
        setContracts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contracts:", error);
        setLoading(false);
      }
    };

    fetchContracts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Contrats</h1>
      <ul>
        {contracts.map((contract) => (
          <li key={contract._id}>
            <h2>{contract.name}</h2>
            <p>Email: {contract.email}</p>
            <p>Description: {contract.description}</p>
            <p>Start Date: {new Date(contract.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(contract.endDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contracts;
