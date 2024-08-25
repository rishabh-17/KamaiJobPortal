import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CompanyDetailsMain from "../Components/Main/CompanyDetailsMain";
const CompanyDetailsPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <CompanyDetailsMain />
      <Footer />
    </>
  );
};

export default CompanyDetailsPage;
