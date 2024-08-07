import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import MobileMenu from "./MobileMenu";

const SidePanel = () => {
  const { sidePanelOpen, handleClose } = useContext(JobContext);
  return (
    <>
      <div
        className={`jm-sidebar-info side-info ${
          sidePanelOpen ? "info-open" : ""
        }`}
        style={{ padding: "0px" }}
      >
        <div className="flex h-screen flex-col justify-between">
          <div className="px-4 py-6">
            <div className="flex justify-between items-center">
              <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                <Link to="/">
                  <img src="assets/img/logo/logowhite.png" alt="logo-img" />
                </Link>
              </span>
              <button
                className="jm-sidebar-close side-info-close"
                onClick={handleClose}
              >
                <i className="fal fa-times text-black"></i>
              </button>
            </div>
            <MobileMenu handleClose={handleClose} />
          </div>
          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="size-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">Eric Frusciante</strong>

                  <span> eric@frusciante.com </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas-overlay ${sidePanelOpen ? "overlay-open" : ""}`}
        onClick={handleClose}
      ></div>
    </>
  );
};

export default SidePanel;
