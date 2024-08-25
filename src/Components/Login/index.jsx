import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
function MyVerticallyCenteredModal(props) {
  const [value, setValue] = useState();
  const [OTP, setOTP] = useState("");
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      {props.otpStep ? (
        <>
          <Modal.Header className="border-0 rounded" closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="border-0"
            >
              {props.type} Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="font-semibold text-center text-lg mb-4">
              Enter OTP
            </h4>
            <section className="w-full mx-auto">
              <OTPInput
                inputClassName="otp-input"
                value={OTP}
                className="w-full mx-auto justify-center gap-[20px]"
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                secure
              />
              <ResendOTP
                onResendClick={() => console.log("Resend clicked")}
                style={{
                  maxWidth: "260px",
                  margin: "0 auto",
                  marginTop: "20px",
                }}
              />
            </section>
            <div className="px-4 mt-8 w-full">
              <button className="w-full light-bg h-12 rounded">Submit</button>
            </div>
          </Modal.Body>
        </>
      ) : (
        <>
          <Modal.Header className="border-0 rounded" closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="border-0"
            >
              {props.type} Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="font-semibold text-center text-lg mb-4">
              Enter Your Mobile Number
            </h4>
            <PhoneInput
              className="border rounded h-10 px-3 mx-4"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              defaultCountry="IN"
            />
            <p className="text-sm px-4 my-4">
              By continuing, you agree to the{" "}
              <span className="text-[#fc7303] hover:underline hover:text-[#fc7303] cursor-pointer">
                KAMAI Terms
              </span>{" "}
              of service and Privacy Policy
            </p>
            <div className="px-4 w-full">
              <button
                className="w-full light-bg h-12 rounded"
                onClick={() => props.setOtpStep(true)}
              >
                Next
              </button>
            </div>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}

function App({ modalShow, setModalShow, type, setOtpStep, otpStep }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        type={type}
        setOtpStep={setOtpStep}
        otpStep={otpStep}
      />
    </>
  );
}

export default App;
