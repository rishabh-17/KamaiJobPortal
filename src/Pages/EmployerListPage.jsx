import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import EmployerListMain from "../Components/Main/EmployerListMain";

const EmployerListPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <EmployerListMain />
      <Footer />
    </>
  );
};

export default EmployerListPage;
