import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Category from "../Category Area/Category";
import Jobs from "../Jobs/Jobs";
import VideoArea from "../Video Area/VideoArea";
import Candidates from "../Candidates/Candidates";
import PriceArea from "../Price Area/PriceArea";
import Blog from "../Blog Area/Blog";
import CallToAction from "../Call To Action/CallToAction";
import JobSearchHero from "../Job Search/JobSearchHero";
import FeaturedJobs from "../Jobs/FeaturedJobs";
import VideoArea2 from "../Video Area/VideoArea2";
import PriceArea2 from "../Price Area/PriceArea2";

const HomeMain1 = () => {
  return (
    <main className="home-page-1">
      <Banner />
      <JobSearchHero />
      <About />
      <FeaturedJobs />
      <Category />
      <Jobs />
      <VideoArea />
      {/* <Candidates /> */}
      <PriceArea />
      <PriceArea2 />
      <VideoArea2 />
      <Blog />
      <CallToAction />
    </main>
  );
};

export default HomeMain1;
