import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import EmployerList from "../Jobs/EmployerList";

const EmployerListMain = () => {
  return (
    <main className="mt-48">
      {/* <Breadcrumb topic={'Employer'} topicSpan={'Employer List'}/> */}
      <EmployerList />
    </main>
  );
};

export default EmployerListMain;
