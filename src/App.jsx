import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import HomePage1 from "./Pages/HomePage1";
import JobPage from "./Pages/JobPage";
import CandidatePage from "./Pages/CandidatePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import BlogListPage from "./Pages/BlogListPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import ServicePage from "./Pages/ServicePage";
import ServiceDetailsPage from "./Pages/ServiceDetailsPage";
import ErrorPage from "./Pages/ErrorPage";
import ContactPage from "./Pages/ContactPage";
import CandidateListPage from "./Pages/CandidateListPage";
import CandidateDetailsPage from "./Pages/CandidateDetailsPage";
import HomePage2 from "./Pages/HomePage2";
import JobListPage from "./Pages/JobListPage";
import JobseekerJobListPage from "./Pages/jobseeker/JobseekerJobListPage";
import JobDetailsPage from "./Pages/JobDetailsPage";
import JobCategoryPage from "./Pages/JobCategoryPage";
import EmployerListPage from "./Pages/EmployerListPage";
import EmployerGridPage from "./Pages/EmployerGridPage";
import CompanyDetailsPage from "./Pages/CompanyDetailsPage";
import PostJobPage from "./Pages/PostJobPage";
import AddResumePage from "./Pages/AddResumePage";
import { useEffect } from "react";
import CandidateRegister from "./Pages/CandidateRegister";
import CandidateRegistrationPage from "./Pages/jobseeker/CandidateRegistrationPage";
import { ToastContainer } from "react-toastify";
import VideoStreaming from "./Components/VideoStreaming/VideoStreaming";
import EmployerRegister from "./Pages/EmployerRegister";
import AvatarSettings from "./Pages/AvatarSettings";
import EmployerRegistrationPage from "./Pages/employer/EmployerRegistrationPage";
import JobSeekerLogin from "./Pages/jobseeker/JobSeekerLogin";
import JobSeekerOtp from "./Pages/jobseeker/JobSeekerOtp";
import EmployerOtpPage from "./Pages/employer/EmployerOtpPage";
import EmployerLoginPage from "./Pages/employer/EmployerLoginPage";
import EmployerJobListPage from "./Pages/employer/EmployerJobListPage";
import Subscription from "./Pages/Subscription";
import CandidateJobDetailsPage from "./Pages/CandidateJobDetailsPage";
import SampleVideosPage from "./Components/Jobs/SampleVideosPage";
import SecurityAndPrivacyPage from "./Pages/SecurityAndPrivacyPage";
import FAQsPage from "./Pages/FAQsPage";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage";
import CandidateFeedbackPage from "./Pages/CandidateFeedbackpage";
import RefundPolicyPage from "./Pages/RefundPolicyPage";
import Layout from "./Components/Chatbot/Layout";
import AppliedJobsPage from "./Components/Browse Jobs/Jobseeker/AppliedJobsPage";
import SavedJobsPage from "./Components/Browse Jobs/Jobseeker/SavedJobsPage";
import PriceArea from "./Components/Price Area/PriceArea";
import CandidateProfilePage from "./Pages/CandidateProfilePage";
import PricingPlanPage from "./Pages/PricingPlanPage";
import CandidateResponsePage from "./Pages/CandidateResponsePage";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/homePage2" element={<HomePage2 />} />
          <Route path="/jobPage" element={<JobPage />} />
          <Route path="/jobListPage" element={<JobListPage />} />
          <Route
            path="/JobseekerJobListPage"
            element={<JobseekerJobListPage />}
          />
          <Route
            path="/EmployerJobListPage"
            element={<EmployerJobListPage />}
          />
          <Route path="/jobDetailsPage" element={<JobDetailsPage />} />
          <Route path="/jobDetailsPage/:id" element={<JobDetailsPage />} />
          <Route path="/jobCategoryPage" element={<JobCategoryPage />} />
          <Route path="/employerListPage" element={<EmployerListPage />} />
          <Route path="/employerGridPage" element={<EmployerGridPage />} />
          <Route path="/companyDetailsPage" element={<CompanyDetailsPage />} />
          <Route
            path="/companyDetailsPage/:id"
            element={<CompanyDetailsPage />}
          />
          <Route path="/postJobPage" element={<PostJobPage />} />
          <Route path="/addResumePage" element={<AddResumePage />} />
          <Route path="/SampleVideosPage" element={<SampleVideosPage />} />
          <Route path="/candidatePage" element={<CandidatePage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/blogPage" element={<BlogPage />} />
          <Route path="/blogListPage" element={<BlogListPage />} />
          <Route path="/blogDetailsPage" element={<BlogDetailsPage />} />
          <Route path="/servicePage" element={<ServicePage />} />
          <Route path="/serviceDetailsPage" element={<ServiceDetailsPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route
            path="/TermsAndConditionsPage"
            element={<TermsAndConditionsPage />}
          />
          <Route
            path="/SecurityAndPrivacyPage"
            element={<SecurityAndPrivacyPage />}
          />
          <Route path="/FAQsPage" element={<FAQsPage />} />
          <Route path="/candidateListPage" element={<CandidateListPage />} />
          <Route
            path="/candidateDetailsPage"
            element={<CandidateDetailsPage />}
          />
          <Route
            path="/candidateDetailsPage/:id"
            element={<CandidateDetailsPage />}
          />
          <Route path="/candidateRegister" element={<CandidateRegister />} />
          <Route path="/employerRegister" element={<EmployerRegister />} />
          <Route path="/AvatarSettings" element={<AvatarSettings />} />
          <Route path="/employerLoginPage" element={<EmployerLoginPage />} />
          <Route
            path="/employerRegistrationPage"
            element={<EmployerRegistrationPage />}
          />
          <Route
            path="/candidateRegistrationPage"
            element={<CandidateRegistrationPage />}
          />
          <Route path="/videostreaming" element={<VideoStreaming />} />
          <Route path="/employerOtpPage" element={<EmployerOtpPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/jobSeekerLogin" element={<JobSeekerLogin />} />
          <Route path="/jobSeekerOtp" element={<JobSeekerOtp />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/candidateJobDetailsPage"
            element={<CandidateJobDetailsPage />}
          />
          <Route
            path="/CandidateFeedbackPage"
            element={<CandidateFeedbackPage />}
          />
          <Route path="/RefundPolicyPage" element={<RefundPolicyPage />} />
          <Route path="/AppliedJobsPage" element={<AppliedJobsPage />} />
          <Route path="/SavedJobsPage" element={<SavedJobsPage />} />
          <Route
            path="/CandidateProfilePage"
            element={<CandidateProfilePage />}
          />
          <Route path="/PricingPlanPage" element={<PricingPlanPage />} />
          <Route
            path="/candidateresponse/:jobId"
            element={<CandidateResponsePage />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
