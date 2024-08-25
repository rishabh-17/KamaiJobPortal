import React from "react";
import SearchForm from "../../Search Form/SearchForm";
import SidePanel from "../../Side Panel/SidePanel";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SavedJobsMain from "../../Main/SavedJobsMain";

const SavedJobsPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <SavedJobsMain />
      <Footer />
    </>
  );
};

export default SavedJobsPage;
