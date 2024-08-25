import React, { useState } from "react";

const JobCategoryFilter = ({ onApply }) => {
  const [gender, setGender] = useState([]);
  const handleGenderChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGender([...gender, value]);
    } else {
      setGender(gender.filter((item) => item !== value));
    }
  };

  const handleApply = () => {
    console.log(gender.join());
    onApply({ genderId: decodeURIComponent(gender.join()) });
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4 rounded-lg shadow-md">
      <div className="jm-browse-job-sidebar-widget">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Choose Gender
        </h3>
        <ul className="list-none space-y-2">
          <li className="flex items-center">
            <input
              type="checkbox"
              id="male"
              name="gender"
              value="1"
              className="h-4 w-4 text-amber-500 border-gray-300 rounded"
              onChange={handleGenderChange}
            />
            <label
              className="ml-3 text-gray-700 text-sm cursor-pointer"
              htmlFor="male"
            >
              Male
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="female"
              name="gender"
              value="2"
              className="h-4 w-4 text-amber-500 border-gray-300 rounded"
              onChange={handleGenderChange}
            />
            <label
              className="ml-3 text-gray-700 text-sm cursor-pointer"
              htmlFor="female"
            >
              Female
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="other"
              name="gender"
              value="3"
              className="h-4 w-4 text-amber-500 border-gray-300 rounded"
              onChange={handleGenderChange}
            />
            <label
              className="ml-3 text-gray-700 text-sm cursor-pointer"
              htmlFor="other"
            >
              Other
            </label>
          </li>
        </ul>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="py-2 px-6 bg-amber-500 hover:bg-amber-600 rounded text-white font-semibold text-sm transition duration-200"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCategoryFilter;
