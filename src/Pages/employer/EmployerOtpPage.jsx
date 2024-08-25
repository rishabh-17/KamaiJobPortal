/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { JobContext } from "../../Context/JobContext";

const OTPInput = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const value = element.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input box if value is not empty
    if (value !== "" && index < length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    // Notify parent component about the OTP change
    onChange(newOtp.join(""));
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <div className="d-flex justify-content-center mt-20">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          className="form-control m-1 text-center border-2"
          maxLength="1"
          id={`otp-${index}`}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{ width: "40px", height: "35px", fontSize: "18px" }}
        />
      ))}
    </div>
  );
};

const EmployerOtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [otpTimeLeft, setOtpTimeLeft] = useState(30);

  const {
    verifyOtp,
    phoneNumber,
    accessToken,
    setProfileToken,
    setFilteredJobs,
    setOrgId,
    setCompanyData,
    setUserType,
  } = useContext(JobContext);

  useEffect(() => {
    let timer;
    if (otpTimeLeft > 0) {
      timer = setInterval(() => {
        setOtpTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [otpTimeLeft]);

  const handleOtpChange = async (value) => {
    if (/^\d*$/.test(value) && value.length === 4) {
      setOtp(value);
      try {
        const loginResponse = await verifyOtp(value);

        if (loginResponse?.data) {
          const accessToken = loginResponse?.data?.access_token; // Extract the access token from the response
          setProfileToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("userType", "employer");
          setUserType("employer");
          const userDetailsResponse = await fetch(
            `https://dev.kamai.ai/employer/organization?username=+91${phoneNumber}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`, // Use Bearer token
              },
            }
          );

          if (userDetailsResponse.ok) {
            const userDetails = await userDetailsResponse.json(); // Parse the user details response
            const organizationId = userDetails?.id; //Extracting the Organization ID
            setOrgId(organizationId);
            localStorage.setItem("organizationId", organizationId);
            localStorage.setItem("userId", userDetails?.userId);
            localStorage.setItem(
              "companyLogo",
              userDetails?.companyLogoAWSS3URL
            );
            try {
              const companyProfileByOrgId = await fetch(
                `https://dev.kamai.ai/employer/organization/${organizationId}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Use Bearer token
                  },
                }
              );

              if (companyProfileByOrgId.ok) {
                const companyProfileData = await companyProfileByOrgId.json(); // Parse the Company Profile response

                setCompanyData(companyProfileData);
              } else {
                throw new Error("Failed to fetch Company Profile.");
              }
            } catch (error) {
              toast.error("Error Fetching the Company Profile");
            }

            if (userDetails?.companyName === null) {
              navigate("/employerRegistrationPage"); // Show registration page
            } else {
              try {
                const GetAllJobs = await fetch(
                  `https://dev.kamai.ai/employer/${organizationId}/jobpost`,
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${accessToken}`, // Use Bearer token
                    },
                  }
                );
                if (GetAllJobs.ok) {
                  const jobData = await GetAllJobs.json(); //Parse the job data
                  setFilteredJobs(jobData);
                  // localStorage.setItem("filteredJobs", JSON.stringify(jobData));
                  navigate("/EmployerJobListPage"); // Show job list page
                  toast.success("Successfully Fetch the Jobs");
                } else {
                  toast.error("Error Fetching the Jobs");
                  navigate("/EmployerJobListPage");
                }
              } catch (error) {
                toast.error("Error Fetching the GetAllJobs");
                navigate("/EmployerJobListPage");
              }
            }
          } else {
            throw new Error("Failed to fetch user details.");
          }
        } else {
          throw new Error("Invalid OTP.");
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const handleResendOtp = () => {
    setOtpTimeLeft(30);
    toast.success("OTP resent successfully");
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Row className="justify-content-center w-100" style={{ border: "none" }}>
        <div className="card rounded-5 otp-bg-color" style={{ border: "none" }}>
          <div className="card-body rounded-otp-form">
            <h6 className="card-title text-left fs-4">Enter OTP</h6>
            <span className="otp-paragraph" style={{ marginTop: "20px" }}>
              We have sent an OTP
            </span>
            <OTPInput length={4} onChange={handleOtpChange} />
            <span className="sec-left">
              {otpTimeLeft < 10 ? `0${otpTimeLeft}` : otpTimeLeft} sec left
            </span>
            <div
              className="d-flex justify-content-left align-items-left"
              style={{ display: "flex" }}
            >
              <span className="text-muted mt-50 didnt-receive-otp">
                Didn't get the OTP?
                <span
                  className="text-decoration-underline resend-otp"
                  style={{ paddingLeft: "12px" }}
                  onClick={handleResendOtp}
                >
                  Resend
                </span>
              </span>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default EmployerOtpPage;
