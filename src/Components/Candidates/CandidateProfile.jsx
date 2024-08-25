import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";

const CandidateProfile = () => {
  const { candidateDtls } = useContext(JobContext);

  function formatDate(date) {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }

  function formatDates(date) {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
      new Date(date)
    );
  }

  return (
    <div className="main-card mt-24">
      <div className="leftdiv">
        <div className="candidate-profile-item candidate-left">
          <div className="div-left">
            <div>
              <img
                src={localStorage.getItem("companyLogo")}
                height="100px"
                width="100px"
                className="candidate-image"
                alt="img"
              />
            </div>
          </div>
          <div className="div-right">
            <div className="candidate-name font-bold candidate-padding">
              {candidateDtls?.fullName}
            </div>
            <div className="candidate-profile-grey-data candidate-padding">
              {/* <img
                src="assets/img/logo/phone-icon.png"
                height="14px"
                width="14px"
                alt="img"
                className="candidate.padding"
              /> */}
              <div className="fa fa-phone" style={{fontSize:"12px"}}>
                {candidateDtls?.mobileNumber}
              </div>
              <div className="fa-location-dot" style={{fontSize:"14px"}}>
                {/* <img
                  src="assets/img/logo/location-icon.png"
                  height="14px"
                  width="14px"
                  alt="img"
                />&nbsp; */}
                {candidateDtls?.location}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightdiv">
        <div className="candidate-left candidate-left-width">
          <div className="candidate-name font-bold">Video Resume</div>
          <button className='btn-profile-org'>{candidateDtls?.videoResumeKey}</button>
        </div>
        <div className="candidate-left candidate-left-width">
          <div className="candidate-name font-bold">Kamai Resume</div>
          <button className='btn-profile-org'>{candidateDtls?.resumeName}</button>
        </div>

        <div className="candidate-left candidate-left-width">
          <div className="candidate-name font-bold">Text Resume</div>
          <button className='btn-profile-org' >{candidateDtls?.resumeName}</button>
        </div>

        <div className="candidate-left candidate-left-width">
          <div className="candidate-name font-bold">Experience</div>
          <div className="candidate-profile-data font-bold"> 
            {candidateDtls?.workExperience?.map((exp) =>{
              const initialLetter = exp?.workMode;
                return (
                  <div>
                    {exp?.jobTitle}
                    <div className="candidate-profile-data">{exp?.companyName}</div>
                    <div className="candidate-profile-grey-data">
                      {formatDate(exp?.startDate)} - {formatDate(exp?.endDate)}
                    </div>
                  </div>
                );}
              )
            }
          </div>
        </div>
        <div className="candidate-left candidate-left-width">
          <div className="candidate-name font-bold">Education</div>
          {candidateDtls?.educationDetails?.map((edu) => {
            const initialLetter = edu.workMode?.charAt(0);
            return (
            <>
                <div className="candidate-profile-data font-bold">
                  {edu?.degree}
                </div>
                <div className="candidate-profile-data">{edu?.institution}</div>
                <div className="candidate-profile-grey-data">
                  {formatDates(edu?.startDate)}-{formatDates(edu?.endDate)} | {!edu.fullTime ? edu.partTime : edu.fullTime}
                </div>
            </> 
            );
          })}
        </div>
        <div className="candidate-left candidate-left-width">
          <div className="candidate-name font-bold">Gender</div>
          <div className="candidate-profile-data">
            {candidateDtls?.gender}
          </div>
        </div>
        <div className="candidate-left candidate-left-width">
          <div className="candidate-name font-bold">Skills</div>
          <div className=" flex gap-2">
            {candidateDtls?.skills?.map((skill) => {
              const initialLetter = skill.workMode;
              return (
                <>
                  <span className="btn-profile-org px-2">
                    {skill?.skillName}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="candidate-left candidate-left-width">
          <div className="candidate-name font-bold">Languages</div>
            <div className=" flex gap-2">
            {candidateDtls?.educationDetails?.map((lang) => {
              const initialLetter = lang.workMode?.charAt(0);
              return (
                <>
                  {/* <div className='div-text-padd'>
                            <div>Languages</div>
                            <div><a href='#'>+</a></div>
                          </div> */}
                  <div>
                    <span className='btn-profile-org'>{lang?.language}</span>
                  </div>
                  {/* <button className='btn-profile' onClick='#'>Add Languages</button> */}
                </>
              );
            })}
            </div>  
        </div>
        <div className="candidate-left">
          <div className="candidate-name font-bold">Certificates</div>
          {candidateDtls?.jobseekerCertifications?.map((cert) => {
            const initialLetter = cert.workMode;
              return (
                <>
                  <button className="btn-profile-org"
                    onClick={() => {
                      {
                        cert.awsS3ObjectURL;
                      }
                    }}
                  >
                    {cert?.fileName}
                  </button>
                  &nbsp;
                  {/* <div className='candidate-profile-data'>Showcase your licenses, certificates, memberships, etc.</div> */}
                  {/* <button className='btn-profile' onClick='#'>Add Certification</button> */}
                </>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
