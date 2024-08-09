import React, { useState } from "react";
import Header from "../../Header/Header";
function PreviewJD({ setPreview }) {
  const [title, setTitle] = useState("");
  const [fontSize, setFontSize] = useState(24);
  const [fontColor, setFontColor] = useState("#000000");
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontWeight, setFontWeight] = useState("normal");
  const [textDecoration, setTextDecoration] = useState("none");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleFontStyleChange = (e) => {
    setFontStyle(e.target.checked ? "italic" : "normal");
  };

  const handleFontWeightChange = (e) => {
    setFontWeight(e.target.checked ? "bold" : "normal");
  };

  const handleTextDecorationChange = (e) => {
    setTextDecoration(e.target.checked ? "underline" : "none");
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <Header />
      <h2 className="text-center text-2xl font-bold mb-8">
        Preview of Job Description
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="mb-8">
          <video
            className="w-full rounded-lg shadow-md"
            src="path/to/video.mp4"
            controls
          />
        </div>
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-2">Title for Video</h3>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              style={{
                fontSize: `${fontSize}px`,
                color: fontColor,
                fontStyle: fontStyle,
                fontWeight: fontWeight,
                textDecoration: textDecoration,
              }}
              className="w-full"
              placeholder="Enter a title for the video job description"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="w-1/2 mr-4">
              <label className="block text-sm font-bold mb-2">Font Size:</label>
              <input
                type="range"
                min="12"
                max="48"
                value={fontSize}
                onChange={handleFontSizeChange}
                className="w-full"
              />
              <span className="text-xs">{fontSize}px</span>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-bold mb-2">
                Font Color:
              </label>
              <input
                type="color"
                value={fontColor}
                onChange={handleFontColorChange}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="w-1/2 mr-4">
              <label className="block text-sm font-bold mb-2">Italic:</label>
              <input
                type="checkbox"
                checked={fontStyle === "italic"}
                onChange={handleFontStyleChange}
                className="mr-2"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-bold mb-2">Bold:</label>
              <input
                type="checkbox"
                checked={fontWeight === "bold"}
                onChange={handleFontWeightChange}
                className="mr-2"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="w-1/2 mr-4">
              <label className="block text-sm font-bold mb-2">Underline:</label>
              <input
                type="checkbox"
                checked={textDecoration === "underline"}
                onChange={handleTextDecorationChange}
                className="mr-2"
              />
            </div>
          </div>
          <footer className="mt-8 flex justify-between w-full">
            <button
              className="bg-[#130160] text-white  font-bold py-2 px-4 rounded"
              onClick={() => setPreview(false)}
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#F59300] text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default PreviewJD;
