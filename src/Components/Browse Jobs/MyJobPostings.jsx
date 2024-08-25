import React, { useState } from "react";
import GridJobs from "./GridJobs";
import ListJobs from "./ListJobs";
import SalaryFilter from "./SalaryFilter";
import JobTypeFilter from "./JobTypeFilter";
import ExperienceFilter from "./ExperienceFilter";
import JobCategoryFilter from "./JobCategoryFilter";
import SkillFilter from "./SkillFilter";
import SearchBar from "./SearchBar";

const MyJobPostings = ({ view }) => {
  const [activeTab, setActiveTab] = useState(view);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return <ListJobs />;
};

export default MyJobPostings;
