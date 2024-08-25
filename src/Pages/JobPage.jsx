import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import JobMain from "../Components/Main/JobMain";
import Footer from "../Components/Footer/Footer";

const JobPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <JobMain />
      <Footer />
    </>
  );
};

export default JobPage;
