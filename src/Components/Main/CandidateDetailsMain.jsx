import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SingleCandidate from "../Candidates/SingleCandidate";
import CandidateProfile from "../Candidates/CandidateProfile";

const CandidateDetailsMain = () => {
  return (
    <main>
      {/* <Breadcrumb topic={"Candidates"} topicSpan={"Candidates Details"}/> */}
      {/* <SingleCandidate /> */}
      <CandidateProfile />

    </main>
  );
};

export default CandidateDetailsMain;
