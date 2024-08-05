import React, { useContext } from "react";
import { JobContext } from "../../Context/JobContext";

const JobTypeFilter = () => {
  const { handleJobTimeSelect } = useContext(JobContext);
  return (
    <div>
      <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white px-4 py-3 text-gray-900 transition">
          <span class="text-sm font-medium"> Job Type </span>

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
          <header class="flex items-center justify-between p-4">
            <span class="text-sm text-gray-700"> 0 Selected </span>

            <button
              type="button"
              class="text-sm text-gray-900 underline underline-offset-4"
            >
              Reset
            </button>
          </header>
          <div className="jm-browse-job-sidebar-widget mb-30 pl-4">
            <div className="jm-browse-sidebar-type">
              <form>
                <div className="jm-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="jobTime"
                      value="Freelance"
                      onChange={handleJobTimeSelect}
                    />
                    Freelance
                  </label>
                </div>
                <div className="jm-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="jobTime"
                      value="Full Time"
                      onChange={handleJobTimeSelect}
                    />
                    Full Time
                  </label>
                </div>
                <div className="jm-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="jobTime"
                      value="Part Time"
                      onChange={handleJobTimeSelect}
                    />
                    Part Time
                  </label>
                </div>
                <div className="jm-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="jobTime"
                      value="Internship"
                      onChange={handleJobTimeSelect}
                    />
                    Internship
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default JobTypeFilter;
