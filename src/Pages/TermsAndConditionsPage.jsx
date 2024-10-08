import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import TermsAndConditionsMain from "../Components/Main/TermsAndConditionsMain";

const TermsAndConditionsPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <TermsAndConditionsMain />
      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;
