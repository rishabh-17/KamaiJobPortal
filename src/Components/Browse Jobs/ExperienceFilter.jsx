import React, { useState } from "react";
import { Slider } from "@mui/material";

const ExperienceFilter = ({ onApply }) => {
  const [experienceRange, setExperienceRange] = useState([0, 1]);

  const handleExperienceChange = (event, newValue) => {
    if (newValue[0] <= newValue[1]) {
      setExperienceRange(newValue);
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Experience Range
        </h3>
        <div className="mb-4">
          <input
            type="text"
            id="s-amount"
            value={`Min ${experienceRange[0]} - Max ${experienceRange[1]}`}
            readOnly
            className="w-full border border-gray-300 rounded-md p-2 text-gray-600"
          />
        </div>
        <div className="mb-6">
          <Slider
            value={experienceRange}
            valueLabelDisplay="auto"
            onChange={handleExperienceChange}
            max={60}
            min={0}
            sx={{
              color: "#4A90E2",
              height: 6,
              "& .MuiSlider-thumb": {
                width: 20,
                height: 20,
                backgroundColor: "#fff",
                border: "2px solid currentColor",
              },
              "& .MuiSlider-valueLabel": {
                backgroundColor: "unset",
                color: "#4A90E2",
                fontWeight: "bold",
              },
            }}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="py-2 px-4 bg-amber-500 rounded text-white font-medium hover:bg-amber-600 transition"
            onClick={() =>
              onApply({
                expMin: experienceRange[0],
                expMax: experienceRange[1],
              })
            }
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceFilter;
