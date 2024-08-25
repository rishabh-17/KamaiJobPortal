import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PricingPlanMain from "../Components/Main/PricingPlanMain";

const PricingPlanPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <PricingPlanMain />
      <Footer />
    </>
  );
};

export default PricingPlanPage;
