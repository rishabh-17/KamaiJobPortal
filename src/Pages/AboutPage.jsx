import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import AboutMain from "../Components/Main/AboutMain";
import Footer from "../Components/Footer/Footer";
const AboutPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <AboutMain />
      <Footer />
    </>
  );
};

export default AboutPage;
