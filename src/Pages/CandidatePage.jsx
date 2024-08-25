import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import CandidatePageMain from "../Components/Main/CandidatePageMain";
import Footer from "../Components/Footer/Footer";

const CandidatePage = () => {
  return (
    <main>
      <SearchForm />
      <SidePanel />
      <Header />
      <CandidatePageMain />
      <Footer />
    </main>
  );
};

export default CandidatePage;
