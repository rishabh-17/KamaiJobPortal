import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CandidateProfileMain from "../Components/Main/CandidateProfileMain";

const CandidateProfilePage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <CandidateProfileMain />
      <Footer />
    </>
  );
};

export default CandidateProfilePage;
