import React, { useState } from 'react';
import './styles.css';

function PreviewJD() {
  const [title, setTitle] = useState('');
  const [fontSize, setFontSize] = useState(24);
  const [fontColor, setFontColor] = useState('#000000');
  const [fontStyle, setFontStyle] = useState('normal');
  const [fontWeight, setFontWeight] = useState('normal');
  const [textDecoration, setTextDecoration] = useState('none');

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
    setFontStyle(e.target.checked ? 'italic' : 'normal');
  };

  const handleFontWeightChange = (e) => {
    setFontWeight(e.target.checked ? 'bold' : 'normal');
  };

  const handleTextDecorationChange = (e) => {
    setTextDecoration(e.target.checked ? 'underline' : 'none');
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <div className="preview-container">
      <h2>Preview of Job Description</h2>
      
      {/* Video Placeholder */}
      <div className="video-preview">
        <p>Video will be displayed here</p>
      </div>
      
      {/* Title Input */}
      <div className="title-input">
        <h3>Title for Video</h3>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          style={{
            fontSize: `${fontSize}px`,
            color: fontColor,
            fontStyle: fontStyle,
            fontWeight: fontWeight,
            textDecoration: textDecoration
          }}
          placeholder="Enter a title for the video job description"
        />
      </div>

      {/* Font Customization Options */}
      <div className="customization-options">
        <div className="custom-option">
          <label>Font Size:</label>
          <input
            type="range"
            min="12"
            max="48"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
          <span>{fontSize}px</span>
        </div>
        <div className="custom-option">
          <label>Font Color:</label>
          <input
            type="color"
            value={fontColor}
            onChange={handleFontColorChange}
          />
        </div>
        <div className="custom-option">
          <label>Italic:</label>
          <input
            type="checkbox"
            checked={fontStyle === 'italic'}
            onChange={handleFontStyleChange}
          />
        </div>
        <div className="custom-option">
          <label>Bold:</label>
          <input
            type="checkbox"
            checked={fontWeight === 'bold'}
            onChange={handleFontWeightChange}
          />
        </div>
        <div className="custom-option">
          <label>Underline:</label>
          <input
            type="checkbox"
            checked={textDecoration === 'underline'}
            onChange={handleTextDecorationChange}
          />
        </div>
      </div>

      {/* Submit Button */}
      <footer>
        <button onClick={handleSubmit}>Submit</button>
      </footer>
    </div>
  );
}

export default PreviewJD;
