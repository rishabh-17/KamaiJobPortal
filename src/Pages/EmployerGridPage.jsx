import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import EmployerGridMain from "../Components/Main/EmployerGridMain";

const EmployerGridPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <EmployerGridMain />
      <Footer />
    </>
  );
};

export default EmployerGridPage;
