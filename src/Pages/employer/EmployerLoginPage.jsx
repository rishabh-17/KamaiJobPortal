/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState, useContext, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { JobContext } from "../../Context/JobContext";
import "react-toastify/dist/ReactToastify.css";

const EmployerLoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { login, setShowOtpPage } = useContext(JobContext);

  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleLogin = async () => {
    if (phoneNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const otpResponse = await fetch("https://dev.kamai.ai/employer/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginType: "MOBILE",
          username: `+91${phoneNumber}`,
        }),
      });

      if (otpResponse.ok) {
        setIsOtpSent(true);
        login(phoneNumber); // Trigger the login flow in context
        toast.success("OTP sent successfully!");
      } else {
        throw new Error("Failed to send OTP.");
      }
    } catch (error) {
      toast.error("Failed to send OTP.");
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && phoneNumber.length === 10) {
      handleLogin();
    }
  };

  // Effect to handle OTP page transition
  useEffect(() => {
    if (isOtpSent) {
      setShowOtpPage(true); // Show OTP page
    }
  }, [isOtpSent, setShowOtpPage]);

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row className="justify-content-center w-100">
          <div className="card p-2 rounded-3" style={{ border: "none" }}>
            <div className="card-body" style={{ marginTop: "-12px" }}>
              <h6
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  paddingBottom: "32px",
                }}
              >
                Enter your mobile number
              </h6>
              <div className="input-group input-group-lg mb-4">
                <h6
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "12px",
                    fontWeight: 600,
                  }}
                >
                  +91
                </h6>
                <input
                  type="text"
                  maxLength="10"
                  pattern="\d{10}"
                  value={phoneNumber}
                  onKeyDown={handleKeyPress}
                  onChange={handleChange}
                  placeholder="Eg: 9123456610"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  style={{
                    borderRadius: "4px",
                    width: "87%",
                    color: "rgba(0, 0, 0, 0.87)",
                    border: "1px solid silver",
                    padding: "8px",
                  }}
                />
              </div>
              <div
                style={{ color: "rgba(106, 106, 106, 0.5)", fontSize: "12px" }}
              >
                By continuing, you agree to the Apna's Terms of service and
                Privacy Policy
              </div>
              <div className="btn-box-jm">
                <Button
                  type="button"
                  onClick={handleLogin}
                  disabled={phoneNumber.length !== 10}
                  style={{
                    width: "100%",
                    display: "inherit",
                    background: "#f59300",
                    border: "none",
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default EmployerLoginPage;
