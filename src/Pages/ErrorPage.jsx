import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ErrorMain from "../Components/Main/ErrorMain";
const ErrorPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <ErrorMain />
      <Footer />
    </>
  );
};

export default ErrorPage;
