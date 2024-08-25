import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import JobSearchList from "../Job Search/JobSearchList";

const CandidateListMain = () => {
  return (
    <main className="mt-24">
      {/* <Breadcrumb topic={"Candidate"} topicSpan={"Candidate List"}/> */}
      <JobSearchList />
    </main>
  );
};

export default CandidateListMain;
