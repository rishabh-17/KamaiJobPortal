import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ResponseList from "../Components/Job Search/ResponseList";

const ResponseListPage = () => {
  return (
    <div className="mt-24">
      <SearchForm />
      <SidePanel />
      <Header />
      <ResponseList />
      <Footer />
    </div>
  );
};

export default ResponseListPage;
