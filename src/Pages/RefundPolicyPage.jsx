import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import RefundPolicyMain from "../Components/Main/RefundPolicyMain";

const RefundPolicyPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <RefundPolicyMain />
      <Footer />
    </>
  );
};

export default RefundPolicyPage;
