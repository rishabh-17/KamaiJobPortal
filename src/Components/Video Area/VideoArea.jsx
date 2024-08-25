import React, { useContext, useState } from "react";
import { JobContext } from "../../Context/JobContext";
import VideoModal from "../Modal/VideoModal";

const VideoArea = () => {
  const { handleOpenModal } = useContext(JobContext);
  const [type, setType] = useState("");
  return (
    <div className="jm-video-area">
      <div className="grid grid-cols-2">
        <div className=" p-0">
          <div className="jm-video-wrap bg-default">
            <div className="jm-video-icon mb-30">
              <div
                role="button"
                className="jm-play-btn"
                onClick={() => {
                  setType("candidate");
                  handleOpenModal();
                }}
              >
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="jm-video-text">
              <h2 className="title">Candidate</h2>
            </div>
          </div>
        </div>
        <div className=" p-0">
          <div className="jm-video-wrap2 bg-default">
            <div className="jm-video-icon mb-30">
              <div
                role="button"
                className="jm-play-btn"
                onClick={() => {
                  setType("employer");
                  handleOpenModal();
                }}
              >
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="jm-video-text">
              <h2 className="title">Employer</h2>
            </div>
          </div>
        </div>
      </div>
      <VideoModal type={type} />
    </div>
  );
};

export default VideoArea;
