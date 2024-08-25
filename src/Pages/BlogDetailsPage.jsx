import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BlogDetailsMain from "../Components/Main/BlogDetailsMain";

const BlogDetailsPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <BlogDetailsMain />
      <Footer />
    </>
  );
};

export default BlogDetailsPage;
