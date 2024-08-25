import { Slider } from "@mui/material";
import { useState } from "react";

const SalaryFilter = ({ onApply }) => {
  const [priceRange, setPriceRange] = useState([1200, 5000]);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Salary Range
        </h3>
        <div className="mb-4">
          <input
            type="text"
            id="s-amount"
            value={`$${priceRange[0]} - $${priceRange[1]}`}
            readOnly
            className="w-full border border-gray-300 rounded-md p-2 text-gray-600"
          />
        </div>
        <div className="mb-6">
          <Slider
            value={priceRange}
            valueLabelDisplay="auto"
            onChange={handlePriceRangeChange}
            max={10000}
            min={100}
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
            className="py-2 px-4 bg-amber-500 rounded text-white"
            onClick={() =>
              onApply({ salaryMin: priceRange[0], salaryMax: priceRange[1] })
            }
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryFilter;
