import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import { toast } from "react-toastify";
import SalaryFilter from "../Browse Jobs/SalaryFilter";
import GenderFilter from "../Browse Jobs/GenderFilter";
import JobTypeFilter from "../Browse Jobs/JobTypeFilter";
import ExperienceFilter from "../Browse Jobs/ExperienceFilter";
import JobCategoryFilter from "../Browse Jobs/JobCategoryFilter";
import QualificationFilter from "../Browse Jobs/QualificationFilter";
import LanguageFilter from "../Browse Jobs/LanguageFilter";
import SkillFilter from "../Browse Jobs/SkillFilter";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import jobTitles from "../../SearchData/job-title.json";
import loocations from "../../SearchData/location.json";
import { Modal } from "react-bootstrap";

const ListCandidates = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [selected, setSelected] = useState({
    id: 97,
    jobId: 294,
    jobseekerId: 573,
    jobseekerpO: {
      jobseekerId: 573,
      educationDetails: [
        {
          educationId: 31,
          jobseekerId: 573,
          degree: "10th",
          institution: "Sri Saraswathi Shishu Mandir",
          course: "",
          specialization: "",
          startDate: "2000-06-24T19:41:00",
          enpate: "2010-05-24T19:41:00",
          fullTime: true,
          partTime: false,
        },
      ],
      workExperience: [
        {
          experienceId: 61,
          jobseekerId: 573,
          jobTitle: "Plumber",
          companyName: "Utban Claps",
          startDate: "2023-06-24T19:45:00",
          enpate: "2024-08-01T19:45:00",
          currentEmployer: false,
          description: "Did plumbing work",
        },
      ],
      languages: [
        {
          id: 56,
          jobseekerId: 573,
          languageId: null,
          language: "Hindi,Telugu",
        },
      ],
      skills: [],
      fullName: "Rajesh Test",
      mobileNumber: "+912580258025",
      email: null,
      username: "+912580258025",
      experience: null,
      location: "Hyderabad",
      locationId: null,
      preferredJobRoles: [
        {
          preferredJobRoleId: 604,
          preferredJobRoleName: "Electrician",
        },
        {
          preferredJobRoleId: 600,
          preferredJobRoleName: "Truck driver",
        },
        {
          preferredJobRoleId: 601,
          preferredJobRoleName: "Plumber/pipeshifter",
        },
        {
          preferredJobRoleId: 603,
          preferredJobRoleName: "Delivery Boy",
        },
        {
          preferredJobRoleId: 602,
          preferredJobRoleName: "Telecaller",
        },
      ],
      jobseekerCertifications: [],
      jobRole: null,
      qualification: null,
      qualificationId: null,
      profileHeadline: null,
      keySkills: '["Delivery Boy","Plumber/pipeshifter"]',
      resumeKey: null,
      videoResumeKey:
        "https://qualifyde-chime-dev-v1.s3.amazonaws.com/video_resume/573/processed/combined.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240825T182600Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIA2CEHN5FADGGRLBX4%2F20240825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c72608073e61b9639f85ece305da581a59b86a415793a2e1fa1f24da76d5a743",
      profilePicKey:
        "https://kamai-jobseeker-docs.s3.ap-south-1.amazonaws.com/573/profile-pic/1000046141.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240825T182600Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIAXYKJTWOTRHAT6NES%2F20240825%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Expires=600&X-Amz-Signature=fe9f6e822893f34e76faaae76f7652b2401bb04ae0064e2b367f9781baab48f6",
      disability: false,
      gender: null,
      genderId: null,
    },
    createdOn: "2024-08-24T14:46:27",
    updatedOn: null,
    statusId: "1",
    name: "Rajesh Test",
    location: "Hyderabad",
    locationId: 0,
    qualification: null,
    qualificationId: 0,
    gender: null,
    genderId: 0,
    experience: null,
    languageList: "Hindi,Telugu",
  });
  const [page, setPage] = useState(1);
  const [paginationArray, setPaginationArray] = useState([]);
  const [openFilter, setOpenFilter] = useState(null);
  const [filters, setFilters] = useState({});
  const {
    candidatesResponse,
    orgId,
    setRegistrationAccessToken,
    setJobPostingDetail,
    profileToken,
    setJobDetails,
    fetchCandidateResponse,
  } = useContext(JobContext);

  // useEffect(() => {
  //   setSelected(candidatesResponse?.content?.[0]);
  // }, [candidatesResponse]);

  useEffect(() => {
    const expMin = searchParams.get("expMin");
    const expMax = searchParams.get("expMax");
    const salaryMin = searchParams.get("salaryMin");
    const salaryMax = searchParams.get("salaryMax");
    const jobTitleId = searchParams.get("jobTitleId");
    const locationId = searchParams.get("locationId");
    const genderId = searchParams.get("genderId");
    const skillIdList = searchParams.get("skillIdList");
    const languageIdList = searchParams.get("languageIdList");
    const qualificationId = searchParams.get("qualificationId");
    fetchCandidateResponse(
      jobId,
      page,
      expMin,
      expMax,
      salaryMin,
      salaryMax,
      jobTitleId,
      locationId,
      genderId,
      skillIdList,
      languageIdList,
      qualificationId
    );
  }, [searchParams]);

  useEffect(() => {
    if (page - 2 > 0 && page + 2 <= candidatesResponse?.totalPages) {
      setPaginationArray(Array.from({ length: 5 }, (v, k) => k + page - 2));
    } else if (page - 2 <= 0 && page + 2 <= candidatesResponse?.totalPages) {
      setPaginationArray(Array.from({ length: 5 }, (v, k) => k + 1));
    } else if (page - 2 > 0 && page + 2 > candidatesResponse?.totalPages) {
      setPaginationArray(
        Array.from(
          { length: 5 },
          (v, k) => candidatesResponse?.totalPages - 4 + k
        )
      );
    } else if (page - 2 <= 0 && page + 2 > candidatesResponse?.totalPages) {
      setPaginationArray(
        Array.from(
          { length: 5 },
          (v, k) => candidatesResponse?.totalPages - 3 + k
        )
      );
    }
  }, [page, candidatesResponse]);

  function formatDate(date) {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }

  const editClick = async (jobId) => {
    try {
      const jobDetails = await fetch(
        `https://dev.kamai.ai/employer/${orgId}/jobpost/${jobId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${profileToken}`, // Use Bearer token
          },
        }
      );
      if (jobDetails.ok) {
        const details = await jobDetails.json();
        setJobDetails(details);
        setRegistrationAccessToken(profileToken);

        if (details?.id === null) {
          navigate("/ListCandidates");
        } else {
          toast.success("Fetching Applicants list...");
          navigate("/jobDetailsPage/" + jobId); // Show Candidate List page
        }
      } else {
        throw new Error("Failed to fetch Applicants list");
      }
    } catch (error) {
      toast.error("Failed to fetch job details:", error);
    }
  };

  const handleJobClick = (job) => {
    setSelected(job);
  };

  const calculateTimeDifference = (dateTime) => {
    const currentDate = new Date();
    const givenDate = new Date(dateTime);
    const timeDifference = currentDate.getTime() - givenDate.getTime();
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (timeDifference < hour) {
      return Math.floor(timeDifference / minute) + " minutes ago";
    } else if (timeDifference < day) {
      return Math.floor(timeDifference / hour) + " hours ago";
    } else if (timeDifference < 30 * day) {
      return Math.floor(timeDifference / day) + " days ago";
    } else {
      const days = Math.floor(timeDifference / day);
      return days + (days > 30 ? "+" : "") + " months ago";
    }
  };

  const handleApplyFilters = (filters) => {
    const existingFilters = searchParams;
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        existingFilters.set(key, filters[key]);
      } else {
        existingFilters.delete(key);
      }
    });
    setSearchParams(existingFilters);

    setPage(1);
    setOpenFilter(null);
  };

  const handleFilterClick = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleShowVideo = (url) => {
    setVideoUrl(url);
    setShowVideoModal(true);
  };

  return (
    <>
      <div className="mx-5 sm:mx-24 min-h-screen mb-12 pt-6">
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="flex gap-2">
            <Select
              className="h-12 w-full cursor-text rounded-md "
              placeholder="Job Title"
              options={jobTitles?.map((job) => ({
                value: job.id,
                label: job.name,
              }))}
              onChange={(i) => handleApplyFilters({ jobTitleId: i.value })}
            />
            <Select
              className="h-12 w-full cursor-text rounded-md "
              placeholder="Location"
              options={loocations?.map((job) => ({
                value: job.id,
                label: job.city,
              }))}
              onChange={(i) => handleApplyFilters({ locationId: i.value })}
            />
          </div>
          <div className="col-span-2 flex flex-wrap gap-2 w-full">
            {[
              "Salary",
              "Qualification",
              "Experience",
              "Language",
              "Gender",
              "Skills",
            ].map((filter) => (
              <div key={filter} className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hipen">
                  <summary
                    className="flex cursor-pointer rounded-full px-2 items-center gap-2 border border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                    onClick={() => handleFilterClick(filter)}
                  >
                    <span className="text-sm font-medium p-2">{filter}</span>
                    <span
                      className={`transition ${
                        openFilter === filter && "-rotate-180"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWiph="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>
                </details>
                <div
                  className={`z-50 absolute start-0 top-auto mt-2 ${
                    openFilter === filter ? "block" : "hidden"
                  }`}
                >
                  <div className="w-96 rounded border border-gray-200 bg-white">
                    {filter === "Salary" && (
                      <SalaryFilter onApply={handleApplyFilters} />
                    )}
                    {filter === "Qualification" && (
                      <QualificationFilter onApply={handleApplyFilters} />
                    )}
                    {filter === "Experience" && (
                      <ExperienceFilter onApply={handleApplyFilters} />
                    )}
                    {filter === "Language" && (
                      <LanguageFilter onApply={handleApplyFilters} />
                    )}
                    {filter === "Gender" && (
                      <GenderFilter onApply={handleApplyFilters} />
                    )}
                    {filter === "Skills" && (
                      <SkillFilter onApply={handleApplyFilters} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-2" />
        {candidatesResponse?.content?.length ? (
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 sm:col-span-1 flex flex-col gap-4 h-[600px] overflow-auto">
              {candidatesResponse?.content?.map((candidate) => (
                <div
                  key={candidate.jobseekerId}
                  onClick={() => setSelected(candidate)}
                >
                  <a
                    href="#"
                    className={`relative block overflow-hipen rounded-lg p-4 sm:p-6 lg:p-8 ${
                      selected?.jobseekerId === candidate.jobseekerId
                        ? "border border-black"
                        : "border border-gray-100"
                    }`}
                  >
                    {selected?.jobseekerId === candidate.jobseekerId && (
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-amber-300 via-orange-500 to-blue-800"></span>
                    )}

                    <div className="sm:flex sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                          {candidate.name}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-gray-600">
                          {candidate.location}
                        </p>
                      </div>

                      <div className="hipen sm:block sm:shrink-0">
                        <img
                          alt=""
                          src={
                            candidate.profilePicKey
                              ? `path/to/profilePics/${candidate.profilePicKey}`
                              : "default-profile-pic.png"
                          }
                          className="size-16 rounded-lg object-cover shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-pretty text-sm text-gray-500">
                        {candidate.profileHeadline ||
                          "No profile headline available"}
                      </p>
                    </div>

                    <dl className="mt-6 flex gap-4 sm:gap-6">
                      <div className="flex flex-col-reverse">
                        <p className="text-xs text-gray-500">
                          {candidate.email || "No email provided"}
                        </p>
                      </div>

                      <div className="flex flex-col-reverse">
                        <p className="text-xs text-gray-500">
                          {candidate.mobileNumber}
                        </p>
                      </div>
                    </dl>
                  </a>
                </div>
              ))}

              <ol className="flex justify-center gap-1 text-xs font-medium">
                <li>
                  <a
                    href="#"
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenop"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenop"
                      />
                    </svg>
                  </a>
                </li>

                {paginationArray?.map((i) => (
                  <li
                    className={
                      page === i
                        ? "block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                        : "block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    }
                    onClick={() => setPage(i)}
                  >
                    {i}
                  </li>
                ))}

                <li>
                  <a
                    href="#"
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenop"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenop"
                      />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>

            <div className="hipen sm:block col-span-2">
              {selected && (
                <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                  <div className="flex items-start w-full sm:gap-8">
                    {selected?.jobseekerpO?.profilePicKey ? (
                      <img
                        src={selected?.jobseekerpO?.profilePicKey}
                        className="h-20 w-20 rounded-full"
                        alt="Profile Picture"
                      />
                    ) : (
                      <div
                        className="hipen sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-amber-500"
                        aria-hipen="true"
                      >
                        <div className="flex items-center gap-1">
                          <span className="h-8 w-0.5 rounded-full bg-amber-500"></span>
                          <span className="h-6 w-0.5 rounded-full bg-amber-500"></span>
                          <span className="h-4 w-0.5 rounded-full bg-amber-500"></span>
                          <span className="h-6 w-0.5 rounded-full bg-amber-500"></span>
                          <span className="h-8 w-0.5 rounded-full bg-amber-500"></span>
                        </div>
                      </div>
                    )}

                    <div className="w-full">
                      <h3 className="mt-4 text-lg font-medium sm:text-xl">
                        {selected.name}
                      </h3>
                      <p className="text-xs font-medium text-gray-500">
                        {selected.location}
                      </p>

                      <div className="flex justify-between w-full mt-4">
                        <div className="sm:flex sm:items-center sm:gap-2">
                          <div className="flex gap-1 text-gray-500">
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWiph="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <p className="text-xs font-medium">
                              {calculateTimeDifference(selected.createdOn)}
                            </p>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              handleShowVideo(
                                selected?.jobseekerpO?.videoResumeKey
                              );
                            }}
                            className="rounded bg-[#130160] mx-1 hover:bg-amber-500 px-4 py-1.5 text-md font-medium text-white"
                          >
                            Video CV
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="overflow-auto h-[400px]">
                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                      <a href="#" className="hover:underline">
                        Candidate Details
                      </a>
                    </h3>
                    <div className="flow-root mx-2">
                      <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <p className="font-medium text-gray-900">Full Name</p>
                          <p className="text-gray-700 sm:col-span-2">
                            {selected.name}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <p className="font-medium text-gray-900">Location</p>
                          <p className="text-gray-700 sm:col-span-2">
                            {selected.location}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <p className="font-medium text-gray-900">
                            Profile Headline
                          </p>
                          <p className="text-gray-700 sm:col-span-2">
                            {selected.profileHeadline ||
                              "No profile headline available"}
                          </p>
                        </div>

                        {/* Email */}
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-gray-700 sm:col-span-2">
                            {selected.email || "No email provided"}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <p className="font-medium text-gray-900">
                            Mobile Number
                          </p>
                          <p className="text-gray-700 sm:col-span-2">
                            {selected.mobileNumber}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <p className="font-medium text-gray-900">Languages</p>
                          <p className="text-gray-700 sm:col-span-2">
                            {selected.languageList}
                          </p>
                        </div>

                        {selected?.jobseekerpO?.educationDetails?.length >
                          0 && (
                          <>
                            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                              <p className="font-medium text-gray-900">
                                Education
                              </p>
                              <p className="text-gray-700 sm:col-span-2">
                                {selected?.jobseekerpO?.educationDetails.map(
                                  (education, index) => (
                                    <div key={index}>
                                      {education.degree} from{" "}
                                      {education.institution} (
                                      {new Date(
                                        education.startDate
                                      ).getFullYear()}{" "}
                                      -{" "}
                                      {new Date(education.enpate).getFullYear()}
                                      )
                                    </div>
                                  )
                                )}
                              </p>
                            </div>
                          </>
                        )}

                        {selected?.jobseekerpO?.workExperience?.length > 0 && (
                          <>
                            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                              <p className="font-medium text-gray-900">
                                Work Experience
                              </p>
                              <p className="text-gray-700 sm:col-span-2">
                                {selected?.jobseekerpO?.workExperience?.map(
                                  (experience, index) => (
                                    <div key={index}>
                                      {experience.jobTitle} at{" "}
                                      {experience.companyName} (
                                      {new Date(
                                        experience.startDate
                                      ).getFullYear()}{" "}
                                      -{" "}
                                      {new Date(
                                        experience.enpate
                                      ).getFullYear()}
                                      )
                                    </div>
                                  )
                                )}
                              </p>
                            </div>
                          </>
                        )}

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <p className="font-medium text-gray-900">
                            Preferred Job Roles
                          </p>
                          <p className="text-gray-700 sm:col-span-2">
                            {selected?.jobseekerpO?.preferredJobRoles
                              ?.map((role) => role.preferredJobRoleName)
                              ?.join(", ")}
                          </p>
                        </div>
                      </dl>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            No candidatesResponse available.
          </div>
        )}
      </div>
      <Modal
        show={showVideoModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setShowVideoModal(false)}
      >
        <Modal.Header closeButton>
          {" "}
          <Modal.Title id="contained-modal-title-vcenter">Video CV</Modal.Title>
        </Modal.Header>
        <video src={selected.videoUrl} className="m-2" controls></video>
      </Modal>
    </>
  );
};

export default ListCandidates;
