/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Select from "react-select"; // Import React Select
import "react-toastify/dist/ReactToastify.css";
import { JobContext } from "../../Context/JobContext";
import locations from "../../SearchData/location.json";
import jobTitles from "../../SearchData/job-title.json";

const CandidateRegistrationPage = ({
  openDialog,
  setOpenDialog,
  setOpenDrawerLogin,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState(null); // Updated to use Select
  const [gender, setGender] = useState("");
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const { saveAndContinueRegistration, videoStreamingOpen } =
    useContext(JobContext);

  useEffect(() => {
    if (videoStreamingOpen) {
      navigate("/videostreaming");
    }
  }, [videoStreamingOpen, navigate]);

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);

  const isFormValid = () => fullName.trim() !== "" && location && gender !== "";

  const handleSubmit = () => {
    if (isFormValid()) {
      saveAndContinueRegistration();
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid p-3 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden h-screen">
        <div className="hidden lg:block w-full object-fill h-screen shadow-lg">
          <img
            src="assets/img/banner/image.png"
            alt=""
            className="w-full h-full rounded-2xl shadow-md"
          />
        </div>
        <div className="flex flex-col w-full overflow-auto">
          {!isFormSubmitted ? (
            <div className="bg-white flex flex-col justify-between p-8 rounded-2xl shadow-lg w-full h-screen mx-auto">
              <h6 className="text-2xl font-bold text-center mb-4 text-[#130160]">
                Registration Information
              </h6>
              <p className="text-center mb-6 text-gray-600">
                Please fill in the required details
              </p>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F59300]"
                  id="fullName"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-2"
                >
                  Location*
                </label>
                {console.log(locations)}
                <Select
                  id="location"
                  options={locations.map((location) => ({
                    value: location.id,
                    label: location.city,
                  }))}
                  value={location}
                  onChange={(selectedOption) => setLocation(selectedOption)}
                  className="basic-select"
                  classNamePrefix="select"
                  placeholder="Select location"
                  styles={{
                    multiValue: (styles) => ({
                      ...styles,
                      border: "1px solid #ff8700",
                      backgroundColor: "white",
                    }),
                    multiValueLabel: (styles) => ({
                      ...styles,
                      color: "#ff8700",
                    }),
                    control: (styles) => ({
                      ...styles,
                      borderColor: "#d1d5db",
                      "&:hover": { borderColor: "#ff8700" },
                    }),
                    dropdownIndicator: (styles) => ({
                      ...styles,
                      color: "#9ca3af",
                      "&:hover": { color: "#ff8700" },
                    }),
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Gender*
                </label>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={handleGenderChange}
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={handleGenderChange}
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="Other"
                      checked={gender === "Other"}
                      onChange={handleGenderChange}
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Pick up to 5 jobs you're interested in
                </label>
                <Select
                  options={[
                    { value: "all", label: "Open for Any Job" },
                    ...jobTitles?.map((job) => ({
                      value: job.id,
                      label: job.name,
                    })),
                  ]}
                  styles={{
                    multiValue: (styles) => ({
                      ...styles,
                      border: "1px solid #ff8700",
                      backgroundColor: "white",
                    }),
                    multiValueLabel: (styles) => ({
                      ...styles,
                      color: "#ff8700",
                    }),
                    control: (styles) => ({
                      ...styles,
                      borderColor: "#d1d5db",
                      "&:hover": { borderColor: "#9ca3af" },
                    }),
                    dropdownIndicator: (styles) => ({
                      ...styles,
                      color: "#9ca3af",
                      "&:hover": { color: "#4b5563" },
                    }),
                  }}
                  isMulti
                  value={selectedJobs}
                  onChange={(selectedOption) => setSelectedJobs(selectedOption)}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Select job titles"
                  closeMenuOnSelect={false}
                  isOptionDisabled={() => selectedJobs.length >= 5}
                />
              </div>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <input
                    type="checkbox"
                    id="disable"
                    className="hidden"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                  />
                  <label
                    htmlFor="disable"
                    className="text-sm font-light flex items-center cursor-pointer"
                  >
                    <span
                      className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center ${
                        isChecked ? "bg-[#F59300]" : "bg-gray-300"
                      }`}
                    >
                      {isChecked && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm">Disable</span>
                  </label>
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="px-6 py-2 w-full bg-[#F59300] text-white rounded-full hover:bg-[#130160] transition-all duration-300 ease-in-out"
                  onClick={handleSubmit}
                >
                  Apply
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
              <h6 className="text-2xl font-bold text-[#130160] mb-4">
                Registration Successful!
              </h6>
              <p className="text-gray-600 mb-6">
                Thank you for registering with us.
              </p>
              <button
                className="px-6 py-3 bg-[#F59300] text-white rounded-full hover:bg-[#130160] transition-all duration-300 ease-in-out"
                onClick={() => navigate("/videostreaming")}
              >
                Continue to Video Streaming
              </button>
            </div>
          )}
        </div>
      </div>
      <Modal show={openDialog} onHide={() => setOpenDialog(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>All the terms and conditions go here...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenDialog(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setOpenDialog(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CandidateRegistrationPage;
