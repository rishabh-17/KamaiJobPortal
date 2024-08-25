import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import { toast } from "react-toastify";
import SalaryFilter from "./SalaryFilter";
import JobTypeFilter from "./JobTypeFilter";
import ExperienceFilter from "./ExperienceFilter";
import JobCategoryFilter from "./JobCategoryFilter";
import SkillFilter from "./SkillFilter";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Select from "react-select";
import jobTitles from "../../SearchData/job-title.json";
import loocations from "../../SearchData/location.json";

const ListJobs = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState({});
  const [page, setPage] = useState(1);
  const [paginationArray, setPaginationArray] = useState([]);
  const [openFilter, setOpenFilter] = useState(null);
  const [filters, setFilters] = useState({
    salary: null,
    jobType: null,
    areaRange: null,
    category: null,
    tags: null,
  });
  const {
    filteredJobs,
    orgId,
    setRegistrationAccessToken,
    setJobPostingDetail,
    profileToken,
    setJobDetails,
    fetchJobList,
  } = useContext(JobContext);

  useEffect(() => {
    setSelected(filteredJobs?.content?.[0]);
  }, [filteredJobs]);

  useEffect(() => {
    const expMin = searchParams.get("expMin");
    const expMax = searchParams.get("expMax");
    const salaryMin = searchParams.get("salaryMin");
    const salaryMax = searchParams.get("salaryMax");
    const jobTitleId = searchParams.get("jobTitleId");
    const locationId = searchParams.get("locationId");
    fetchJobList(
      page,
      expMin,
      expMax,
      salaryMin,
      salaryMax,
      jobTitleId,
      locationId
    );
    if (page - 2 > 0 && page + 2 <= filteredJobs?.totalPages) {
      console.log(Array.from({ length: 5 }, (v, k) => k + page - 2));
    } else if (page - 2 <= 0 && page + 2 <= filteredJobs?.totalPages) {
      console.log(Array.from({ length: 5 }, (v, k) => k + 1));
    } else if (page - 2 > 0 && page + 2 > filteredJobs?.totalPages) {
      console.log(
        Array.from({ length: 5 }, (v, k) => filteredJobs?.totalPages - 4 + k)
      );
    } else if (page - 2 <= 0 && page + 2 > filteredJobs?.totalPages) {
      console.log(
        Array.from({ length: 5 }, (v, k) => filteredJobs?.totalPages - 3 + k)
      );
    }
  }, [page, searchParams]);

  function formatDate(date) {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }

  const responsesClick = async (jobId) => {
    navigate(`/candidateresponse/${jobId}`);
  };

  const editClick = async (jobId) => {
    try {
      const jobDetails = await fetch(
        `http://k8s-developm-ingressa-1c98111f81-862727769.ap-south-1.elb.amazonaws.com/employer/${orgId}/jobpost/${jobId}`,
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
          navigate("/ListJobs");
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

  return (
    <>
      <div className="mx-5 sm:mx-24 min-h-screen mb-12 mt-24 pt-6">
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
            {["Salary", "Job Type", "Experience", "Categories", "Skills"].map(
              (filter) => (
                <div key={filter} className="relative">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
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
                          strokeWidth="1.5"
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
                      {filter === "Job Type" && (
                        <JobTypeFilter onApply={handleApplyFilters} />
                      )}
                      {filter === "Experience" && (
                        <ExperienceFilter onApply={handleApplyFilters} />
                      )}
                      {filter === "Categories" && (
                        <JobCategoryFilter onApply={handleApplyFilters} />
                      )}
                      {filter === "Skills" && (
                        <SkillFilter onApply={handleApplyFilters} />
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <hr className="my-2" />
        {filteredJobs?.content?.length ? (
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 sm:col-span-1 flex flex-col gap-4 h-[600px] jobs-list  overflow-auto">
              {filteredJobs?.content?.map((job) => {
                const initialLetter = job?.workMode;
                return (
                  <div key={job.jobId} onClick={() => handleJobClick(job)}>
                    <a
                      href="#"
                      className={`relative block overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8 ${
                        selected?.jobId === job?.jobId
                          ? "border border-black"
                          : "border border-gray-100"
                      }`}
                    >
                      {selected?.jobId === job?.jobId && (
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r  from-amber-300 via-orange-500 to-blue-800"></span>
                      )}

                      <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {job.jobTitle}
                          </h3>

                          <p className="mt-1 text-xs font-medium text-gray-600">
                            By {job.companyName}
                          </p>
                        </div>

                        <div className="hidden sm:block sm:shrink-0">
                          <img
                            alt=""
                            src={job.imgSrc}
                            className="size-16 rounded-lg object-cover shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-pretty text-sm text-gray-500">
                          {job?.jobDescription}
                        </p>
                      </div>

                      <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                          <dd className="text-xs text-gray-500">
                            {job?.locality},{job?.location}
                          </dd>
                        </div>

                        <div className="flex flex-col-reverse">
                          <dd className="text-xs text-gray-500">
                            Rs.
                            {job.salaryMin} - Rs.{job.salaryMax}
                          </dd>
                        </div>
                      </dl>
                    </a>
                  </div>
                );
              })}

              <ol className="flex justify-center gap-1 text-xs font-medium">
                <li>
                  <a
                    href="#"
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                {Array.from({ length: filteredJobs?.totalPages }, (_, i) => (
                  <li
                    className={
                      page === i + 1
                        ? "block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                        : "block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    }
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
            <div className="hidden sm:block col-span-2">
              {selected && (
                <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                  <div className="flex items-start w-full sm:gap-8">
                    {selected?.companyLogo ? (
                      <img
                        src={selected?.companyLogo}
                        className="h-20 w-20"
                        alt=""
                      />
                    ) : (
                      <div
                        className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-amber-500"
                        aria-hidden="true"
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
                      {/* <strong className="rounded border mx-1 border-amber-500 bg-amber-500 px-3 py-1.5 text-[10px] font-medium text-white">
                    MNC
                  </strong>
                  <strong className="rounded border mx-1 border-amber-500 bg-amber-500 px-3 py-1.5 text-[10px] font-medium text-white">
                    Fortune
                  </strong>
                  <strong className="rounded border mx-1 border-amber-500 bg-amber-500 px-3 py-1.5 text-[10px] font-medium text-white">
                    Sales
                  </strong> */}

                      <h3 className="mt-4 text-lg font-medium sm:text-xl">
                        <a
                          href="#"
                          className="hover:underline"
                          onClick={() => editClick(selected.jobId)}
                          title="Edit"
                        >
                          {selected?.jobTitle}
                        </a>
                      </h3>
                      <div className="flex justify-between w-full">
                        <div className=" sm:flex sm:items-center sm:gap-2">
                          <div className="flex  gap-1 text-gray-500">
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
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>

                            <p className="text-xs font-medium">
                              {calculateTimeDifference(selected?.createdOn)}
                            </p>
                          </div>
                          <p className=" text-xs font-medium text-gray-500 sm:mt-0">
                            <span
                              href="#"
                              className="mx-3 underline hover:text-gray-700 text-indigo-800"
                            >
                              <i className="fa-thin fa-eye mx-1"></i> 232
                            </span>
                            <i className="fa-thin fa-paper-plane mx-1"></i>
                            <span
                              href="#"
                              className="underline hover:text-gray-700 text-indigo-800"
                            >
                              69
                            </span>
                          </p>
                        </div>
                        <div>
                          <button
                            onClick={() => responsesClick(selected.jobId)}
                            className="rounded bg-[#130160] mx-1 hover:bg-amber-500 px-4 py-1.5 text-md font-medium text-white"
                          >
                            Responses
                          </button>
                          <i className="fa-regular fa-bookmark fa-xl mx-4"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="overflow-auto h-[400px] ">
                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                      <a href="#" className="hover:underline">
                        {" "}
                        Job Details{" "}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">
                      {selected?.jobDescription}
                    </p>
                    <div className="flow-root mx-2">
                      <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Title</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.jobTitle}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Experience
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.expMin || 0} yrs -{" "}
                            {selected?.expMax || 0} yrs
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Location
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.locality}, {selected?.location}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Salary</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            Rs. {selected?.salaryMin} - {selected?.salaryMax}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Employment Type
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.employmentType}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Benefits
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.benefits}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Openings
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.numberOpenings}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Shift</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.shiftType}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Skills</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.skillSet?.map((i) => (
                              <span> {i.skillName},</span>
                            ))}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Work Mode
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.workMode}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Timing</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selected?.workTimings}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                      <a href="#" className="hover:underline">
                        {" "}
                        Company Details{" "}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ipsam nulla amet voluptatum sit rerum, atque, quo culpa ut
                      necessitatibus eius suscipit eum accusamus, aperiam
                      voluptas exercitationem facere aliquid fuga. Sint. Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit. Vel
                      laboriosam fuga veritatis eligendi mollitia facilis minima
                      iusto officia pariatur, velit dolorum, commodi blanditiis
                      deserunt ex rem, saepe dolorem. Eligendi, id pariatur
                      mollitia reprehenderit repellendus dolorem, dolorum
                      repudiandae obcaecati nisi itaque vel voluptatibus? Quae
                      accusantium nulla, magnam quas possimus vel sunt.
                    </p>
                  </div>
                </article>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img
              src="https://cdn.vectorstock.com/i/500p/30/21/data-search-not-found-concept-vector-36073021.jpg"
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ListJobs;
