import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ServiceMain from "../Components/Main/ServiceMain";
const ServicePage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <ServiceMain />
      <Footer />
    </>
  );
};

export default ServicePage;
