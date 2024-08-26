/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { jobs } from "../Data/JobsData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(
    localStorage.getItem("userType") || null
  );
  // Search Form
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  // Profile Form
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const handleOpenLoginModal = () => {
    setShowLoginPage(true);

    setShowOtpPage(false);
    setShowRegistrationPage(false);
    setShowEmployeRegistrationPage(false);
    setVideoStreamingOpen(false);
    setIsLoginModalOpen(true);
  };
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);
  const handleAuthPopupClose = () => {
    setShowLoginPage(false);
    setShowOtpPage(false);
    setShowJobSeekerLoginPage(false);
    setShowJobSeekerOtpPage(false);
    setShowProfileModal(false);
    setShowJobSeekerProfileModal(false);
    setIsLoginModalOpen(false);
  };
  // SidePanel
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const handleOpen = () => setSidePanelOpen(true);
  const handleClose = () => setSidePanelOpen(false);

  // Sticky Navbar
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsSticky(window.scrollY > 0);
      }, 200); // Delay of 200 milliseconds
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Jobs Filter
  // const [filteredJobs, setFilteredJobs] = useState(jobs);

  const [filteredJobs, setFilteredJobs] = useState({});
  const [candidateJobs, setCandidateJobs] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [candidatesResponse, setCandidatesResponse] = useState([]);
  const [savedJobs, setSavedJobs] = useState({});
  const [appliedJobs, setAppliedJobs] = useState({});
  const [notifications, setNotifications] = useState({});

  const [selectedTimes, setSelectedTimes] = useState([]);
  const handleJobTimeSelect = (event) => {
    const { value, checked } = event.target;
    let updatedTimes = [...selectedTimes];

    if (checked) {
      updatedTimes.push(value);
    } else {
      updatedTimes = updatedTimes.filter((time) => time !== value);
    }

    setSelectedTimes(updatedTimes);
    filterJobsByTime(updatedTimes);
  };

  // Modal
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  // Employer Filter
  const [selectedJobType, setSelectedJobType] = useState("");
  const handleJobTypeChange = (event) => setSelectedJobType(event.target.value);
  const filteredEmployer = jobs.filter(
    (job) => selectedJobType === "" || job.jobTime === selectedJobType
  );

  // Profile Modal
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [showOtpPage, setShowOtpPage] = useState(false);
  const [showEmployeRegistrationPage, setShowEmployeRegistrationPage] =
    useState(false);
  const [showRegistrationPage, setShowRegistrationPage] = useState(false);
  const [videoStreamingOpen, setVideoStreamingOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showJobSeekerProfileModal, setShowJobSeekerProfileModal] =
    useState(false);
  const [userRole, setUserRole] = useState(null);
  const [accessToken, setAccessToken] = useState(
    "ZGVtby1jbGllbnQ6ZGVtby1zZWNyZXQ="
  );
  const [showJobSeekerLoginPage, setShowJobSeekerLoginPage] = useState(false);
  const [showJobSeekerOtpPage, setShowJobSeekerOtpPage] = useState(false);
  const [registrationAccessToken, setRegistrationAccessToken] = useState("");
  const [orgId, setOrgId] = useState(
    localStorage.getItem("organizationId") || ""
  );
  const [profileToken, setProfileToken] = useState(
    localStorage.getItem("accessToken") || ""
  );
  const [profileUpdate, setProfileUpdate] = useState(null);
  const [gst, setGst] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [companyData, setCompanyData] = useState("");
  const [jobPostingDetail, setJobPostingDetail] = useState("");
  const [candidateDtls, setCandidateDtls] = useState("");
  const [jobDetails, setJobDetails] = useState("");
  const [savedResponse, setSavedResponse] = useState([]);
  const [jobseekerId, setJobseekerId] = useState(
    localStorage.getItem("jobseekerId")
  );

  // To get personal information dynamically
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    location: "",
    gender: "",
    disability: false,
    preferredJobRoles: [],
  });

  //   const profileUpdate = {
  //     id: orgId,
  //     companyName: "CODEFUSIONAI LIMITED",
  //     location: "COLCHESTER",
  //     locality: "ECHELON WALK",
  //     orgType: "corporate",
  //     mobileNumber: `+91${phoneNumber}`,
  //     email: "mallampatis36@gmail.com",
  //     address: "UK",
  //     companyLogo: null,
  //     profilePic: null,
  //     pancard: null,
  //     gst: null,
  // };

  const handleOpenProfileModal = (role) => {
    setUserRole("employer");
    setShowProfileModal(true);
    setShowLoginPage(true);
    setShowOtpPage(false);
    setShowRegistrationPage(false);
    setVideoStreamingOpen(false);
  };
  const handleOpenProfileCandidateModal = () => {
    setUserRole("candidate");
    setShowJobSeekerProfileModal(true);
    setShowJobSeekerLoginPage(true);
    setShowRegistrationPage(false);
    // setShowOtpPage(false);
    // handleOpenProfileModal(); // Open the profile modal
  };
  const handleCloseProfileModal = () => {
    setShowLoginPage(true);
    setShowOtpPage(false);
    setShowRegistrationPage(false);
    setShowEmployeRegistrationPage(false);
    setVideoStreamingOpen(false);
    setShowProfileModal(false);
    setShowJobSeekerProfileModal(false);
  };

  const login = (phone) => {
    setPhoneNumber(phone);
    setShowLoginPage(false);
    setShowOtpPage(true);
  };

  const verifyOtp = async (otp) => {
    try {
      const response = await fetch("https://dev.kamai.ai/employer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ZGVtby1jbGllbnQ6ZGVtby1zZWNyZXQ=",
        },
        body: JSON.stringify({
          username: `+91${phoneNumber}`,
          grant_type: "grant_otp",
          otp: otp,
          username_attr_type: "mobile_number",
        }),
      });

      // Get raw response text
      const rawText = await response.text();

      // Parse JSON only if the response has content
      const data = rawText ? JSON.parse(rawText) : {};
      // const access = data.access_token;

      // const data = await response.json(); // Parse the response JSON

      if (response.ok) {
        const { accessToken } = data; // Assuming the response contains the access token
        setAccessToken(accessToken); // Storing the token value
        toast.success("OTP verified successfully.");
        handleAuthPopupClose();
        return { accessToken, data }; // Return the access token and parsed data
      } else {
        const error = data.error || "Invalid OTP. Please try again.";
        toast.error(error);
        return data; // Return the parsed data with the error
      }
    } catch (error) {
      toast.error("Error verifying OTP. Please try again.");
      return { error: "Network error or invalid response." }; // Return an error object
    }
  };

  const JobSeekerLogin = (phone) => {
    setPhoneNumber(phone);
    setShowJobSeekerLoginPage(false);
    setShowJobSeekerOtpPage(true);
  };

  const handleJobSeekerOtp = async (otp) => {
    // setShowJobSeekerOtpPage(true);

    try {
      const response = await fetch("https://dev.kamai.ai/jobseeker/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ZGVtby1jbGllbnQ6ZGVtby1zZWNyZXQ=",
        },
        body: JSON.stringify({
          username: `+91${phoneNumber}`,
          grant_type: "grant_otp",
          otp: otp,
          username_attr_type: "mobile_number",
        }),
      });

      const data = await response.json(); // Parse the response JSON
      console.log(response.ok);
      if (response.ok) {
        const { access_token } = data; // Assuming the response contains the access token
        setProfileToken(access_token); // Storing the token value
        console.log(data);
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("userType", "candidate");
        setUserType("candidate");
        setRegistrationAccessToken(data?.accessToken);
        toast.success("OTP verified successfully.");
        handleAuthPopupClose();
        return { access_token, data };
      } else {
        const error = data.error || "Invalid OTP. Please try again.";
        toast.error(error);
        return data; // Return the parsed data with the error
      }
    } catch (error) {
      console.log(error);
      toast.error("Error verifying OTP. Please try again.");
      return { error: "Network error or invalid response." }; // Return an error object
    }
  };

  const saveAndContinueRegistration = async () => {
    try {
      const response = await fetch(
        `https://dev.kamai.ai/jobseeker/333/personal-info`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${registrationAccessToken}`,
          },
          body: JSON.stringify(userInfo),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setShowRegistrationPage(false);
        setShowEmployeRegistrationPage(false);
        setVideoStreamingOpen(true);
      } else {
        // const error = (await response.json()).error || "Failed to update personal information.";
        toast.error(error);
      }
    } catch (error) {
      toast.error("Failed to update personal information");
    }
  };

  const completeVideoRecording = () => {
    setVideoStreamingOpen(false);
    handleCloseProfileModal();
    window.location.href = "/JobseekerJobListPage";
    // navigate('/JobseekerJobListPage')
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("id", orgId);
    formData.append("companyName", "CODEFUSIONAI LIMITED");
    formData.append("location", "COLCHESTER");
    formData.append("locality", "ECHELON WALK");
    formData.append("orgType", "corporate");
    formData.append("mobileNumber", `+91${phoneNumber}`);
    formData.append("email", "mallampatis36@gmail.com");
    formData.append("address", "UK");

    // Assuming profileUpdate.pancard is the file object
    formData.append("pancard", profileUpdate.pancard);
    formData.append("gst", profileUpdate.gst);
    // formData.append("profilePic", profileUpdate.profilePic);
    formData.append("companyLogo", profileUpdate.companyLogo);

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value instanceof File ? value.name : value}`);
    // }

    try {
      const updateProfile = await fetch(
        `https://dev.kamai.ai/employer/organization/${orgId}`,
        {
          method: "PUT",
          headers: {
            // 'Content-Type': 'multipart/form-data: boundary=1a2b3c4d5e6f7g8h',
            Authorization: `Bearer ${profileToken}`,
          },
          body: formData,
        }
      );
      if (updateProfile.ok) {
        navigate("/EmployerJobListPage");
        toast.success("Successfully Updated the profile.");
      } else {
        toast.error("Error updating the profile");
      }
    } catch (error) {
      toast.error("Error updating the profile");
    }
  };

  const fetchCompanyProfile = async () => {
    const companyProfileByOrgId = await fetch(
      `https://dev.kamai.ai/employer/organization/${orgId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${registrationAccessToken}`, // Use Bearer token
        },
      }
    );

    if (companyProfileByOrgId.ok) {
      const companyProfileData = await companyProfileByOrgId.json(); // Parse the Company Profile response
      setCompanyData(companyProfileData);
      setRegistrationAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userType", "employer");
      setUserType("employer");
      if (companyProfileData?.id === null) {
        navigate("/CompanyDetails");
        //navigate("/PostJobArea"); // Show company profile
      } else {
        //toast.success('Job posted successfully');
        navigate("/CompanyDetails"); // Show Company Profile page
      }
    } else {
      throw new Error("Failed to fetch Job Post.");
    }
  };

  const fetchJobList = async (
    page = 1,
    expMin,
    expMax,
    salaryMin,
    salaryMax,
    jobTitleId,
    locationId
  ) => {
    fetch(
      `https://dev.kamai.ai/employer/${orgId}/jobpost?page=${
        +page - 1
      }&size=10&sortBy=createdOn&sortDir=desc${
        expMin ? `&expMin=${expMin}` : ""
      }${expMax ? `&expMax=${expMax}` : ""}${
        salaryMin ? `&salaryMin=${salaryMin}` : ""
      }${salaryMax ? `&salaryMax=${salaryMax}` : ""}${
        jobTitleId ? `&jobTitleId=${jobTitleId}` : ""
      }${locationId ? `&locationId=${locationId}` : ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${profileToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setFilteredJobs(data))
      .catch((error) => {
        toast.error("Error In fetching Jobs");
      });
  };

  const fetchSavedJobs = async () => {
    try {
      const response = await fetch(
        `https://dev.kamai.ai/jobseeker/${jobseekerId}/savejobpost`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${profileToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSavedJobs(data);
      } else {
        toast.error("Failed to fetch saved jobs.");
      }
    } catch (error) {
      toast.error("Error fetching saved jobs.");
    }
  };
  const fetchAppliedJobs = async () => {
    try {
      const response = await fetch(
        `https://dev.kamai.ai/jobseeker/${jobseekerId}/apply-job`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${profileToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAppliedJobs(data);
      } else {
        toast.error("Failed to fetch saved jobs.");
      }
    } catch (error) {
      toast.error("Error fetching saved jobs.");
    }
  };

  const fetchCandidateList = async (
    page = 1,
    expMin,
    expMax,
    salaryMin,
    salaryMax,
    jobTitleId,
    locationId,
    genderId,
    skillIdList,
    languageIdList,
    qualificationId
  ) => {
    fetch(
      `https://dev.kamai.ai/jobseeker/search?page=${
        +page - 1
      }&size=10&sortBy=createdOn&sortDir=desc${
        expMin ? `&expMin=${expMin}` : ""
      }${expMax ? `&expMax=${expMax}` : ""}${
        salaryMin ? `&salaryMin=${salaryMin}` : ""
      }${salaryMax ? `&salaryMax=${salaryMax}` : ""}${
        genderId ? `&genderId=${decodeURIComponent(genderId)}` : ""
      }${skillIdList ? `&skillIdList=${decodeURIComponent(skillIdList)}` : ""}${
        languageIdList
          ? `&languageIdList=${decodeURIComponent(languageIdList)}`
          : ""
      }${qualificationId ? `&qualificationId=${qualificationId}` : ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${profileToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => {
        toast.error("Error In fetching candidates");
      });
  };

  const fetchCandidateResponse = async (
    jobId,
    page = 1,
    expMin,
    expMax,
    salaryMin,
    salaryMax,
    jobTitleId,
    locationId,
    genderId,
    skillIdList,
    languageIdList,
    qualificationId
  ) => {
    fetch(
      `https://dev.kamai.ai/employer/${orgId}/jobpost/${jobId}/applicants?page=${
        +page - 1
      }&size=10&sortBy=createdOn&sortDir=desc${
        expMin ? `&expMin=${expMin}` : ""
      }${expMax ? `&expMax=${expMax}` : ""}${
        salaryMin ? `&salaryMin=${salaryMin}` : ""
      }${salaryMax ? `&salaryMax=${salaryMax}` : ""}${
        genderId ? `&genderId=${decodeURIComponent(genderId)}` : ""
      }${skillIdList ? `&skillIdList=${decodeURIComponent(skillIdList)}` : ""}${
        languageIdList
          ? `&languageIdList=${decodeURIComponent(languageIdList)}`
          : ""
      }${qualificationId ? `&qualificationId=${qualificationId}` : ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${profileToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setCandidatesResponse(data))
      .catch((error) => {
        toast.error("Error In fetching candidates");
      });
  };
  const fetchCandidateJobList = async (
    page = 1,
    expMin,
    expMax,
    salaryMin,
    salaryMax,
    jobTitleId,
    locationId
  ) => {
    fetch(
      ` https://dev.kamai.ai/employer/jobpost/search?page=${
        +page - 1
      }&size=10&sortBy=createdOn&sortDir=desc${
        expMin ? `&expMin=${expMin}` : ""
      }${expMax ? `&expMax=${expMax}` : ""}${
        salaryMin ? `&salaryMin=${salaryMin}` : ""
      }${salaryMax ? `&salaryMax=${salaryMax}` : ""}${
        jobTitleId ? `&jobTitleId=${jobTitleId}` : ""
      }${locationId ? `&locationId=${locationId}` : ""}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => setCandidateJobs(data))
      .catch((error) => {
        toast.error("Error In fetching Jobs");
      });
  };

  const fetchNotifications = async () => {
    fetch(`https://dev.kamai.ai/message/stream?username=+919740895456`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${profileToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNotifications(data);
      })
      .catch((error) => {});
  };

  return (
    <JobContext.Provider
      value={{
        isFormOpen,
        isLoginModalOpen,
        handleOpenLoginModal,
        handleCloseLoginModal,
        handleOpenForm,
        handleCloseForm,
        isSticky,
        filteredJobs,
        candidateJobs,
        setFilteredJobs,
        setCandidateJobs,
        //filterJobsByTime,
        handleJobTimeSelect,
        showModal,
        handleCloseModal,
        handleOpenModal,
        handleJobTypeChange,
        filteredEmployer,
        selectedJobType,
        sidePanelOpen,
        handleOpen,
        handleClose,
        isAuthenticated,
        showLoginPage,
        showOtpPage,
        showRegistrationPage,
        setVideoStreamingOpen,
        videoStreamingOpen,
        phoneNumber,
        login,
        verifyOtp,
        completeVideoRecording,
        saveAndContinueRegistration,
        handleOpenProfileModal,
        handleOpenProfileCandidateModal,
        handleCloseProfileModal,
        showProfileModal,
        setIsAuthenticated,
        showEmployeRegistrationPage,
        userRole,
        JobSeekerLogin,
        handleJobSeekerOtp,
        showJobSeekerLoginPage,
        showJobSeekerOtpPage,
        showJobSeekerProfileModal,
        accessToken,
        registrationAccessToken,
        setRegistrationAccessToken,
        orgId,
        setOrgId,
        handleUpdateProfile,
        profileToken,
        setProfileToken,
        setProfileUpdate,
        profileUpdate,
        setProfileImage,
        setGst,
        companyData,
        setCompanyData,
        fetchCompanyProfile,
        jobPostingDetail,
        setJobPostingDetail,
        candidateDtls,
        setCandidateDtls,
        handleAuthPopupClose,
        jobDetails,
        setJobDetails,
        savedResponse,
        setSavedResponse,
        fetchJobList,
        fetchCandidateJobList,
        userType,
        setUserType,
        jobseekerId,
        setJobseekerId,
        fetchCandidateList,
        candidates,
        candidatesResponse,
        fetchCandidateResponse,
        fetchSavedJobs,
        savedJobs,
        fetchAppliedJobs,
        appliedJobs,
        notifications,
        fetchNotifications,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export { JobContext, JobContextProvider };
