/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.min.css";
import "videojs-record/dist/css/videojs.record.css";
import RecordRTC from "recordrtc";
import "webrtc-adapter";
import "videojs-record";
import ReplayIcon from "@mui/icons-material/Replay";
import { Box, Container, Button, styled } from "@mui/material";

// eslint-disable-next-line no-unused-vars
const CustomButton = styled(Button)(({ theme }) => ({
  "&.MuiButtonBase-root.MuiButton-root": {
    borderRadius: "28px",
    padding: "4px 11px",
    [theme.breakpoints.down("sm")]: {
      padding: "4px 5px",
      fontSize: "0.75rem",
    },
  },
}));

const VideoContainer = styled("div")(() => ({
  width: "80vw",
  height: "55vh",
}));

const VideoRecorder = ({ onUpload }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const options = {
      controls: true,
      bigPlayButton: false,
      fluid: true,
      plugins: {
        record: {
          audio: true,
          video: true,
          maxLength: 30,
          debug: true,
        },
      },
    };

    if (videoRef.current) {
      playerRef.current = videojs(
        videoRef.current,
        options,
        function onPlayerReady() {
          const msg = `Using video.js ${
            videojs.VERSION
          } with videojs ${videojs.getPluginVersion("record")} and recordrtc ${
            RecordRTC.version
          }`;
          videojs.log(msg);
          document.querySelector(".vjs-icon-av-perm").click();
        }
      );

      playerRef.current.on("deviceError", () => {
        console.log("device error:", playerRef.current.deviceErrorCode);
      });

      playerRef.current.on("error", (element, error) => {
        console.error(error);
      });

      playerRef.current.on("startRecord", () => {
        console.log("started recording!");
      });

      playerRef.current.on("finishRecord", () => {
        // Get the recorded video URL
        const videoURL = URL.createObjectURL(playerRef.current.recordedData);
        console.log("finished recording: ", videoURL);

        // Call the onUpload callback with the video URL
        if (onUpload) {
          onUpload(videoURL);
        }

        // Update the video element with the recorded video
        if (videoRef.current) {
          videoRef.current.src = videoURL;
          // videoRef.current.controls = true; // Ensure controls are enabled
          videoRef.current.load(); // Load the video to update the controls
          // videoRef.current.pause(); // Pause the video to show the play icon
        }
        // Stop camera access after recording
        stopCamera();
      });
    }

    return () => {
      console.log("Component unmounted");
      if (playerRef.current) {
        console.log("Cleaning up player");

        // Pause the video
        if (!playerRef.current.paused()) {
          playerRef.current.pause();
        }

        // Stop the recording if it is in progress
        if (playerRef.current.record().isRecording()) {
          playerRef.current.record().stop();
        }

        // Stop camera access
        stopCamera();

        // Nullify the player reference
        playerRef.current = null;
      }
    };
  }, []);

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const handleRetake = () => {
    if (playerRef.current) {
      // Reset the recording and player state here if needed
      playerRef.current.record().reset();
      console.log("Retake initiated");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={2}>
        <Box sx={{ position: "relative" }}>
          <VideoContainer data-vjs-player>
            <video
              id="myVideo"
              ref={videoRef}
              className="video-js vjs-default-skin"
              playsInline
              controls
            ></video>
          </VideoContainer>
          <Box
            display="flex"
            justifyContent="center"
            position="absolute"
            top="10px"
            right={{ xs: "0.5rem", md: "0.5rem" }}
          >
            <CustomButton
              variant="contained"
              color="secondary"
              onClick={handleRetake}
            >
              <ReplayIcon
                sx={{
                  width: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                  height: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                }}
              />
              Retake
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default VideoRecorder;
