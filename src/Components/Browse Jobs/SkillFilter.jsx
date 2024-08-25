import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import skills from "../../SearchData/skills.json";

const SkillFilter = ({ onApply }) => {
  const [selectedTags, setSelectedTags] = React.useState([]);

  const onApplyClick = () => {
    console.log(selectedTags);
    onApply({
      skillIdList: encodeURIComponent(
        selectedTags?.map((s) => s.value)?.join()
      ),
    });
  };

  const onTagClick = (tag) => {
    setSelectedTags(tag);
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills</h3>
        <Select
          isMulti
          options={skills?.map((s) => ({ value: s.id, label: s.skill }))}
          styles={{
            multiValue: (styles) => ({
              ...styles,
              border: "1px solid #ff8700",
              backgroundColor: "white",
            }),
            multiValueLabel: (styles) => ({
              ...styles,
              color: "#ff8700",
            }),
            control: (styles) => ({
              ...styles,
              borderColor: "#d1d5db", // gray-300
              "&:hover": { borderColor: "#9ca3af" }, // gray-400
            }),
            dropdownIndicator: (styles) => ({
              ...styles,
              color: "#9ca3af", // gray-400
              "&:hover": { color: "#4b5563" }, // gray-600
            }),
          }}
          onChange={(i) => onTagClick(i)}
          className="mb-4"
        />
        <div className="flex justify-end">
          <button
            className="py-2 px-4 bg-amber-500 rounded text-white font-medium hover:bg-amber-600 transition"
            onClick={onApplyClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillFilter;
