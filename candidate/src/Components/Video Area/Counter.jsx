import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="container light-bg pt-uptolg-100 pt-60 pb-60">
      <div className="row justify-content-end">
        <div className="col-xl-6 col-lg-12">
          <div className="jm-video-content-wrapper text-center text-xl-start">
            <div className="jm-video-content-3 ml-80">
              <div className="jm-section-title mb-40">
                <span className="subtitle text-white">success</span>
                <div className="jm-video-info-3 text-white">
                  <h2 className="title  text-white">
                    Delivering the best result for our users!
                  </h2>
                  <p className="text text-white">
                    All jobs, resumes and companies are reviewed before they get
                    published in order to deliver quality possible to all of our
                    users.
                  </p>
                </div>
              </div>
              <div className="jm-video-counter-3">
                <div className="jm-video-counter-item-3">
                  <div className="jm-video-inner">
                    <div className="jm-icon">
                      <i className="fa-thin fa-user text-white"></i>
                    </div>
                    <div className="jm-video-counter-item-content">
                      <h2 className="title  text-white">
                        <span className="odometer mainCounter" data-count="140">
                          <CountUp duration={8} end={140} />
                        </span>
                        +
                      </h2>
                      <span className="subtitle  text-white">Pro Member</span>
                    </div>
                  </div>
                </div>
                <div className="jm-video-counter-item-3">
                  <div className="jm-video-inner">
                    <div className="jm-icon">
                      <i className="fa-thin text-white fa-gem"></i>
                    </div>
                    <div className="jm-video-counter-item-content">
                      <h2 className="title text-white">
                        <span
                          className="odometer mainCounter  text-white"
                          data-count="250"
                        >
                          <CountUp duration={8} end={250} />
                        </span>
                        +
                      </h2>
                      <span className="subtitle text-white">Jobs</span>
                    </div>
                  </div>
                </div>
                <div className="jm-video-counter-item-3">
                  <div className="jm-video-inner">
                    <div className="jm-icon text-white">
                      <i className="fa-thin fa-address-card text-white"></i>
                    </div>
                    <div className="jm-video-counter-item-content">
                      <h2 className="title text-white">
                        <span
                          className="odometer mainCounter text-white"
                          data-count="199"
                        >
                          <CountUp duration={8} end={199} />
                        </span>
                        +
                      </h2>
                      <span className="subtitle text-white">Resumes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
