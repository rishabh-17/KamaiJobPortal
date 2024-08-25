import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Subscription() {
  const [activePlan, setActivePlan] = useState("premium");

  const handlePlanSelect = (plan) => {
    setActivePlan(plan);
  };
  return (
    <div>
      <Header />
      <section className="jm-price-area-2 pt-85 pb-55 mt-24">
        <div className="container">
          <div>
            <div className="jm-section-title mb-40 text-center">
              <h2 className="title mb-10">Current Plans</h2>
              <p className="text">
                Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                vehicula
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className={`jm-price-item-2 mb-30`}>
                  <div className="jm-price-item-plan-2 border-0">
                    <h5 className="title">3 Month Plan</h5>
                    <p className="text-xs mt-2">
                      <span className="text-green-500 text-sm font-bold">
                        Active
                      </span>{" "}
                      Valid Till - 31/12/2022
                    </p>
                  </div>

                  <div className="jm-price-item-content-2 bg-[#E6FCE6] rounded-xl border-0">
                    <ul className="font-semibold">
                      <li>Number of job postings remaining: 01</li>
                      <li>Number of profile views remaining: 01</li>
                      <li>Number of video job descriptions remaining:</li>
                      <li>Number of days remaining: 01</li>
                      <li>Number of job boosting remaining: 01</li>
                      <li className="font-normal text-sm">
                        Want to upgrade your plan? Contact us on{" "}
                        <span className="font-bold">912345678</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="jm-price-item-btn-2">
                <Link
                  to="/contactPage"
                  className={`jm-theme-btn ${
                    activePlan === "basic" ? "" : "jm-transparent-btn"
                  }`}
                >
                  Buy Now
                </Link>
              </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="jm-section-title mb-40 text-center">
                <h2 className="title mb-10">Other Plans</h2>
                <p className="text">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className={`jm-price-item-2 mb-30 ${
                  activePlan === "basic" ? "active" : ""
                }`}
                onClick={() => handlePlanSelect("basic")}
              >
                <div className="jm-price-item-plan-2">
                  <h5 className="title">1 Month Plan</h5>
                  <p>Best for 1 or more openings</p>
                  <div className="flex items-center h-12 gap-6 ">
                    <h5 className="title">Rs. 2199 </h5>
                    <span className=" bg-[#FFE5BF] flex items-center rounded pt-2 px-3">
                      <h5 className="text-xs">Rs.2199/month</h5>
                    </span>
                  </div>
                </div>
                <div className="jm-price-item-price-2 rounded">
                  <h2 className="title">
                    <span>Upgrade at Rs. 2000</span>
                  </h2>
                </div>
                <div className="jm-price-item-content-2">
                  <ul>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Unlimited number of listings
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Listings are visible for 30 days
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      One Time Fee
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      This Plan Includes 1 Job
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Non-Highlighted Post
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Posted For 30 Days
                    </li>
                  </ul>
                </div>
                {/* <div className="jm-price-item-btn-2">
                <Link
                  to="/contactPage"
                  className={`jm-theme-btn ${
                    activePlan === "basic" ? "" : "jm-transparent-btn"
                  }`}
                >
                  Buy Now
                </Link>
              </div> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className={`jm-price-item-2 mb-30 ${
                  activePlan === "premium" ? "active" : ""
                }`}
                onClick={() => handlePlanSelect("premium")}
              >
                <div className="jm-price-tag-2">
                  <span className="popular-plan">Popular</span>
                </div>
                <div className="jm-price-item-plan-2">
                  <h5 className="title">1 Month Plan</h5>
                  <p>Best for 1 or more openings</p>
                  <div className="flex items-center h-12 gap-6 ">
                    <h5 className="title">Rs. 2199 </h5>
                    <span className=" bg-[#FFE5BF] flex items-center rounded pt-2 px-3">
                      <h5 className="text-xs">Rs.2199/month</h5>
                    </span>
                  </div>
                </div>
                <div className="jm-price-item-price-2 rounded">
                  <h2 className="title">
                    <span>Upgrade at Rs. 2000</span>
                  </h2>
                </div>
                <div className="jm-price-item-content-2">
                  <ul>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Unlimited number of listings
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Listings are visible for 30 days
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      One Time Fee
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      This Plan Includes 1 Job
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Non-Highlighted Post
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Posted For 30 Days
                    </li>
                  </ul>
                </div>
                {/* <div className="jm-price-item-btn-2">
                <Link
                  to="/contactPage"
                  className={`jm-theme-btn ${
                    activePlan === "premium" ? "" : "jm-transparent-btn"
                  }`}
                >
                  Buy Now
                </Link>
              </div> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className={`jm-price-item-2 mb-30 ${
                  activePlan === "corporate" ? "active" : ""
                }`}
                onClick={() => handlePlanSelect("corporate")}
              >
                <div className="jm-price-item-plan-2">
                  <h5 className="title">Corporate Plan</h5>
                  <p>Best for 1 or more openings</p>
                  <div className="flex items-center h-12 gap-6 ">
                    <h5 className="title">Rs. 2199 </h5>
                    <span className=" bg-[#FFE5BF] flex items-center rounded pt-2 px-3">
                      <h5 className="text-xs">Rs.2199/month</h5>
                    </span>
                  </div>
                </div>
                <div className="jm-price-item-price-2 rounded">
                  <h2 className="title">
                    <span>Upgrade at Rs. 2000</span>
                  </h2>
                </div>
                <div className="jm-price-item-content-2">
                  <ul>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Unlimited number of listings
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Listings are visible for 30 days
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      One Time Fee
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      This Plan Includes 1 Job
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Non-Highlighted Post
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Posted For 30 Days
                    </li>
                  </ul>
                </div>
                {/* <div className="jm-price-item-btn-2">
                <Link
                  to="/contactPage"
                  className={`jm-theme-btn ${
                    activePlan === "corporate" ? "" : "jm-transparent-btn"
                  }`}
                >
                  Buy Now
                </Link>
              </div> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className={`jm-price-item-2 mb-30 ${
                  activePlan === "basic1" ? "active" : ""
                }`}
                onClick={() => handlePlanSelect("basic1")}
              >
                <div className="jm-price-item-plan-2">
                  <h5 className="title">1 Month Plan</h5>
                  <p>Best for 1 or more openings</p>
                  <div className="flex items-center h-12 gap-6 ">
                    <h5 className="title">Rs. 2199 </h5>
                    <span className=" bg-[#FFE5BF] flex items-center rounded pt-2 px-3">
                      <h5 className="text-xs">Rs.2199/month</h5>
                    </span>
                  </div>
                </div>
                <div className="jm-price-item-price-2 rounded">
                  <h2 className="title">
                    <span>Upgrade at Rs. 2000</span>
                  </h2>
                </div>
                <div className="jm-price-item-content-2">
                  <ul>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Unlimited number of listings
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Listings are visible for 30 days
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      One Time Fee
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      This Plan Includes 1 Job
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Non-Highlighted Post
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Posted For 30 Days
                    </li>
                  </ul>
                </div>
                {/* <div className="jm-price-item-btn-2">
                <Link
                  to="/contactPage"
                  className={`jm-theme-btn ${
                    activePlan === "basic1" ? "" : "jm-transparent-btn"
                  }`}
                >
                  Buy Now
                </Link>
              </div> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className={`jm-price-item-2 mb-30 ${
                  activePlan === "premium1" ? "active" : ""
                }`}
                onClick={() => handlePlanSelect("premium1")}
              >
                <div className="jm-price-tag-2">
                  <span className="popular-plan">Popular</span>
                </div>
                <div className="jm-price-item-plan-2">
                  <h5 className="title">1 Month Plan</h5>
                  <p>Best for 1 or more openings</p>
                  <div className="flex items-center h-12 gap-6 ">
                    <h5 className="title">Rs. 2199 </h5>
                    <span className=" bg-[#FFE5BF] flex items-center rounded pt-2 px-3">
                      <h5 className="text-xs">Rs.2199/month</h5>
                    </span>
                  </div>
                </div>
                <div className="jm-price-item-price-2 rounded">
                  <h2 className="title">
                    <span>Upgrade at Rs. 2000</span>
                  </h2>
                </div>
                <div className="jm-price-item-content-2">
                  <ul>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Unlimited number of listings
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Listings are visible for 30 days
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      One Time Fee
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      This Plan Includes 1 Job
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Non-Highlighted Post
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Posted For 30 Days
                    </li>
                  </ul>
                </div>
                {/* <div className="jm-price-item-btn-2">
                <Link
                  to="/contactPage"
                  className={`jm-theme-btn jm-theme-btn-pricing ${
                    activePlan === "premium1" ? "" : "jm-transparent-btn"
                  }`}
                >
                  Buy Now
                </Link>
              </div> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className={`jm-price-item-2 mb-30 ${
                  activePlan === "corporate1" ? "active" : ""
                }`}
                onClick={() => handlePlanSelect("corporate1")}
              >
                <div className="jm-price-item-plan-2">
                  <h5 className="title">Corporate Plan</h5>
                  <p>Best for 1 or more openings</p>
                  <div className="flex items-center h-12 gap-6 ">
                    <h5 className="title">Rs. 2199 </h5>
                    <span className=" bg-[#FFE5BF] flex items-center rounded pt-2 px-3">
                      <h5 className="text-xs">Rs.2199/month</h5>
                    </span>
                  </div>
                </div>
                <div className="jm-price-item-price-2 rounded">
                  <h2 className="title">
                    <span>Upgrade at Rs. 2000</span>
                  </h2>
                </div>
                <div className="jm-price-item-content-2">
                  <ul>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Unlimited number of listings
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Listings are visible for 30 days
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      One Time Fee
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      This Plan Includes 1 Job
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Non-Highlighted Post
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#f77036", marginRight: "5px" }}
                      ></i>
                      Posted For 30 Days
                    </li>
                  </ul>
                </div>
                {/* <div className="jm-price-item-btn-2">
                <Link
                  to="/contactPage"
                  className={`jm-theme-btn ${
                    activePlan === "corporate1" ? "" : "jm-transparent-btn"
                  }`}
                >
                  Buy Now
                </Link>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
