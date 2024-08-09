import React, { useState } from "react";
import Header from "../../Header/Header";
import AvatarLibrary from "../AvatarLibrary/AvatarLibrary";

function AvatarSelection({ setPreview, selectedAvatar, setSelectedAvatar }) {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("Telugu");
  const [voice, setVoice] = useState("Akash");
  const [avatarLibraryOpen, setAvatarLibraryOpen] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleVoiceChange = (e) => {
    setVoice(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-white rounded-lg shadow-md">
      <Header />
      <AvatarLibrary
        setAvatarLibraryOpen={setAvatarLibraryOpen}
        avatarLibraryOpen={avatarLibraryOpen}
        setSelectedAvatar={setSelectedAvatar}
        selectedAvatar={selectedAvatar}
      />
      <h2 className="text-3xl text-center text-gray-800 mb-4 mt-28">
        Create Video Job Description
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 divide-x px-4">
        <div className="px-6">
          <div className="flex flex-col mb-4">
            <h3 className="text-xl mb-4">Step 1: Select Your Avatar</h3>
            <div className="flex flex-col gap-2 w-48 items-center">
              <img
                src={selectedAvatar || "assets/img/avatar/user.png"}
                alt="Selected Avatar"
                className="w-32 h-32 rounded-full mr-4"
              />
              <button
                onClick={() => setAvatarLibraryOpen(true)}
                className="bg-orange-500 text-white px-4 w-48 py-2 rounded"
              >
                Change Avatar
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-4">Step 2: Text/Speech</h3>
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Enter the text for the avatar to speak. It should be the job description."
              className="w-full min-h-36 px-4 py-2 mb-4 border border-gray-400 rounded resize-none"
            />
          </div>
        </div>
        <div className="px-6">
          <div>
            <h3 className="text-xl mb-4">
              Step 3: Translate Your Choice of Language
            </h3>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="w-full px-4 py-2 mb-4 border border-gray-400 rounded"
            >
              <option value="Telugu">Telugu</option>
              <option value="English">English</option>
            </select>
          </div>
          <div>
            <h3 className="text-xl mb-4">Step 4: Select a Preferred Voice</h3>
            <div className="voice-options flex justify-around">
              <div
                className={`voice-option ${
                  voice === "Akash" ? "selected" : ""
                } cursor-pointer`}
                onClick={() => setVoice("Akash")}
              >
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="Akash Voice"
                  className="w-16 h-16 rounded-full mb-2"
                />
                <p className="text-gray-800">Akash (Telugu - M)</p>
              </div>
              <div
                className={`voice-option ${
                  voice === "Priya" ? "selected" : ""
                } cursor-pointer`}
                onClick={() => setVoice("Priya")}
              >
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="Priya Voice"
                  className="w-16 h-16 rounded-full mb-2"
                />
                <p className="text-gray-800">Priya (Telugu - F)</p>
              </div>
            </div>
          </div>
          <footer className="mt-8 flex justify-center flex-row-reverse px-4">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => setPreview(true)}
            >
              Apply
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default AvatarSelection;
