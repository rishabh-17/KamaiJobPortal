import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { JobContext } from "../../../Context/JobContext";
import { toast } from "react-toastify";

const ListJobsJobseeker = () => {
  const { filteredJobs, registrationAccessToken, setSavedResponse } =
    useContext(JobContext);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  console.log("Filtered jobs data in candidate :: ",currentJobs);
  const handleClick = async () => {
    try {
      const response = await fetch(
        `http://k8s-developm-ingressa-1c98111f81-862727769.ap-south-1.elb.amazonaws.com/employer/200/jobpost/11`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${registrationAccessToken}`,
          },
        }
      );
      const data = await response.json();
      console.log("Response from List job page :- ", data);
      setSavedResponse(data);
      if (response.ok) {
        toast.success("Successfully fetched the deatils.");
        navigate("/candidateJobDetailsPage");
      } else {
        toast.error("Failed to fetch the deatils");
      }
    } catch (error) {
      toast.error("Error fetching the job details");
    }
  };

  return (
    <div className="jm-browse-list-wrap jm-job-layout-2">
      <div className="row">
        {/* {filteredJobs?.slice(0, 10).map((job) => { */}
        {currentJobs?.map((job) => {
          //  const initialLetter = job.workMode.charAt(0);
          const initialLetter = job.workMode;

          return (
            <div className="col-12" key={job.jobId}>
              <div className="eachBox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex" }}>
                    <div className="list-jobs-img">
                      <Link
                        to="/jobDetailsPage"
                        style={{ margin: 0, padding: 0 }}
                      >
                        <img src={job.imgSrc} alt="" />
                      </Link>
                    </div>
                    <div style={{ margin: 0, padding: 0, width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h3
                          // style={{ margin: 0, padding: 0, display: 'flex' }}
                          >
                            <Link
                              to="#"
                              style={{
                                fontSize: "16px",
                                margin: 0,
                                padding: 0,
                              }}
                            >
                              {job.jobTitle}
                            </Link>
                            <br />
                            <Link to="#">ID:- {job.jobId}</Link>
                          </h3>
                        </div>
                        <div style={{ paddingRight: "15px" }}>
                          <button
                            onClick={handleClick}
                            className="jm-theme-btn jm-transparent-btn"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                      <p style={{ margin: 0, padding: 0 }}>
                        <Link
                          to="/jobDetailsPage"
                          style={{
                            color: "rgb(140, 133, 148)",
                            fontSize: "12px",
                            margin: 0,
                            padding: 0,
                          }}
                        >
                          {job.location}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="under-job-desc">
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          margin: 0,
                          padding: 0,
                          color: "rgb(140, 133, 148)",
                        }}
                      >
                        {" "}
                        <LocationOnIcon />
                        <span style={{ paddingLeft: "2px" }}>
                          {" "}
                          {job.location}
                        </span>
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          margin: 0,
                          padding: 0,
                          color: "rgb(140, 133, 148)",
                          marginLeft: "5px",
                          marginTop: "5px",
                        }}
                      >
                        <PaymentsIcon />
                        <span style={{ paddingLeft: "5px" }}>
                          Rs.{job.salaryMin} - Rs.{job.salaryMax}
                        </span>
                      </p>
                      <div style={{ display: "flex" }}>
                        <div
                          className="job-time-boxes"
                          style={{ display: "flex" }}
                        >
                          <div style={{ paddingRight: "5px", display: "flex" }}>
                            <CorporateFareIcon />
                          </div>
                          <div>
                            <p style={{ fontSize: "12px" }}>
                              {" "}
                              Work from Office
                            </p>
                          </div>
                        </div>
                        <div
                          className="job-time-boxes"
                          style={{ display: "flex", marginLeft: "5px" }}
                        >
                          <div className="job-time-circle">{initialLetter}</div>
                          <div>
                            <p style={{ fontSize: "12px" }}> {job.workMode}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        <div className="col-12">
          <div className="jm-pagination mb-40 mt-10 text-center">
            <Link
              to="#"
              className="jm-pagination-btn"
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            >
              <i className="fa-thin fa-arrow-left"></i>
            </Link>
            <Link
              to="#"
              className={`jm-pagination-btn ${
                currentPage === 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </Link>
            <Link
              to="#"
              className={`jm-pagination-btn ${
                currentPage === 2 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </Link>
            <Link
              to="#"
              className="jm-pagination-btn"
              onClick={() => currentPage < 2 && setCurrentPage(currentPage + 1)}
            >
              <i className="fa-thin fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListJobsJobseeker;
