import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { JobContext } from "../../Context/JobContext";

const VideoModal = ({ type }) => {
  const { handleCloseModal, showModal } = useContext(JobContext);
  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
      <Modal.Body>
        {type === "candidate" ? (
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8pcvWIfJvvQ"
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8pcvWIfJvv"
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
