import React from "react";
import SearchForm from "../../Components/Search Form/SearchForm";
import SidePanel from "../../Components/Side Panel/SidePanel";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import JobListMainJobseeker from "../../Components/Main/JobListMainJobseeker";

const JobseekerJobListPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      {/* <JobListMain/> */}
      <JobListMainJobseeker />
      <Footer />
    </>
  );
};

export default JobseekerJobListPage;
