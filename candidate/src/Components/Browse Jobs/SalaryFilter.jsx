import { Slider } from "@mui/material";
import { useState } from "react";

const SalaryFilter = () => {
  const [priceRange, setPriceRange] = useState([1200, 5000]);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <div>
      <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white px-4 py-3 text-gray-900 transition">
          <span class="text-sm font-medium"> Salary </span>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <div className="jm-browse-job-sidebar-widget mb-35 p-2">
            <div className="jm-browse-range-price jm-browse-widget-toogle">
              <div className="slider-range-amount">
                <input
                  type="text"
                  id="s-amount"
                  value={`$${priceRange[0]} - $${priceRange[1]}`}
                  readOnly
                  className="amount"
                />
              </div>
              <div className="slider-range-bar">
                <Slider
                  value={priceRange}
                  valueLabelDisplay="auto"
                  onChange={handlePriceRangeChange}
                  max={10000}
                  min={100}
                />
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default SalaryFilter;
