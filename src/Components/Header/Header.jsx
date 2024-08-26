/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import Login from "../Login";
import EmployerLoginPage from "../../Pages/employer/EmployerLoginPage"; // Ensure correct import path
import EmployerOtpPage from "../../Pages/employer/EmployerOtpPage"; // Ensure correct import path
import { Modal } from "react-bootstrap";
import CandidateRegistrationPage from "../../Pages/jobseeker/CandidateRegistrationPage";
import VideoStreaming from "../VideoStreaming/VideoStreaming";
import JobSeekerLogin from "../../Pages/jobseeker/JobSeekerLogin";
import JobSeekerOtp from "../../Pages/jobseeker/JobSeekerOtp";
import Drawer from "./Drawer";

const Header = () => {
  const [announcement, setAnnouncement] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [type, setType] = useState("Candidate");
  const [otpStep, setOtpStep] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    isSticky,
    handleOpenForm,
    handleOpenProfileModal,
    handleCloseProfileModal,
    handleOpenProfileCandidateModal,
    showLoginPage,
    showOtpPage,
    showWelcomePage,
    showRegistrationPage,
    videoStreamingOpen,
    showProfileModal,
    userRole,
    handleJobSeekerLogin,
    handleJobSeekerOtp,
    showJobSeekerLoginPage,
    showJobSeekerOtpPage,
    showJobSeekerProfileModal,
    handleOpen,
    userType,
    setUserType,
    notifications,
    fetchNotifications,
  } = useContext(JobContext);

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (showRegistrationPage) {
      navigate("/candidateRegistrationPage"); // Navigate to registration page
    }
    if (videoStreamingOpen) {
      navigate("/videostreaming");
    }
  }, [showRegistrationPage, videoStreamingOpen, navigate]);

  useEffect(() => {
    // fetchNotifications();
  });
  const handleContinue = () => {
    // setShowOtpPage(true);
  };
  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  const handleOtpSuccess = (isNewUser) => {
    if (isNewUser) {
      // setShowRegistrationPage(true);
    } else {
      // handleClose();
    }
  };

  const notificationClick = () => {
    // handleOpenProfileModal("employer");
    setIsOpen(true);
  };
  // Function to open the modal
  const handleProfileClick = () => {
    // setShowLoginPage(true); // Ensure login page is shown initially
    handleOpenProfileModal("employer");
  };
  const handleCandidateClick = () => {
    // setShowLoginPage(true); // Ensure login page is shown initially
    handleOpenProfileCandidateModal("candidate");
    // handleJobSeekerLogin();
    // navigate("/jobSeekerLogin");
  };

  return (
    <>
      <header className="heater-transparent">
        <Login
          setModalShow={setModalShow}
          modalShow={modalShow}
          type={type}
          setOtpStep={setOtpStep}
          otpStep={otpStep}
        />
        {/* <div
          className={`fixed inset-x-0 bottom-0 ${announcement ? "" : "hidden"}`}
        >
          <div className="bg-indigo-600 flex justify-between px-4 py-3 text-white">
            <p className="text-center text-sm font-medium text-white">
              Love Kamai?
              <a href="#" className="inline-block underline text-white">
                {" "}
                Check out our premium{" "}
              </a>
            </p>
            <i
              class="fal fa-times text-white"
              onClick={() => setAnnouncement(false)}
            ></i>
          </div>
        </div> */}
        <div className={`jm-header-area header-sticky sticky`}>
          <div className="container">
            <div className="jm-header-main jm-header-padding ">
              <div className="row align-items-center ">
                <div className="col-xl-3 col-lg-3  col-7">
                  <div className="jm-header-logo">
                    <Link className="jm-logo" to="/">
                      <img
                        src="/assets/img/logo/logo.png"
                        alt="Image Not Fouund"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                  <div className="jm-header-main-menu text-start">
                    <nav className="jm-mobile-menu" id="jm-mobile-menu">
                      <ul>
                        <li className="menu-has-children">
                          <Link to="/">Home</Link>
                          {/* <ul className="sub-menu">
                            <li>
                              <Link to="/">Home 1</Link>
                            </li>
                            <li>
                              <Link to="/homePage2">Home 2</Link>
                            </li>
                          </ul> */}
                        </li>
                        {/* <li>
                          {userType === "employer" ? (
                            <Link to="/companyDetailsPage">Company Profile</Link>
                          ) : (
                            <Link to="/"></Link>
                          )}
                        </li> */}
                        {userType === "employer" ? (
                          <li className="menu-has-children">
                            <Link to="/jobPage">My Jobs</Link>
                          </li>
                        ) : (
                          <li className="menu-has-children">
                            <Link to="/JobseekerJobListPage">Jobs</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/SavedJobsPage">Saved Jobs</Link>
                              </li>
                              <li>
                                <Link to="/AppliedJobsPage">Applied Jobs</Link>
                              </li>
                            </ul>
                          </li>
                        )}
                        {/* <ul
                            className="sub-menu grid grid-cols-2"
                            style={{ width: "420px" }}
                          >
                            <li>
                              <Link to="/JobseekerJobListPage">Jobs Grid</Link>
                            </li>

                            <li>
                              <Link to="/jobListPage">Jobs List</Link>
                            </li>
                            <li>
                              <Link to="/jobListPage">Jobs by title</Link>
                            </li>
                            <li>
                              <Link to="/jobListPage">Jobs by city</Link>
                            </li>
                            <li>
                              <Link to="/jobListPage">
                                Jobs by qualification
                              </Link>
                            </li>
                            <li>
                              <Link to="/jobListPage">Fresher jobs</Link>
                            </li>
                            <li>
                              <Link to="/jobListPage">
                                Jobs for disabled people
                              </Link>
                            </li>
                            <li>
                              <Link to="/jobDetailsPage">Job Details</Link>
                            </li>
                            <li>
                              <Link to="/jobCategoryPage">
                                Jobs By Category
                              </Link>
                            </li>
                            <li>
                              <Link to="/employerListPage">Employer List</Link>
                            </li>
                            <li>
                              <Link to="/employerGridPage">Employer Grid</Link>
                            </li>
                            <li>
                              <Link to="/companyDetailsPage">
                                Employer Details
                              </Link>
                            </li>
                            <li>
                              <Link to="/postJobPage">Post a Job</Link>
                            </li>
                            <li>
                              <Link to="/addResumePage">Add Resume</Link>
                            </li>
                            <li>
                              <Link to="/sampleVideosPage">Sample Videos</Link>
                            </li>
                          </ul> */}
                        {userType === "employer" && (
                          <li className="menu-has-children">
                            <Link to="/candidateListPage">
                              Search Candidates
                            </Link>
                          </li>
                        )}

                        {/* <ul className="sub-menu">
                            <li>
                              <Link to="/candidatePage">Candidates Grid</Link>
                            </li>
                            <li>
                              <Link to="/candidateListPage">
                                Candidates List
                              </Link>
                            </li>
                            <li>
                              <Link to="/candidateDetailsPage">
                                Candidates Details
                              </Link>
                            </li>
                            <li>
                              <Link to="/candidateRegister">
                                Candidates Register
                              </Link>
                            </li>
                            <li>
                              <Link to="/AvatarSettings">
                                Video Description
                              </Link>
                            </li>
                          </ul> */}
                        <li className="menu-has-children">
                          <Link to="/">Settings</Link>
                          <ul className="sub-menu">
                            {userType === "employer" && (
                              <li>
                                <Link to="/companyDetailsPage">
                                  Company Profile
                                </Link>
                              </li>
                            )}

                            <li>
                              <Link to="/AvatarSettings">
                                Video Description
                              </Link>
                            </li>

                            {userType === "candidate" && (
                              <li>
                                <Link to="/candidateDetailsPage">
                                  Candidate Profile
                                </Link>
                              </li>
                            )}
                            <li>
                              <Link to="/PricingPlanPage">Pricing Plan</Link>
                            </li>
                            <li>
                              {(userType === "employer" ||
                                userType === "candidate") && (
                                <Link to="/" onClick={notificationClick}>
                                  Notifications
                                </Link>
                              )}
                            </li>
                            <li>
                              <Link to="/SampleVideosPage">Sample Video</Link>
                            </li>
                          </ul>
                        </li>
                        {/* <li className="menu-has-children">
                          <Link to="#">Pages</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/aboutPage">About</Link>
                            </li>
                            <li>
                              <Link to="/servicePage">Services</Link>
                            </li>
                            <li>
                              <Link to="/serviceDetailsPage">
                                Services Details
                              </Link>
                            </li>
                            <li>
                              <Link to="/contactPage">Contact</Link>
                            </li>
                            <li>
                              <Link to="/subscription">Subscription</Link>
                            </li>
                            <li>
                              <Link to="/TermsAndConditionsPage">
                                Terms & Conditions
                              </Link>
                            </li>
                            <li>
                              <Link to="/SecurityAndPrivacyPage">
                                Security & Privacy
                              </Link>
                            </li>
                            <li>
                              <Link to="/FAQsPage">FAQs</Link>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li className="menu-has-children">
                          <Link to="/blogPage">Blog</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/blogPage">Blog Grid</Link>
                            </li>
                            <li>
                              <Link to="/blogListPage">Blog List</Link>
                            </li>
                            <li>
                              <Link to="/blogDetailsPage">Blog Details</Link>
                            </li>
                          </ul>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-5">
                  <div className="jm-header-right  text-end d-flex gap-4 align-items-center justify-content-end">
                    {/* <Link
                    to="#"
                    className="jm-search d-none d-lg-block jm-header-action-search"
                    role="button"
                    onClick={handleOpenForm}
                  >
                    <i className="fal fa-search"></i>
                  </Link> */}
                    {/* <Link to="/candidateDetailsPage" className="jm-user">
                    <i className="fal fa-user"></i>
                  </Link> */}
                    {!userType && (
                      <>
                        <button
                          className="jm-theme-btn-2 text-[#130160] whitespace-nowrap font-semibold d-none d-lg-block"
                          onClick={handleProfileClick}
                        >
                          Employer Login
                        </button>
                        <button
                          className="jm-theme-btn d-none d-lg-block"
                          style={{
                            padding: "8px 20px",
                            borderRadius: "10px",
                          }}
                          onClick={handleCandidateClick}
                        >
                          Candidate Login
                        </button>
                      </>
                    )}
                    {userType === "employer" && (
                      <Link
                        to="/postJobPage"
                        className="jm-theme-btn-2 text-[#130160] whitespace-nowrap font-semibold d-none d-lg-block"
                      >
                        Post Job
                      </Link>
                    )}
                    {userType && (
                      <button
                        className="jm-theme-btn d-none d-lg-block"
                        onClick={() => {
                          localStorage.clear();
                          setUserType(null);
                          navigate("/");
                        }}
                      >
                        Logout
                      </button>
                    )}
                    {userType && (
                      <>
                        <i
                          class="fa-solid fa-bell cursor-pointer"
                          onClick={notificationClick}
                        ></i>
                        <i class="fa-solid fa-gear cursor-pointer"></i>
                        <i
                          class="fa-solid fa-user cursor-pointer"
                          onClick={() => navigate("/candidateDetailsPage")}
                        ></i>
                      </>
                    )}
                    <div
                      className="jm-navbar-mobile-sign side-toggle d-lg-none d-inline-block"
                      role="button"
                      onClick={handleOpen}
                    >
                      <span className="dr-line-1"></span>
                      <span className="dr-line-2"></span>
                      <span className="dr-line-3"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal Component */}
      {showProfileModal && (
        <Modal
          show={showProfileModal}
          onHide={handleCloseProfileModal}
          centered
          dialogClassName="modal-width"
        >
          <Modal.Header
            style={{ borderBottom: "none", marginBottom: 0, paddingBottom: 0 }}
            closeButton
          >
            <Modal.Title id="contained-modal-title-vcenter">
              {/* Conditional Title Based on Role */}
              {userRole === "candidate" ? "Candidate Login" : "Employer Login"}
              {/* {showLoginPage ? "Login" : showOtpPage ? "OTP Verification" : "Modal"} */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ margin: 0, padding: 0 }}>
            {showLoginPage && <EmployerLoginPage />}
            {showOtpPage && <EmployerOtpPage />}

            {showRegistrationPage && <CandidateRegistrationPage />}
            {videoStreamingOpen && <VideoStreaming />}
          </Modal.Body>
        </Modal>
      )}
      {showJobSeekerProfileModal && (
        <Modal
          show={showJobSeekerProfileModal}
          onHide={handleCloseProfileModal}
          centered
          dialogClassName="modal-width"
        >
          <Modal.Header
            style={{ borderBottom: "none", marginBottom: 0, paddingBottom: 0 }}
            closeButton
          >
            <Modal.Title id="contained-modal-title-vcenter">
              {/* Conditional Title Based on Role */}
              {userRole === "candidate" ? "Candidate Login" : "Employer Login"}
              {/* {showLoginPage ? "Login" : showOtpPage ? "OTP Verification" : "Modal"} */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ margin: 0, padding: 0 }}>
            {showJobSeekerLoginPage && <JobSeekerLogin />}
            {showJobSeekerOtpPage && <JobSeekerOtp />}

            {showRegistrationPage && <CandidateRegistrationPage />}
            {videoStreamingOpen && <VideoStreaming />}
          </Modal.Body>
        </Modal>
      )}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="min-h-screen"></div>
      </Drawer>
    </>
  );
};

export default Header;
