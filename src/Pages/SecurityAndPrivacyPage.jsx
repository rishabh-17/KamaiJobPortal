import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SecurityAndPrivacyMain from "../Components/Main/SecurityAndPrivacyMain";

const ContactPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <SecurityAndPrivacyMain />
      <Footer />
    </>
  );
};

export default ContactPage;
