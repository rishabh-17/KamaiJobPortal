import React from "react";
import SearchForm from "../../Components/Search Form/SearchForm";
import SidePanel from "../../Components/Side Panel/SidePanel";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import EmployerRegistrationMain from "../../Components/Main/EmployerRegistrationMain";

const EmployerRegistrationPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <EmployerRegistrationMain />
      <Footer />
    </>
  );
};

export default EmployerRegistrationPage;
