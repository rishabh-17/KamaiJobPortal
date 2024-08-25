import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FAQsMain from "../Components/Main/FAQsMain";

const FAQsPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <FAQsMain />
      <Footer />
    </>
  );
};

export default FAQsPage;
