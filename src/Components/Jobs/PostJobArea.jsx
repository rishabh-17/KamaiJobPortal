import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import Select from "react-select";
import skills from "../../SearchData/skills.json";
import jobTitles from "../../SearchData/job-title.json";
import education from "../../SearchData/qualification.json";
import location from "../../SearchData/location.json";
import locality from "../../SearchData/locality.json";
import language from "../../SearchData/language.json";

const PostJobArea = () => {
  const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState([]);
  // const [jobTitleId, setJobTitleId] = useState(1);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDisablePeople, setJobDisablePeople] = useState();
  const [jobType, setJobType] = useState("");
  // const [jobLocationId, setJobLocationId] = useState(1);
  const [jobLocation, setJobLocation] = useState("");
  const [jobLocality, setJobLocality] = useState("");
  // const [jobLocalityId, setJobLocalityId] = useState("");
  const [jobVacancies, setJobVacancies] = useState();
  const [minSalary, setMinSalary] = useState();
  const [maxSalary, setMaxSalary] = useState();
  const [jobDescription, setJobDescription] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [workTimings, setWorkTimings] = useState("");
  const [qualification, setQualification] = useState("");
  const [languages, setLanguages] = useState([]);
  const [minExperience, setMinExperience] = useState();
  const [maxExperience, setMaxExperience] = useState();
  const [gender, setGender] = useState();
  const [benefits, setBenefits] = useState("");
  const [jobSkills, setJobSkills] = useState([]);

  const { registrationAccessToken, profileToken } = useContext(JobContext);
  const { orgId } = useContext(JobContext);
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLangauge, setSelectedLangauge] = useState([]);
  const [selectedJobTitles, setSelectedJobTitles] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState([]);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    console.log("onsubmit");
    const postJobRequest = await fetch(
      `https://dev.kamai.ai/employer/${orgId}/jobpost`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${profileToken}`, //`Bearer ${access_token}`, // Use Bearer token
        },
        body: JSON.stringify({
          jobTitleId: selectedJobTitles.value,
          jobTitle: selectedJobTitles.name,
          locationId: selectedLocation.value,
          location: selectedLocation.name,
          localityId: selectedLocality.value,
          locality: selectedLocality.name,
          workMode: "WFO",
          jobDescription: jobDescription,
          shiftType: "Regular",
          workTimings: workTimings,
          premiumPayType: "No",
          employmentType: jobType,
          expMin: parseInt(minExperience),
          expMax: parseInt(maxExperience),
          salaryMin: parseInt(minSalary),
          salaryMax: parseInt(maxSalary),
          genderId: parseInt(gender),
          languageId: selectedLangauge.value,
          benefits: benefits,
          skillSet: selectedSkills,
          languages: selectedLangauge,
          contactNumber: "+91" + mobileNumber,
          numberOpenings: parseInt(jobVacancies),
          disabilityId: parseInt(jobDisablePeople),
          organizationId: parseInt(`${orgId}`),
          active: true,
          createdBy: parseInt(localStorage.getItem("userId")),
        }),
      }
    );

    if (postJobRequest.ok) {
      const jobPost = postJobRequest.json(); // Parse the user details response
      if (jobPost?.jobRole === null) {
        navigate("/videostreaming");
        //navigate("/PostJobArea"); // Show registration page
      } else {
        toast.success("Job posted successfully");
        navigate("/EmployerJobListPage"); // Show job list page
      }
    } else {
      throw new Error("Failed to fetch Job Post.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    // if (
    //   !jobRole ||
    //   !jobDisablePeople ||
    //   !jobType ||
    //   !jobLocation ||
    //   !jobLocality ||
    //   !jobVacancies ||
    //   !expectedSalary ||
    //   !jobDescription ||
    //   !qualification ||
    //   !languages ||
    //   !experience
    // ) {
    //   toast.error('Please fill all the required fields');
    //   return;
    // }

    if (mobileNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    // Handle form submission
    // Add your logic to submit the form data

    // Reset form fields
    setJobRole("");
    setJobDisablePeople("");
    setJobType("");
    setJobLocation("");
    setJobLocality("");
    setJobVacancies("");
    setMinExperience("");
    setMaxExperience;
    setJobDescription("");
    setMobileNumber("");
    setWorkTimings("");
    setQualification("");
    setLanguages("");
    setMinSalary("");
    setMaxSalary;
    setGender("");
    setBenefits("");
    setJobSkills("");

    // const handlePostJob = async (e) => {

    //   const postJobRequest = await fetch(
    //     `https://dev.kamai.ai/employer/197/jobpost`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${access_token}`, // Use Bearer token
    //       },
    //     }
    //   );
    //   if (postJobRequest.ok) {
    //     const jobPost = await postJobRequest.json(); // Parse the user details response
    //     console.log("handlePostJob JSON data",jobPost);
    //     if (jobPost?.jobRole === null) {
    //       toast.success('Job posted successfully');
    //       navigate("/videostreaming");
    //       navigate("/jobListPage");
    //       //navigate("/PostJobArea"); // Show registration page
    //     } else {
    //       navigate("/PostJobArea");
    //        // Show job list page
    //     }
    //   } else {
    //     throw new Error("Failed to fetch Job Post.");
    //   }
    // };
    // toast.success('Job posted successfully');
    // navigate("/videostreaming");
  };

  const handleEducationChange = (selectedOptions) => {
    setSelectedEducation(selectedOptions);
  };

  const handleLangaugeChange = (selectedOptions) => {
    setSelectedLangauge(selectedOptions);
  };
  const handleSkillsChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };
  const handleJobTitlesChange = (selectedOptions) => {
    setSelectedJobTitles(selectedOptions);
  };
  const handleLocationChange = (selectedOptions) => {
    setSelectedLocation(selectedOptions);
  };
  const filteredLocalities = locality.filter(
    (i) => i.city_id === selectedLocation.value
  );
  const handleLocalityChange = (selectedOptions) => {
    setSelectedLocality(selectedOptions);
  };

  return (
    <>
      <section className="p-6 bg-gray-100 text-gray-900">
        <form
          noValidate=""
          action=""
          className="container grid grid-cols-2 mx-auto "
        >
          <fieldset className=" p-6 rounded-md shadow-sm bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Job Title
                </label>
                <Select
                  value={selectedJobTitles}
                  onChange={handleJobTitlesChange}
                  options={jobTitles?.map((job) => ({
                    value: job.id,
                    label: job.name,
                  }))}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  placeholder="Eg: Driver, Plumber, Bartender"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Job Type
                </label>
                <select
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  name="jobType"
                  id="jobType"
                  defaultValue={"DEFAULT"}
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Select type of employment
                  </option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Vacancies *
                </label>
                <input
                  type="text"
                  placeholder="Enter number of open positions. Eg: 3,5"
                  value={jobVacancies}
                  onChange={(e) => setJobVacancies(e.target.value)}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  type="checkbox"
                  className="mx-2"
                  onChange={(e) => {
                    setJobDisablePeople(e.target.checked ? "0" : "1");
                  }}
                />
                <label>Job for Disabled People? *</label>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                  Location
                </label>
                <Select
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  options={location?.map((i) => ({
                    value: i.id,
                    label: i.city,
                  }))}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  placeholder="Enter work location. Eg: Hyderabad"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="city" className="text-sm">
                  Locality *
                </label>
                <Select
                  value={selectedLocality}
                  onChange={handleLocalityChange}
                  options={filteredLocalities?.map((i) => ({
                    value: i.id,
                    label: i.location,
                  }))}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  placeholder="Enter work locality. Eg: Jubilee Hills"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="state" className="text-sm">
                  Minimum salary
                </label>
                <input
                  type="text"
                  placeholder="Minimum Salary"
                  value={minSalary}
                  onChange={(e) => setMinSalary(e.target.value)}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="zip" className="text-sm">
                  Maximum salary
                </label>

                <input
                  type="text"
                  placeholder="Maximum Salary"
                  value={maxSalary}
                  onChange={(e) => setMaxSalary(e.target.value)}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="description" className="text-sm">
                  Job Description *
                </label>
                <textarea
                  placeholder="Write a brief about the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows="6"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className=" p-6 rounded-md shadow-sm bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Qualification
                </label>
                <Select
                  value={selectedEducation}
                  onChange={handleEducationChange}
                  options={education?.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Website
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label>Skills *</label>
                <Select
                  isMulti
                  value={selectedSkills}
                  onChange={handleSkillsChange}
                  options={skills?.map((i) => ({
                    value: i.id,
                    label: i.skill,
                  }))}
                  placeholder="Type to search for skills"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label>Minimum Experience *</label>
                <input
                  type="number"
                  placeholder="Minimum Experience"
                  value={minExperience}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  onChange={(e) => setMinExperience(e.target.value)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label>Maximum Experience *</label>
                <input
                  type="number"
                  placeholder="Maximum Experience"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  value={maxExperience}
                  onChange={(e) => setMaxExperience(e.target.value)}
                />
              </div>
              <div className="col-span-full  sm:col-span-3">
                <label>Languages *</label>
                <Select
                  isMulti
                  value={selectedLangauge}
                  onChange={handleLangaugeChange}
                  options={language?.map((lang) => ({
                    value: lang.id,
                    label: lang.language,
                  }))}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  placeholder="Select languages needed for this job"
                />
              </div>

              <div className="col-span-full  sm:col-span-3">
                <label className="form-label">Gender</label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="1"
                    checked={gender === "Male"}
                    onChange={handleGenderChange}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="2"
                    checked={gender === "Female"}
                    onChange={handleGenderChange}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="other"
                    value="3"
                    checked={gender === "Other"}
                    onChange={handleGenderChange}
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full ">
              <div className="col-span-full sm:col-span-3">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Candidates will call on this number."
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label>Work Timings</label>
                <input
                  type="text"
                  placeholder="Enter timings eg. 9am - 5pm"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  value={workTimings}
                  onChange={(e) => setWorkTimings(e.target.value)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label>Benefits</label>
                <input
                  type="text"
                  placeholder="Eg. Medical Insurance, PF etc."
                  value={benefits}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  onChange={(e) => setBenefits(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
          <div className="jm-post-job-wrapper mb-40 ">
            <div className="row">
              <div className="col-xl-6">
                <div className="jm-info-buttons mt-25 align-items-center">
                  <button
                    type="submit"
                    className="jm-post-job-btn jm-theme-btn"
                    style={{ float: "right" }}
                  >
                    Create video JD
                  </button>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="jm-info-buttons mt-25 align-items-center">
                  <button
                    onClick={handleOnSubmit}
                    className="jm-post-job-btn jm-theme-btn"
                  >
                    Post without video JD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default PostJobArea;
