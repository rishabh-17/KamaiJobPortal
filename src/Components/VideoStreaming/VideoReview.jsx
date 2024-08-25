/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { useRef, useState, useEffect } from "react";

const VideoReview = ({ videoURLs, play }) => {
  const videoRef = useRef(null);
  const [showPlayIcon, setShowPlayIcon] = useState(!play);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (play && videoRef.current) {
      videoRef.current.play();
      setShowPlayIcon(false);
    }
  }, [play, currentVideoIndex]);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleEnded = () => {
      if (currentVideoIndex < videoURLs.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      } else {
        setCurrentVideoIndex(0); // Loop back to the first video
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleEnded);
      }
    };
  }, [currentVideoIndex, videoURLs?.length]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayIcon(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setShowPlayIcon(true);
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {videoURLs?.length > 0 ? (
        <Box
          sx={{
            position: "relative",
            width: { sm: "100%", md: "95%" },
            height: "auto",
            overflow: "hidden",
          }}>
          <video
            ref={videoRef}
            src={videoURLs[currentVideoIndex]}
            width="100%"
            height="auto"
            controls
            loop={false}
            onPlay={() => setShowPlayIcon(false)}
            onPause={() => setShowPlayIcon(true)}
          />
          {showPlayIcon ? (
            <PlayCircleFilledIcon
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "4rem",
                height: "4rem",
                color: "rgba(255, 255, 255, 0.7)",
                cursor: "pointer",
                display: { xs: "none", md: "block" },
              }}
              onClick={handlePlay}
            />
          ) : (
            <PauseCircleFilledIcon
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "4rem",
                height: "4rem",
                color: "rgba(255, 255, 255, 0.7)",
                cursor: "pointer",
                display: { xs: "none", md: "block" },
              }}
              onClick={handlePause}
            />
          )}
        </Box>
      ) : (
        <Typography>No video recorded yet.</Typography>
      )}
    </Box>
  );
};

export default VideoReview;
