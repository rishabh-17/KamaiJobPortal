import React from "react";

const JobCategoryFilter = () => {
  return (
    <div>
      <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white px-4 py-3 text-gray-900 transition">
          <span class="text-sm font-medium"> Categories </span>

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

        <div class="border-t border-gray-200 bg-white p-2">
          <div className="jm-browse-job-sidebar-widget">
            <select name="select" className="mb-35">
              <option value="1">All category</option>
              <option value="1">Health Care</option>
              <option value="1">Management</option>
              <option value="1">Marketing</option>
              <option value="1">UX/UI Developer</option>
              <option value="1">WEB Developer</option>
              <option value="1">Graphic designer</option>
            </select>
          </div>
        </div>
      </details>
    </div>
  );
};

export default JobCategoryFilter;
