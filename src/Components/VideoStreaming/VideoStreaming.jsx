import { useContext, useState } from "react";
import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  styled,
} from "@mui/material";
import TabPanel from "./TabPanel";
import VideoRecorder from "./VideoRecorder";
import VideoReview from "./VideoReview";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { JobContext } from "../../Context/JobContext";
import { Nav } from 'react-bootstrap'

const CustomStepper = styled(Stepper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    "&.MuiStepper-root": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 4,
    },
  },
}));

const steps = [
  "Instructions",
  "Personal Details",
  "Education & Experience",
  "Skill Set",
  "Additional Information",
];

const VideoStreaming = () => {
  const { completeVideoRecording } = useContext(JobContext);
  const [activeStep, setActiveStep] = useState(0);
  const [videoURLs, setVideoURLs] = useState({
    video1: null,
    video2: null,
    video3: null,
  });
  const [play, setPlay] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setVideoURLs({
      video1: null,
      video2: null,
      video3: null,
    });
    setPlay(false);
  };

  const handleVideoUpload = (step, url) => {
    setVideoURLs((prevURLs) => ({
      ...prevURLs,
      [`video${step}`]: url,
    }));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleSubmit = () => {
    completeVideoRecording();
  };

  const handlePreview = () => {
    setPlay(true);
  };

  const getVideoURLs = () => {
    return Object.values(videoURLs).filter((url) => url !== null);
  };

  return (
    <>
      <Nav style={{backgroundColor: "#E8E7EA", marginBottom: "50px", height: '100px', /*backgroundImage: `url("../../public/assets/img/banner/3D image 03.jpg")`*/}}>
        <img src="../../public/assets/img/logo/kamai.png" style={{width: '180px', height: '120px', padding: '10px'}}/>
      </Nav>
    
      <Container>
        <CustomStepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} sx={{ cursor: "pointer" }}>
              <StepLabel onClick={() => handleStepChange(index)}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </CustomStepper>
        <Box>
          {activeStep === steps.length ? (
            <Box>
              <Typography color="customBlackText">All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          ) : (
            <Box>
              <TabPanel value={activeStep} index={0}>
                <Typography
                  variant="h6"
                  color="customBlackText"
                  sx={{ fontSize: { xs: "1rem" } }}>
                  Instructions
                </Typography>
                <Typography
                  color="customBlackText"
                  sx={{ fontSize: { xs: "0.8rem" } }}
                  style={{ height: "300px", overflowY: "auto", overflowX: "hidden",}}  
                >
                  Follow these instructions to record your video...

                  <span>
                    Step 1-Click start to begin the video resume <br /><br />
  
                    Step 2- Click start button to tell about yourself<br />
                      
                    (Maximum recording length: 30 seconds)<br /><br />
                      
                    Personal details full name, city, country, etc.<br /><br />
                      
                    eg: I am John Doe, I live in india
                      
                    Education Start with your highest qualification, Institute & location, Passing year, etc.<br /><br />
                      
                    eg: I have completed my Bachelors from Delhi<br /><br />
                      
                    Experience Total experience, Latest company, Designation, Tenure, etc.<br /><br />
                      
                    eg: I completed my Bachelors from DU, India and currently working in a startup with a experience of 5 years
                    Skills Lists the skills you have (technical or non- technical)<br /><br />
 
                    eg: I know HTML CSS, Python and very good with the communication and time management.<br /><br />
                    
                    Extra Information This is optional you can talk about anything which is relevant to your field<br /><br />
                    
                    eg: I love cooking and I like to try different methods each time to enhance my cooking skill Which also helps me to keep myself motivated
                  </span>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 2,
                  }}></Box>
              </TabPanel>
              <TabPanel value={activeStep} index={1}>
                <VideoRecorder onUpload={(url) => handleVideoUpload(1, url)} />
              </TabPanel>
              <TabPanel value={activeStep} index={2}>
                <VideoRecorder onUpload={(url) => handleVideoUpload(2, url)} />
              </TabPanel>
              <TabPanel value={activeStep} index={3}>
                <VideoRecorder onUpload={(url) => handleVideoUpload(3, url)} />
              </TabPanel>
              <TabPanel value={activeStep} index={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <VideoReview videoURLs={getVideoURLs()} play={play} />
                </Box>
              </TabPanel>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                  position: "relative",
                  top: {
                    xs: 0,
                    md: "-1rem",
                  },
                }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}>
                  <ChevronLeftIcon
                    sx={{
                      width: "2rem",
                      height: "2rem",
                    }}
                  />
                  <Typography
                    color="primary"
                    sx={{
                      display: { xs: "none", md: "block" },
                      ml: 1,
                      textTransform: "none",
                    }}>
                    Previous
                  </Typography>
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      right: { xs: "-3rem" },
                      textTransform: "none",
                      paddingBottom: { xs: 1 },
                    }}>
                    <>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handlePreview}
                        sx={{
                          mr: 1,
                          textTransform: "none",
                          "&.MuiButtonBase-root.MuiButton-root": {
                            padding: { xs: "5px 7px", md: "5px 12px" },
                            fontSize: { xs: "0.78rem", md: "1rem" },
                          },
                        }}>
                        Preview
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          textTransform: "none",
                          "&.MuiButtonBase-root.MuiButton-root": {
                            padding: { xs: "5px 7px", md: "5px 12px" },
                            fontSize: { xs: "0.78rem", md: "1rem" },
                          },
                        }}
                        onClick={handleSubmit}>
                        Submit
                      </Button>
                    </>
                  </Box>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={
                      activeStep === steps.length - 1 &&
                      !videoURLs.video1 &&
                      !videoURLs.video2 &&
                      !videoURLs.video3
                    }>
                    <Typography
                      color="primary"
                      sx={{
                        display: { xs: "none", md: "block" },
                        mr: 1,
                        textTransform: "none",
                      }}>
                      Next
                    </Typography>
                    <ChevronRightIcon
                      sx={{
                        width: "2rem",
                        height: "2rem",
                      }}
                    />
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default VideoStreaming;
