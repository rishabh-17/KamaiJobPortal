import React from "react";
import SearchForm from "../../Search Form/SearchForm";
import SidePanel from "../../Side Panel/SidePanel";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import AppliedJobsMain from "../../Main/AppliedJobsMain";

const AppliedJobsPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <AppliedJobsMain />
      <Footer />
    </>
  );
};

export default AppliedJobsPage;
