import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";

const SingleCandidate = () => {
  const { candidateJobPostDts } = useContext(JobContext);

  function formatDate(date) {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }

  function formatDates(date) {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
      new Date(date)
    );
  }

  return (
    <div className="container mt-36">
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box custom-box">
            <div className="box-body border p-2 rounded bg-gray-50 mb-4">
              <div className="sm:flex items-center sm:flex-wrap justify-between gap-2">
                <div className="md:flex">
                  <span className="avatar avatar-xxl !rounded-full">
                    <img
                      src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724457600&semt=ais_hybrid"
                      className="img-fluid h-48 w-48"
                      alt=""
                    />
                  </span>
                  <div className="sm:ms-4">
                    <h4 className="font-bold mb-0 sm:flex items-center">
                      <a href="javascript:void(0);">
                        Brenda Simpson
                        <i
                          className="bi bi-check-circle-fill text-success text-[1rem]"
                          title="Verified candidate"
                        ></i>
                      </a>
                    </h4>
                    <a href="javascript:void(0);" className="font-semibold">
                      <i className="bi bi-briefcase me-1"></i> Software
                      Developer
                    </a>
                    <div className="flex items-center text-[.6875rem] text-[#8c9097] dark:text-white/50">
                      <p className="text-[.6875rem] mb-0">Ratings :</p>
                      <div className="min-w-fit sm:ms-2">
                        <span className="text-warning">
                          <i className="bi bi-star-fill"></i>
                        </span>
                        <span className="text-warning">
                          <i className="bi bi-star-fill"></i>
                        </span>
                        <span className="text-warning">
                          <i className="bi bi-star-fill"></i>
                        </span>
                        <span className="text-warning">
                          <i className="bi bi-star-fill"></i>
                        </span>
                        <span className="text-warning">
                          <i className="bi bi-star-half"></i>
                        </span>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50"
                      >
                        <span>(142)</span> <span>Ratings</span>
                      </a>
                    </div>
                    <div className="sm:flex text-[.875rem] mt-4">
                      <div>
                        <p className="mb-1">
                          <i className="bi bi-geo-alt me-2"></i>Banglore,
                          Karnataka
                        </p>
                        <p>
                          <i className="bi bi-briefcase me-2"></i>1 Year
                          Experience
                        </p>
                      </div>
                      <div className="sm:ms-4">
                        <p className="mb-1">
                          <i className="bi bi-coin me-2"></i>Package (Yearly) :
                          <span
                            className="font-semibold"
                            title="Current Salary"
                          >
                            $10,000
                          </span>
                          -
                          <span
                            className="font-semibold"
                            title="Expected Salary"
                          >
                            $20,000
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-mortarboard me-2"></i>Graduate
                        </p>
                      </div>
                    </div>
                    <div className="popular-tags">
                      <a
                        href="javascript:void(0);"
                        className="badge !rounded-full bg-info/10 text-info mb-2"
                      >
                        <i className="bi bi-moon-stars me-1"></i>Full Time
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge !rounded-full bg-danger/10 text-danger mb-2"
                      >
                        <i className="bi bi-clock me-1"></i> Immediate Joinee
                      </a>
                    </div>
                  </div>
                </div>
                <div className="btn-list flex">
                  <button
                    href="javascript:void(0);"
                    className="ti-btn ti-btn-primary-full rounded bg-[#130160] p-2 text-white dark:border-defaulttextcolor/10 me-2 whitespace-nowrap"
                  >
                    <i className="bi bi-download me-1"></i> Video Resume
                  </button>
                  <button
                    href="javascript:void(0);"
                    className="ti-btn ti-btn-primary-full rounded bg-[#F59300] p-2 text-white dark:border-defaulttextcolor/10 me-2 whitespace-nowrap"
                  >
                    <i className="bi bi-download me-1"></i> Download CV
                  </button>
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    className="ti-btn ti-btn-icon ti-btn-primary me-2"
                  >
                    <i className="ri-heart-line text-[.8125rem] align-middle"></i>
                  </a>
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    className="ti-btn ti-btn-icon ti-btn-primary"
                  >
                    <i className="ri-share-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-4">
        <div className="lg:col-span-8 col-span-12">
          <div className="box custom-box  bg-gray-50 p-2 rounded border mb-2">
            <div className="box-header">
              <div className="box-title">
                <h5 className="mb-0 font-semibold text-[1.375rem]">
                  Candidate Profile Information
                </h5>
              </div>
            </div>
            <div className="box-body !p-0 candidate-edu-timeline">
              <div className="p-6 border-b dark:border-defaultborder/10">
                <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2 mb-4">
                  <span className="avatar !rounded-full bg-primary avatar-sm">
                    <i className="bi bi-briefcase text-white text-[.8125rem]"></i>
                  </span>
                  Career Objective :
                </h5>
                <div className="ms-6 ps-4">
                  <p className="opacity-[0.9] mb-4">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam
                    rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus
                    labore no sed ipsum ipsum nonumy vero sanctus labore.A
                    officiis optio temporibus minima facilis...
                  </p>
                  <p className="mb-0 opacity-[0.9]">
                    Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam
                    rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus
                    labore no sed ipsum ipsum nonumy vero sanctus labore..
                  </p>
                </div>
              </div>
              <div className="p-6 border-b dark:border-defaultborder/10">
                <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2">
                  <span className="avatar !rounded-full bg-primary avatar-sm">
                    <i className="bi bi-mortarboard text-white text-[.8125rem]"></i>
                  </span>
                  Education :
                </h5>
                <div className="ms-6 ps-4">
                  <p className="font-semibold text-[.875rem] mb-0">
                    Bachelors of science in computer science
                  </p>
                  <div className="sm:flex gap-2">
                    <p className="mb-0">Dwayne University</p>
                    <p className="mb-0 text-[#8c9097] dark:text-white/50">
                      <i className="bi bi-geo-alt text-[0.75rem]"></i> Nellore
                    </p>
                  </div>
                  <p className="mb-4">(2019 Mar - 2022 Apr)</p>
                  <p className="font-semibold text-[.875rem] mb-0">
                    Intermediate (MPC)
                  </p>
                  <div className="sm:flex gap-2">
                    <p className="mb-0">Sprect College</p>
                    <p className="mb-0 text-[#8c9097] dark:text-white/50">
                      <i className="bi bi-geo-alt text-[0.75rem]"></i> Warangal
                    </p>
                  </div>
                  <p className="mb-0">(2017 Mar - 2019 Apr)</p>
                </div>
              </div>
              <div className="p-6 border-b dark:border-defaultborder/10">
                <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2">
                  <span className="avatar !rounded-full bg-primary avatar-sm">
                    <i className="bi bi-award text-white text-[.8125rem]"></i>
                  </span>
                  Certifications :
                </h5>
                <div className="ms-6 ps-4">
                  <p className="font-semibold text-[.875rem] mb-0">
                    Web Development (3 Months)
                  </p>
                  <p className="mb-4">EMC Solutions Pvt Ltd</p>
                  <p className="font-semibold text-[.875rem] mb-0">
                    Python Development (6 Months)
                  </p>
                  <p className="mb-0">Dabre Services Pvt Ltd</p>
                </div>
              </div>
              <div className="p-6 border-b dark:border-defaultborder/10">
                <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2">
                  <span className="avatar !rounded-full bg-primary avatar-sm">
                    <i className="bi bi-journal-medical text-white text-[.8125rem]"></i>
                  </span>
                  Publications :
                </h5>
                <div className="ms-4">
                  <ol className="list-group border-0 list-disc ps-[2rem]">
                    <li className="border-0 py-1">
                      <span className="font-semibold">
                        “One of a Kind Design,”
                      </span>
                      Web Design Book, Poulin Publishing, 2018
                    </li>
                    <li className="border-0 py-1">
                      <span className="font-semibold">
                        “Website Design in 2019,”
                      </span>
                      A List Apart, June 2019
                    </li>
                    <li className="border-0 py-1">
                      <span className="font-semibold">
                        “Usable Information Architecture,”
                      </span>
                      SitePoint, Feb 2019
                    </li>
                  </ol>
                </div>
              </div>
              <div className="p-6 border-b dark:border-defaultborder/10">
                <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2">
                  <span className="avatar !rounded-full bg-primary avatar-sm">
                    <i className="bi bi-activity text-white text-[.8125rem]"></i>
                  </span>
                  Activities and Interests :
                </h5>
                <div className="ms-4">
                  <ol className="list-group border-0 list-disc ps-[2rem]">
                    <li className="border-0 py-1">Community Involvement</li>
                    <li className="border-0 py-1">Yoga</li>
                    <li className="border-0 py-1">Travel</li>
                    <li className="border-0 py-1">Art</li>
                  </ol>
                </div>
              </div>
              <div className="p-6 border-b dark:border-defaultborder/10">
                <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2">
                  <span className="avatar !rounded-full bg-primary avatar-sm">
                    <i className="bi bi-link-45deg text-white text-[.8125rem]"></i>
                  </span>
                  References :
                </h5>
                <div className="ms-6 ps-4">
                  <p className="mb-4">
                    <span className="font-semibold">Name : </span> Nicole Chiu
                  </p>
                  <p className="mb-4">
                    <span className="font-semibold">Designation : </span>{" "}
                    Software Developer
                  </p>
                  <p className="mb-4">
                    <span className="font-semibold">Company Name : </span>{" "}
                    Spotech Technical Solutions
                  </p>
                  <p className="mb-4">
                    <span className="font-semibold">Mobile : </span> +91
                    7865443679
                  </p>
                  <p className="mb-4">
                    <span className="font-semibold">Email : </span>{" "}
                    nchiu@email.com
                  </p>
                  <p className="mb-0">
                    <span className="font-semibold">Location : </span> Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box custom-box bg-gray-50 p-2 rounded border">
            <div className="box-header">
              <div className="box-title">
                <h5 className="mb-0 font-semibold">Experience Overview</h5>
              </div>
            </div>
            <div className="box-body !p-0 candidate-edu-timeline">
              <div className="p-6 border-b dark:border-defaultborder/10">
                <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2 mb-4">
                  <span className="avatar !rounded-full bg-primary avatar-sm">
                    <i className="bi bi-briefcase text-white text-[.8125rem]"></i>
                  </span>
                  Experience :
                </h5>
                <div className="ms-6 ps-4">
                  <p className="font-semibold text-[.875rem] mb-0">
                    Full Stack Developer (2019 Mar - 2022 Apr)
                  </p>
                  <div className="sm:flex gap-2">
                    <p className="mb-4">Spotech Technical Solutions</p>
                    <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50">
                      <i className="bi bi-geo-alt text-[.6875rem]"></i>{" "}
                      Kondapur, Hyderabad
                    </p>
                  </div>
                  <p className="font-semibold mb-2">Responsibilities :</p>
                  <ol className="list-group border-0 list-disc ps-[2rem]">
                    <li className="border-0 py-1">
                      Design thoughtful, beautiful, and useful software user
                      interfaces and experiences in a team environment..
                    </li>
                    <li className="border-0 py-1">
                      Create user-centered designs by considering market
                      analysis, customer feedback, and usability findings.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="p-6">
                <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2 mb-4">
                  <span className="avatar !rounded-full bg-primary avatar-sm">
                    <i className="bi bi-people text-white text-[.8125rem]"></i>
                  </span>
                  Volunteer Experience:
                </h5>
                <div className="ms-6 sm:ps-4">
                  <p className="font-semibold text-[.875rem] mb-0">
                    Volunteer in the Student Organization
                  </p>
                  <p className="mb-2 text-[#8c9097] dark:text-white/50">
                    <i className="bi bi-geo-alt text-[0.75rem]"></i> Warangal,
                    2015
                  </p>
                  <ol className="list-group border-0 list-disc ps-[2rem]">
                    <li className="border-0 py-1">
                      In charge of Organizing activities for approximately 100+
                      internation schools in 2015
                    </li>
                    <li className="border-0 py-1">
                      In charge of Organizing activities for approximately 100+
                      internation schools in 2015
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12 ">
          <div className="box custom-box  bg-gray-50 p-2 rounded border mb-2">
            <div className="box-header">
              <div className="box-title font-bold mb-2">Skills</div>
            </div>
            <div className="box-body mb-3">
              <div className="popular-tags">
                <a
                  href="javascript:void(0);"
                  className="badge rounded-full border !text-[#F59300] border-[#F59300]"
                >
                  HTML
                </a>
                <a
                  href="javascript:void(0);"
                  className="badge rounded-full border !text-[#F59300] border-[#F59300]"
                >
                  HTML
                </a>{" "}
                <a
                  href="javascript:void(0);"
                  className="badge rounded-full border !text-[#F59300] border-[#F59300]"
                >
                  HTML
                </a>{" "}
                <a
                  href="javascript:void(0);"
                  className="badge rounded-full border !text-[#F59300] border-[#F59300]"
                >
                  HTML
                </a>{" "}
                <a
                  href="javascript:void(0);"
                  className="badge rounded-full border !text-[#F59300] border-[#F59300]"
                >
                  HTML
                </a>
              </div>
            </div>
          </div>

          <div className="box custom-box bg-gray-50 p-2 rounded border mb-2">
            <div className="box-header">
              <div className="box-title font-bold mb-2">Languages</div>
            </div>
            <div className="box-body">
              <p className="mb-4">
                <span className="font-semibold">English : </span>Fluent
              </p>
              <p className="mb-4">
                <span className="font-semibold">Hindi : </span>Intermediate
              </p>
              <p className="mb-0">
                <span className="font-semibold">Telugu : </span>Expert
              </p>
            </div>
          </div>
          <div className="box custom-box overflow-hidden bg-gray-50 p-2 rounded border mb-2">
            <div className="box-header">
              <div className="box-title font-bold mb-2">
                Personal Information
              </div>
            </div>
            <div className="box-body !p-2 bg-gray-50">
              <table className="table table-borderless min-w-full bg-gray-50">
                <tbody className="bg-gray-50">
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">Full Name</span>
                    </td>
                    <td className="!bg-gray-50">: Brenda Simpson</td>
                  </tr>
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">Email</span>
                    </td>
                    <td className="!bg-gray-50">: brendra@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">D.O.B</span>
                    </td>
                    <td className="!bg-gray-50">: 13 Jan 2022</td>
                  </tr>
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">Gender</span>
                    </td>
                    <td className="!bg-gray-50">: Female</td>
                  </tr>
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">Age</span>
                    </td>
                    <td className="!bg-gray-50">: 35</td>
                  </tr>
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">Mobile </span>
                    </td>
                    <td className="!bg-gray-50">: +91 7865343874</td>
                  </tr>
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">Mother Tongue </span>
                    </td>
                    <td className="!bg-gray-50">: Telugu</td>
                  </tr>
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">Marital Status </span>
                    </td>
                    <td className="!bg-gray-50">: Unmarried</td>
                  </tr>
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">Blood Group </span>
                    </td>
                    <td className="!bg-gray-50">: o +ve</td>
                  </tr>
                  <tr>
                    <td className="!bg-gray-50">
                      <span className="font-semibold">Address </span>
                    </td>
                    <td className="!bg-gray-50">
                      Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                      Bangalore-560016
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box-footer">
              <div className="sm:flex items-center">
                <p className="text-[.9375rem] mb-0 me-4 font-semibold">
                  Social :
                </p>
                <div className="btn-list mb-0">
                  <button
                    type="button"
                    aria-label="button"
                    className="ti-btn ti-btn-sm ti-btn-icon ti-btn-primary me-[0.375rem] xxl:mb-0"
                  >
                    <i className="ri-facebook-line"></i>
                  </button>
                  <button
                    type="button"
                    aria-label="button"
                    className="ti-btn ti-btn-sm ti-btn-icon ti-btn-secondary me-[0.375rem] xxl:mb-0"
                  >
                    <i className="ri-twitter-x-line"></i>
                  </button>
                  <button
                    type="button"
                    aria-label="button"
                    className="ti-btn ti-btn-sm ti-btn-icon ti-btn-warning me-[0.375rem] xxl:mb-0"
                  >
                    <i className="ri-instagram-line"></i>
                  </button>
                  <button
                    type="button"
                    aria-label="button"
                    className="ti-btn ti-btn-sm ti-btn-icon ti-btn-success me-[0.375rem] xxl:mb-0"
                  >
                    <i className="ri-github-line"></i>
                  </button>
                  <button
                    type="button"
                    aria-label="button"
                    className="ti-btn ti-btn-sm ti-btn-icon ti-btn-danger xxl:mb-0"
                  >
                    <i className="ri-youtube-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCandidate;