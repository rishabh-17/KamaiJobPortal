import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import JobDetailsMain from "../Components/Main/JobDetailsMain";

const JobDetailsPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <JobDetailsMain />
      <Footer />
    </>
  );
};

export default JobDetailsPage;
