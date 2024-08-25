import React, { useContext } from "react";
import { JobContext } from "../../Context/JobContext";

const JobTypeFilter = () => {
  const { handleJobTimeSelect } = useContext(JobContext);
  return (
    <div>
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
        <div className="flex justify-end m-2">
          <button className="py-2 px-4 bg-amber-500 rounded text-white">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobTypeFilter;
