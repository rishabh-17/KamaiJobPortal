import React, { useContext, useState } from 'react';
import { Card, Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import VideoReview from '../Components/VideoStreaming/VideoReview';
import { toast } from 'react-toastify';
import { JobContext } from '../Context/JobContext';
// import './CandidateDetailsPage.css'
 
const CandidateJobDetailsPage = () => {
  const { registrationAccessToken, savedResponse } = useContext(JobContext);
  const [isApplied, setIsApplied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleReportClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmitReport = () => {
    // Logic to submit the report goes here
    toast.success("Report submitted successfully");
    handleModalClose();
  };
 
  const handleApply = async() => {
   
    try{
      const response = await fetch(`http://k8s-developm-ingressa-1c98111f81-862727769.ap-south-1.elb.amazonaws.com/employer/jobpost/${savedResponse.jobId}/apply`, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
          Authorization : `Bearer ${registrationAccessToken}`,
        },
        body: JSON.stringify({
          "jobId": 5,
          "jobseekerId":987654,
          "name": "Shekhar Raj",
          "location":"Hyderabad",
          "locationId":1,
          "qualification":"12th PASS",
          "qualificationId":2,
          "gender":"male",
          "gender_id":1,
          "experience":"3",
          "languageList":"Telugu, English",
          "statusId":1,
        })
      })
     
      if(response.ok){
        toast.success("Job Applied successfully");
        setIsApplied(true);
      }else{
        toast.error("Error, please try again");
      }
    }catch(error){
      toast.error("Error incountered while applying the job.");
    }
  }
 
  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-between mb-4">

          <Col>
            <Button
              style={{
                borderRadius: "10px",
                width: "250px",
                height: "50px",
                border: "1px solid black",
                fontWeight: "bold",
                fontSize: "larger"
              }}
            
            >
              Company Overview
            </Button>
          </Col>
          <Col className="text-right">
            <Button
              style={{
                backgroundColor: isApplied ? '#28a745' : '#F59300',
                borderRadius: "10px",
                width: "250px",
                height: "50px",
                fontWeight: "bold",
                color: "white",
                fontSize: "larger",
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                transform: isApplied ? 'scale(1.1)' : 'scale(1)',
              }}
              onClick={handleApply}  
              disabled={isApplied}
            >
              {isApplied ? 'Applied' : 'Easy Apply'}
            </Button>
          </Col>
        </Row>
      
        <Card className="mb-4">
          <Card.Body>
            <h5>Video Job Description</h5>
            <VideoReview />
          </Card.Body>
        </Card>
  
        <Card className="mb-4">
              <Card.Body className='d-flex flex-column'>
                  <Row className="mb-3">
                  <Col xs={6} className="d-flex align-items-center">
                      <img src=".././public/assets/img/logo/briefcase.png" alt="" style={{ width: "50px", height: "30px" }} />
                      <div className="ml-2">
                      <label>Vacancies</label>
                      <h5>{savedResponse.numberOpenings}</h5>
                      </div>
                  </Col>
                  <Col xs={6} className="d-flex align-items-center">
                      <img src=".././public/assets/img/logo/location-icon.png" alt="" style={{ width: "50px", height: "30px" }} />
                      <div className="ml-2">
                      <label>Location</label>
                      <h5>{savedResponse.location}</h5>
                      </div>
                  </Col>
                  </Row>
                  <Row className="mb-3">
                  <Col xs={6} className="d-flex align-items-center">
                      <img src=".././public/assets/img/logo/user.png" alt="" style={{ width: "50px", height: "30px" }} />
                      <div className="ml-2">
                      <label>Experience</label>
                      <h5>{savedResponse.expMin}</h5>
                      </div>
                  </Col>
                  <Col xs={6} className="d-flex align-items-center">
                      <img src=".././public/assets/img/logo/payroll.png" alt="" style={{ width: "50px", height: "30px" }} />
                      <div className="ml-2">
                      <label>Salary</label>
                      <h5>Rs. {savedResponse.salaryMin} - Rs. {savedResponse.salaryMax}</h5>
                      </div>
                  </Col>
                  </Row>
  
                  <Row className="mb-3">
                  <Col xs={6} className="d-flex align-items-center">
                      <img src=".././public/assets/img/logo/check.png" alt="" style={{ width: "50px", height: "30px" }} />
                      <div className="ml-2">
                      <label>Skills</label>
                      <h5>{savedResponse.skillSet.map(skill => skill.name).join(', ')}</h5>
                      </div>
                  </Col>
                  <Col xs={6} className="d-flex align-items-center">
                      <img src=".././public/assets/img/logo/time.png" alt="" style={{ width: "50px", height: "30px" }} />
                      <div className="ml-2">
                      <label>Work Timings</label>
                      <h5>{savedResponse.workTimings}</h5>
                      </div>
                  </Col>
                  </Row>
  
                  <Row className="mb-3">
                  <Col xs={6} className="d-flex align-items-center">
                      <img src=".././public/assets/img/logo/wheelchair.png" alt="" style={{ width: "50px", height: "30px" }} />
                      <div className="ml-2">
                      <label>For Person with Disability</label>
                      <h5>{savedResponse.disabilityId ? 'Yes' : 'No'}</h5>
                      </div>
                  </Col>
                  </Row>
              </Card.Body>
              <Card.Body>
                <Button onClick={handleReportClick}>
                  Report
                </Button>
              </Card.Body>
        </Card>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Report Issue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Check 
                type="checkbox" 
                label="Asking for Money" 
                name="askingForMoney"
              />
              <Form.Check 
                type="checkbox" 
                label="HR not picking up call" 
                name="hrNotPickingUpCall"
              />
              <Form.Check 
                type="checkbox" 
                label="Wrong Job description" 
                name="wrongJobDescription"
              />
              <Form.Check 
                type="checkbox" 
                label="Others" 
                name="others"
              />
              <Form.Group className="mt-3">
                <Form.Label>Any other problems?</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Write here..."
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmitReport}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <Card className="mb-4">
          <Card.Body className="contact-buttons">
              <Button className="contact-button call-button">
                <img src=".././public/assets/img/logo/phone.png" alt="" className="icon"/>
                Call</Button>
              <Button className="contact-button whatsapp-button">
              <img src=".././public/assets/img/logo/whatsapp.png" alt="" className="icon"/>
                Whatsapp</Button>
          </Card.Body>
        </Card> */}
  
        <Card className="mb-4">
          <Card.Body>
            <h5>Job Description</h5>
            <ul>
              <li>{savedResponse.jobDescription}</li>
            </ul>
          </Card.Body>
        </Card>
  
        <Card className="mb-4">
          <Card.Body>
            <h5>Additional Information</h5>
            <Row>
              <Col>
                <label>Job Type</label>
                <p>{savedResponse.employmentType}</p>
              </Col>
              <Col>
                <label>Qualification</label>
                <p>{savedResponse.qualificationId}</p>
              </Col>
              <Col>
                <label>Gender</label>
                <p>{savedResponse.genderId}</p>
              </Col>
              <Col>
                <label>Languages</label>
                <p>{savedResponse.languages.map(language => language.name).join(', ')}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
 
export default CandidateJobDetailsPage;