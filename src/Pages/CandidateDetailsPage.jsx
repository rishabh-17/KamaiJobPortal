import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CandidateDetailsMain from "../Components/Main/CandidateDetailsMain";

const CandidateDetailsPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <CandidateDetailsMain />
      <Footer />
    </>
  );
};

export default CandidateDetailsPage;
