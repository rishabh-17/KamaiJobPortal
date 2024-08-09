import React, { useState } from "react";
// import './style.css';

function AvatarLibrary() {
  const avatars = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
    "avatar5.png",
    "avatar6.png",
    "avatar7.png",
    "avatar8.png",
    "avatar9.png",
    "avatar10.png",
    "avatar11.png",
    "avatar12.png",
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  return (
    <div className="library-container">
      <h2>Avatar Library</h2>
      <p>Choose your avatar based on your preference :)</p>
      <div className="avatar-grid">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`avatar-item ${
              selectedAvatar === avatar ? "selected" : ""
            }`}
            onClick={() => handleAvatarClick(avatar)}
          >
            <img src={avatar} alt={`Avatar ${index + 1}`} />
            <p>Akash</p>
          </div>
        ))}
      </div>
      <div className="library-footer">
        <button className="btn-back">Go Back</button>
        <button className="btn-next">Next</button>
      </div>
    </div>
  );
}

export default AvatarLibrary;
