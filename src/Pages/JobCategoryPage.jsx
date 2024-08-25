import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import JobCategoryMain from "../Components/Main/JobCategoryMain";

const JobCategoryPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <JobCategoryMain />
      <Footer />
    </>
  );
};

export default JobCategoryPage;
