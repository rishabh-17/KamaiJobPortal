import React, { useState } from 'react';
import './styles.css';

function AvatarSelection() {
  const [selectedAvatar, setSelectedAvatar] = useState('defaultAvatar.png');
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('Telugu');
  const [voice, setVoice] = useState('Akash');

  const handleAvatarChange = () => {
    // Handle avatar selection logic here
  };

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
    <div className="container">
      <h2>Create Video Job Description</h2>

      {/* <div className="avatar-selection">
        <img src={selectedAvatar} alt="Selected Avatar" />
        <button onClick={handleAvatarChange}>Change Avatar</button>
      </div> */}
      {/* Step 1: Avatar Selection */}
      <div className="avatar-selection">
        <h3>Step 1: Select Your Avatar</h3>
        <img src={selectedAvatar} alt="Selected Avatar" />
        <button onClick={() => handleAvatarChange('newAvatar.png')}>Change Avatar</button>
      </div>

      <h3>Step 2: Text/Speech</h3>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter the text for the avatar to speak. It should be the job description."
      />

      <h3>Step 3: Translate Your Choice of Language</h3>
      <select value={language} onChange={handleLanguageChange}>
        <option value="Telugu">Telugu</option>
        <option value="English">English</option>
      </select>

      <h3>Step 4: Select a Preferred Voice</h3>
      <div className="voice-options">
        <div className={`voice-option ${voice === 'Akash' ? 'selected' : ''}`} onClick={() => setVoice('Akash')}>
          <img src="akash.png" alt="Akash Voice" />
          <p>Akash (Telugu - M)</p>
        </div>
        <div className={`voice-option ${voice === 'Priya' ? 'selected' : ''}`} onClick={() => setVoice('Priya')}>
          <img src="priya.png" alt="Priya Voice" />
          <p>Priya (Telugu - F)</p>
        </div>
        {/* Add more voices as needed */}
      </div>

      <footer>
        <button onClick={handleSubmit}>Apply</button>
      </footer>
    </div>
  );
}
export default AvatarSelection;
