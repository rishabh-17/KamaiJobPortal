import React from "react";
import { Slider } from "@mui/material";

const AreaRangeFilter = () => {
  const [value, setValue] = React.useState(110);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white px-4 py-3 text-gray-900 transition">
          <span class="text-sm font-medium"> Distance </span>

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
            <div className="jm-browse-range-area jm-browse-widget-toogle">
              <div className="slider-area-range">
                <Slider
                  value={value}
                  onChange={handleChange}
                  aria-labelledby="j-area"
                  step={10}
                  min={0}
                  max={200}
                  valueLabelDisplay="auto"
                  className="text-blue"
                />
                <p className="text-center">{value} km Radius</p>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default AreaRangeFilter;
