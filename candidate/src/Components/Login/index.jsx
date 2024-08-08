import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
function MyVerticallyCenteredModal(props) {
    const [value, setValue] = useState()
    const [otpStep, setOtpStep] = useState(false)
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        {
            otpStep ?
        }
      <Modal.Header className='border-0 rounded' closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='border-0'>
        {props.type} Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='font-semibold text-center text-lg mb-4'>Enter Your Mobile Number</h4>
        <PhoneInput
        className='border rounded h-10 px-3 mx-4'
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
      defaultCountry='IN'
      />
      <p className='text-sm px-4 my-4'>By continuing, you agree to the <span className='text-[#fc7303] hover:underline hover:text-[#fc7303] cursor-pointer'>KAMAI Terms</span> of service and Privacy Policy</p>
      <div className='px-4 w-full'><button className='w-full light-bg h-8 rounded'>Next</button></div>
      </Modal.Body>
    </Modal>
  );
}

function App({modalShow, setModalShow, type}) {

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        type={type}
      />
    </>
  );
}

export default App