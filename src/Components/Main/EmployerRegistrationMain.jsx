import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import EmployerRegistration from "../Jobs/EmployerRegistration";
import BreadcrumbEmployee from "../Breadcrumb/BreadcrumbEmployee";

const EmployerRegistrationMain = () => {
  return (
    <main className="mt-24">
      {/* <BreadcrumbEmployee topic={'Post Job'} topicSpan={'Post A Job'}/> */}
      <EmployerRegistration />
    </main>
  );
};

export default EmployerRegistrationMain;
