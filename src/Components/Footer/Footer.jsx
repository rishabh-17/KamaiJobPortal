import React, { useState, useContext, useEffect } from "react";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { JobContext } from "../../Context/JobContext";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const [suggestion, setSuggestion] = useState("");
  const [rating, setRating] = useState();
  const [followUp, setFollowUp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { profileToken, phoneNumber } = useContext(JobContext);

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    const feedbackData = {
      username: "+91" + phoneNumber,
      suggestion,
      rating,
      followUp,
    };

    try {
      const response = await fetch(
        "http://k8s-developm-ingressa-1c98111f81-862727769.ap-south-1.elb.amazonaws.com/admin/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${profileToken}`,
          },
          body: JSON.stringify(feedbackData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSubmitSuccess(true);
        setSuggestion("");
        setRating("");
        setFollowUp("");
        toast.success("Feedback submitted successfully!");
      } else {
        toast.error(`Error submitting feedback: ${response.statusText}`);
        toast.error(`Status code: ${response.status}`);
      }
    } catch (error) {
      toast.error(`Uncaught error submitting feedback: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="jm-footer-area-2">
      <div className="jm-footer-top-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-4  col-lg-4">
              <div className="jm-footer-top-subscribe-2 my-5 my-lg-0 mr-20">
                <form action="#">
                  <input type="email" placeholder="Email Please" />
                  <button type="submit" className="jm-footer-subscribe-btn-2">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-8  col-lg-8">
              <Counter />
            </div>
          </div>
        </div>
      </div>
      <div className="jm-footer-middle-2 pt-100 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-8">
              <div className="jm-footer-widget-2 mb-40">
                <div className="jm-footer-widget-logo-2">
                  <Link to="/">
                    <img src="assets/img/logo/logowhite.png" alt="" />
                  </Link>
                </div>
                <div className="jm-footer-widget-content-2">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantiu doloremque laudantium
                  </p>
                  <div className="jm-footer-widget-social-2">
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-lg-center">
              <div className="jm-footer-widget-2 mb-40">
                <h4 className="jm-footer-widget-title-2">Useful link</h4>
                <div className="jm-footer-widget-menu-2">
                  <ul>
                    <li>
                      <Link to="/aboutPage">About Us</Link>
                    </li>
                    <li>
                      <Link to="/TermsAndConditionsPage">
                        Term and Conditions
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
                    <li>
                      <Link to="/RefundPolicyPage">Refund Policy</Link>
                    </li>
                    <li>
                      <span
                        onClick={() => {
                          setShowModal(true);
                        }}
                        className="hover:text-amber-500 cursor-pointer"
                      >
                        Feedback
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 order-sm-4 order-md-3 d-flex justify-content-lg-center">
              <div className="jm-foote-widget-2 mb-40">
                <h4 className="jm-footer-widget-title-2">Download</h4>
                <div className="jm-footer-widget-menu-2">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-apple"></i>App Store
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-google-play"></i>Google Play
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-windows"></i>Windows
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8 order-sm-3 order-md-4 d-flex justify-content-lg-end">
              <div className="jm-footer-widget-2 mb-40">
                <h4 className="jm-footer-widget-title-2">Contact</h4>
                <div className="jm-footer-widget-contact-2">
                  <ul className="jm-footer-widget-contact-list-2">
                    <li>
                      <Link to="tel:(+1)260-235-0551">
                        <i className="fa-thin fa-phone"></i>(+1) 260-235-0551
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:example@mail.com">
                        <i className="fa-thin fa-envelope"></i>example@mail.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 className="jm-footer-widget-title-2">Payments</h4>
                <div className="jm-footer-widget-payment-2">
                  <ul className="jm-footer-widget-payment-list-2">
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-cc-mastercard"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-cc-visa"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-solid fa-credit-card"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-cc-paypal"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jm-footer-bottom-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="jm-footer-copyright-text-2 text-center">
                <p>
                  &copy; Theme by{" "}
                  <Link
                    to="https://themeforest.net/user/codebasket/portfolio"
                    target="_blank"
                  >
                    KAMAI
                  </Link>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        dialogClassName="modal-width"
      >
        <div className="max-w-md py-3 px-3 sm:mx-auto">
          <div className="flex flex-col rounded-xl bg-slate-200 shadow-lg">
            <div className="px-12 py-5">
              <h2 className="whitespace-nowrap text-center font-semibold text-gray-800 sm:text-xl">
                Your opinion matters to us!
              </h2>
            </div>
            <div className="flex w-full flex-col items-center bg-[#fdfeff]">
              <div className="flex flex-col items-center space-y-3 py-6">
                <span className="text-lg font-medium text-gray-500">
                  How was your experience?
                </span>
                <div className="flex space-x-3">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div key={value} onClick={() => handleRatingClick(value)}>
                      <svg
                        className={`h-8 w-8 cursor-pointer ${
                          rating >= value ? "text-[#130160]" : "text-gray-400"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-3/4 flex-col">
                <textarea
                  rows="3"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="resize-none rounded-xl bg-gray-100 p-4 text-gray-500 outline-none focus:ring"
                  placeholder="Leave a message, if you want"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="my-8 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 py-3 text-base text-white"
                >
                  {isSubmitting ? "Submitting..." : "Rate now"}
                </button>
              </div>
            </div>
            <div
              className="flex items-center justify-center py-5"
              onClick={() => setShowModal(false)}
            >
              <a href="#" className="text-sm text-gray-600">
                Maybe later
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
