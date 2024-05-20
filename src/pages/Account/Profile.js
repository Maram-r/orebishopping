
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found in localStorage.");
          setLoading(false);
          return;
        }

        console.log("Token:", token);

        const response = await fetch("http://localhost:5000/api/Profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("User data:", data);
          setUser(data);
        } else {
          console.error("Failed to fetch user profile. Status:", response.status);
        }
      } catch (error) {
        console.error("An error occurred while fetching the profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Failed to load user profile.</div>;
  }

  return (
    <div className="profile-container max-w-container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      <div className="profile-details">
        <p className="mb-4"><strong>Name:</strong> {user.name}</p>
        <p className="mb-4"><strong>Email:</strong> {user.email}</p>
        {/* Add more user details here as needed */}
      </div>
    </div>
  );
};

export default Profile;
