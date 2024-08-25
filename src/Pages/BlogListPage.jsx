import React from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BlogListMain from "../Components/Main/BlogListMain";
const BlogListPage = () => {
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <BlogListMain />
      <Footer />
    </>
  );
};

export default BlogListPage;
