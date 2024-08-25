import React, { useState, useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";
import Select from "react-select";
import jobTitles from "../../SearchData/job-title.json";
import locations from "../../SearchData/location.json";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Best Solution", "Best Career", "Great Offer"];
  const [selectedJobTitle, setSelectedJobTitle] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSearch = () => {
    if (selectedJobTitle || selectedLocation) {
      console.log(selectedJobTitle, selectedLocation);
      navigate(
        `/JobseekerJobListPage?${
          selectedJobTitle?.value ? `jobTitleId=${selectedJobTitle?.value}` : ""
        }${
          selectedLocation?.value
            ? `&locationId=${selectedLocation?.value}`
            : ""
        }`
      );
    }
  };

  const modifiedWords = [...words];
  modifiedWords[0] = words[currentWordIndex];
  return (
    <section className="jm-banner-area banner-hieght bg-default">
      <div className="container">
        <div className="jm-banner-1 pt-150">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 d-none d-lg-block">
              <div className="jm-banner-img">
                <img
                  className="jm-banner-bg-1"
                  src="assets/img/banner/banner-img-bg-1.png"
                  alt=""
                />
                <img
                  className="jm-banner-img-1"
                  src="assets/img/banner/banner-21.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="jm-banner-content ml-45">
                <div className="jm-banner-content-head">
                  <h2 className="jm-banner-content-title cd-headline rotate-1">
                    Our Excellent Find Job <br />
                    <span className="cd-words-wrapper">
                      {modifiedWords.map((word, index) => (
                        <b
                          key={index}
                          className={index === 0 ? "is-visible" : "is-hidden"}
                        >
                          {word}
                        </b>
                      ))}
                    </span>
                  </h2>
                  <p>
                    There are many variations passages of Lorem Ipsum Fasts{" "}
                    <br />
                    by injected humour, or randomised words which...{" "}
                  </p>
                </div>
                <div className="jm-banner-tab">
                  <Tab.Container defaultActiveKey="full-time">
                    <Nav className="nav-pills mb-3 jm-tab-1" id="pills-tab">
                      <Nav.Item className="jm-tab-item-1">
                        <Nav.Link
                          eventKey="full-time"
                          className="nav-link jm-tab-link-1"
                        >
                          <span></span>Full Time
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="jm-tab-item-1">
                        <Nav.Link
                          eventKey="part-time"
                          className="nav-link jm-tab-link-1"
                        >
                          <span></span>Part Time
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="full-time">
                        <div className="grid grid-cols-5">
                          <Select
                            className="col-span-2 h-16"
                            options={jobTitles?.map((i) => ({
                              value: i.id,
                              label: i.name,
                            }))}
                            placeholder="Job Title"
                            styles={{
                              control: (base) => ({ ...base, height: "100%" }),
                            }}
                            onChange={(i) => setSelectedJobTitle(i)}
                          />

                          <Select
                            className="col-span-2"
                            options={locations?.map((i) => ({
                              value: i.id,
                              label: i.city,
                            }))}
                            placeholder="Location"
                            styles={{
                              control: (base) => ({ ...base, height: "100%" }),
                            }}
                            onChange={(i) => setSelectedLocation(i)}
                          />

                          <button
                            type="submit"
                            className="jm-theme-btn jm-banner-search-btn"
                            onClick={() => handleSearch()}
                          >
                            <i className="fal fa-search"></i>Search
                          </button>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
