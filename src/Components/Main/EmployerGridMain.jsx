import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import EmployerGrid from "../Jobs/EmployerGrid";

const EmployerGridMain = () => {
  return (
    <main className="mt-48">
      {/* <Breadcrumb topic={'Employer'} topicSpan={'Employer Grid'}/> */}
      <EmployerGrid />
    </main>
  );
};

export default EmployerGridMain;
