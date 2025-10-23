import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setMobile(user.phone || "");
    }
  }, [user]);

  const handleFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) return alert("Please select a photo first");

    const formData = new FormData();
    formData.append("photo", selectedImage);

    try {
      const res = await axios.post("http://localhost:5000/api/user/upload-photo", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      setSelectedImage(null);
      alert("Profile photo updated successfully!");
      window.dispatchEvent(new Event("userUpdated"));
    } catch (err) {
      console.error("Upload error:", err);
      if (err.response && err.response.status === 401) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/";
      } else {
        alert("Error uploading photo");
      }
    }
  };

  const handleRemovePhoto = async () => {
    if (!window.confirm("Are you sure you want to remove your photo?")) return;

    try {
      const res = await axios.delete("http://localhost:5000/api/user/remove-photo", {
        headers: { Authorization: `Bearer ${token}` },
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      setSelectedImage(null);
      alert("Profile photo removed successfully!");
      window.dispatchEvent(new Event("userUpdated"));
    } catch (err) {
      console.error("Remove error:", err);
      alert("Error removing photo");
    }
  };
  const handleSaveProfile = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/user/update/${user._id}`,
        { name, email, phone: mobile },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update local storage with the updated user data
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating profile");
    }
  };

  return (
    <div className="profile-page-container">
      <div className="profile-sidebar">
        <h3>Manage your Account</h3>
        <ul>
          <li className="active">Basic Profile</li>
          <li>Your Shortlists</li>
          <li>Owners you Contacted</li>
          <li>Your Payments</li>
          <li>Your Properties</li>
          <li>Interested in your Properties</li>
        </ul>
      </div>

      <div className="profile-content">
        <h2>Edit Your Profile</h2>

        <div className="profile-section">
          <div className="profile-photo-upload">
            <label>Profile Photo</label>
            <div className="photo-box">
              <img
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : user?.photo
                    ? user.photo.startsWith("http")
                      ? user.photo
                      : `http://localhost:5000${user.photo}`
                    : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                }
                alt="Profile"
                className="profile-img-preview"
              />

              <input type="file" accept="image/*" onChange={handleFileChange} />

              <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                <button onClick={handleUpload}>Upload</button>
                {user?.photo && <button onClick={handleRemovePhoto}>Remove</button>}
              </div>
            </div>
          </div>

          <div className="profile-fields">
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email Address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Mobile Phone</label>
            <input value={mobile} onChange={(e) => setMobile(e.target.value)} />

            <button className="save-btn" onClick={handleSaveProfile}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
