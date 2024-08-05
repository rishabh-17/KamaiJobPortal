import React, { useState } from "react";
import GridJobs from "./GridJobs";
import ListJobs from "./ListJobs";
import SalaryFilter from "./SalaryFilter";
import JobTypeFilter from "./JobTypeFilter";
import AreaRangeFilter from "./AreaRangeFilter";
import JobCategoryFilter from "./JobCategoryFilter";
import TagFilter from "./TagFilter";
import SearchBar from "./SearchBar";

const BrowseJob = ({ view }) => {
  const [activeTab, setActiveTab] = useState(view);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="containe">
      <div className="jm-browse-job-wrap pt-100 pb-60 mx-24">
        <div className="row justify-between">
          <div className="col-xl-3 col-lg-3 border border-gray-30 bg-white rounded-xl p-4">
            <div className="jm-browse-job-sidebar">
              <SearchBar />
              <AreaRangeFilter />
              <JobTypeFilter />
              <JobCategoryFilter />
              <SalaryFilter />
              <TagFilter />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="jm-browse-job-tab mb-30">
              <div className="jm-browse-job-tab-left">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={`nav-link ${
                        activeTab === "grid" ? "active" : ""
                      }`}
                      id="nav-grid-tab"
                      onClick={() => handleTabChange("grid")}
                    >
                      <i className="fa-solid fa-grid"></i>
                    </button>
                    <button
                      className={`nav-link ${
                        activeTab === "list" ? "active" : ""
                      }`}
                      id="nav-list-tab"
                      onClick={() => handleTabChange("list")}
                    >
                      <i className="fa-solid fa-list-ul"></i>
                    </button>
                  </div>
                </nav>
                <p>There Are 6 Products.</p>
              </div>
              <div className="jm-browse-job-tab-right">
                <p>Sort By:</p>
                <select name="select">
                  <option value="1">Select Category</option>
                  <option value="1">Web Designer</option>
                  <option value="1">UX/UI Designer</option>
                  <option value="1">Digital Marketing</option>
                </select>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "grid" ? "show active" : ""
                }`}
                id="nav-grid"
                role="tabpanel"
                aria-labelledby="nav-grid-tab"
              >
                <GridJobs />
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "list" ? "show active" : ""
                }`}
                id="nav-list"
                role="tabpanel"
                aria-labelledby="nav-list-tab"
              >
                <ListJobs />
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 bg-indigo-900 h-96 rounded-xl p-4 text-center">
            <p className=" text-amber-600 font-bold">Love Kamai ?</p>
            <p className=" text-white font-bold">Try our premium for free !</p>

            <ul className="text-white ">
              <li>10X More Job</li>
              <li>10X More Calls</li>
              <li>Profile Boost</li>
              <li>Unlock All Features</li>
            </ul>
            <button className="btn btn-primary bg-amber-600 my-3 hover:bg-white hover:text-amber-600 hover:border-amber-600">
              Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseJob;
