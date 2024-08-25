import React from "react";

const JobCategoryFilter = () => {
  return (
    <div>
      <div class="border-t border-gray-200 bg-white p-2">
        <div className="jm-browse-job-sidebar-widget">
          <ul className="list-none mb-0">
            <li className="mb-15">
              <input
                type="checkbox"
                id="all-category"
                name="category"
                value="all-category"
              />
              <label className="mx-2" htmlFor="all-category">
                All category
              </label>
            </li>
            <li className="mb-15">
              <input
                type="checkbox"
                id="health-care"
                name="category"
                value="health-care"
              />
              <label className="mx-2" htmlFor="health-care">
                Health Care
              </label>
            </li>
            <li className="mb-15">
              <input
                type="checkbox"
                id="management"
                name="category"
                value="management"
              />
              <label className="mx-2" htmlFor="management">
                Management
              </label>
            </li>
            <li className="mb-15">
              <input
                type="checkbox"
                id="marketing"
                name="category"
                value="marketing"
              />
              <label className="mx-2" htmlFor="marketing">
                Marketing
              </label>
            </li>
            <li className="mb-15">
              <input
                type="checkbox"
                id="ux-ui-developer"
                name="category"
                value="ux-ui-developer"
              />
              <label className="mx-2" htmlFor="ux-ui-developer">
                UX/UI Developer
              </label>
            </li>
            <li className="mb-15">
              <input
                type="checkbox"
                id="web-developer"
                name="category"
                value="web-developer"
              />
              <label className="mx-2" htmlFor="web-developer">
                WEB Developer
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="graphic-designer"
                name="category"
                value="graphic-designer"
              />
              <label className="mx-2" htmlFor="graphic-designer">
                Graphic designer
              </label>
            </li>
          </ul>
          {/* <select name="select" className="mb-35">
              <option value="1">All category</option>
              <option value="1">Health Care</option>
              <option value="1">Management</option>
              <option value="1">Marketing</option>
              <option value="1">UX/UI Developer</option>
              <option value="1">WEB Developer</option>
              <option value="1">Graphic designer</option>
            </select> */}
        </div>
      </div>
      <div className="flex justify-end m-2">
        <button className="py-2 px-4 bg-amber-500 rounded text-white">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCategoryFilter;
