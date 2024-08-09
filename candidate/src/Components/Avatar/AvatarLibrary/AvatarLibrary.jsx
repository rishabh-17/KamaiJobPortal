import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function AvatarLibrary({
  avatarLibraryOpen,
  setAvatarLibraryOpen,
  selectedAvatar,
  setSelectedAvatar,
}) {
  const avatars = [
    "https://avatar.iran.liara.run/public/1",
    "https://avatar.iran.liara.run/public/2",
    "https://avatar.iran.liara.run/public/3",
    "https://avatar.iran.liara.run/public/4",
    "https://avatar.iran.liara.run/public/5",
    "https://avatar.iran.liara.run/public/6",
    "https://avatar.iran.liara.run/public/7",
    "https://avatar.iran.liara.run/public/6",
    "https://avatar.iran.liara.run/public/9",
    "https://avatar.iran.liara.run/public/10",
    "https://avatar.iran.liara.run/public/11",
    "https://avatar.iran.liara.run/public/12",
  ];

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  return (
    <Modal
      show={avatarLibraryOpen}
      onHide={() => setAvatarLibraryOpen(false)}
      size="lg"
      centered
    >
      <Modal.Body>
        <div className="mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Avatar Library
          </h2>
          <p className="text-gray-600 mb-10">
            Choose your avatar based on your preference :)
          </p>
          <div className="">
            <div className="library-container">
              <div className="flex gap-5 overflow-auto flex-wrap w-full avatar-grid">
                {avatars?.map((avatar, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 ${
                      selectedAvatar === avatar
                        ? "border-2 border-orange-400 p-1 bg-orange-100"
                        : ""
                    }`}
                    onClick={() => handleAvatarClick(avatar)}
                  >
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      style={{ height: "100px", width: "100px" }}
                    />
                    <p>Avatar {index + 1}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                {selectedAvatar && (
                  <button className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-300">
                    Select
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AvatarLibrary;
