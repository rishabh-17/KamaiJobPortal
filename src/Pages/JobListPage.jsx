import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import JobListMain from "../Components/Main/JobListMain";

const JobListPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <JobListMain />
      <Footer />
    </>
  );
};

export default JobListPage;
