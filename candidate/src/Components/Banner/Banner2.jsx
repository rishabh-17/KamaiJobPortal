import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Banner2 = () => {
  return (
    <section className="jm-banner-area-2 banner-hieght bg-default jm-overlay h-jobmot-banner-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jm-banner-content-static">
              <div className="jm-banner-content-haed text-center">
                <h2 className="jm-banner-content-title-3">
                  <span className="jm-banner-bold-amoun">Finding your</span>{" "}
                  <br />
                  <span className="text-[#F59300]">
                    {" "}
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Perfect career path",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "Journey To Your Dream Job",
                        1000,
                        "Perfect career path",
                        1000,
                        "Journey To Your Dream Job",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      // style={{ fontSize: '2em', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </span>{" "}
                  <br />{" "}
                  <span className="jm-banner-bold-amout">starts here</span>
                </h2>
                <span className="jm-banner-sub-text">
                  Find Jobs, Employment & Career Opportunities
                </span>
                <p>
                  There are many variations of passages of Lorem Ipsum Fasts{" "}
                  <br />
                  by injected humour, or randomised words which...{" "}
                </p>
                <Link
                  to="/jobListPage"
                  className="jm-banner-layout-2-btn mt-25"
                >
                  Get Started <i className="fa-thin fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
