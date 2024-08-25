import React, { useState } from "react";
// import AvatarSelection from '../Components/Avatar/AvatarSelection/AvatarSelection'
import VideoDescription from "../Components/Avatar/AvatarSelection/VideoDescription";
import AvatarLibrary from "../Components/Avatar/AvatarLibrary/AvatarLibrary";
import PreviewJD from "../Components/Avatar/PreviewJD/PreviewJD";
// import './style.css'

function AvatarSettings() {
  const [preview, setPreview] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  return (
    <div className="app">
      {preview ? (
        <PreviewJD setPreview={setPreview} />
      ) : (
        <VideoDescription
          setPreview={setPreview}
          selectedAvatar={selectedAvatar}
          setSelectedAvatar={setSelectedAvatar}
        />
      )}
    </div>
  );
}

export default AvatarSettings;
