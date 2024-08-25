import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import { toast } from "react-toastify";
import Select from "react-select";
import skills from "../../SearchData/skills.json";
import jobTitles from "../../SearchData/job-title.json";
import education from "../../SearchData/qualification.json";
import location from "../../SearchData/location.json";
import locality from "../../SearchData/locality.json";
import language from "../../SearchData/language.json";

const SingleJobDetails = () => {
  const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState([]);
  const { registrationAccessToken, orgId, phoneNumber, jobDetails } =
    useContext(JobContext);

  const [jobTitle, setJobTitle] = useState(jobDetails?.jobTitle || "");
  const [jobDisablePeople, setJobDisablePeople] = useState(
    jobDetails?.disabilityId || "1"
  );
  const [jobType, setJobType] = useState(
    jobDetails?.employmentType || "Full Time"
  );
  const [jobLocation, setJobLocation] = useState(jobDetails?.location || "");
  const [jobLocality, setJobLocality] = useState(jobDetails?.locality || "");
  const [jobVacancies, setJobVacancies] = useState(
    jobDetails?.numberOpenings || ""
  );
  const [minSalary, setMinSalary] = useState(jobDetails?.salaryMin || "");
  const [maxSalary, setMaxSalary] = useState(jobDetails?.salaryMax || "");
  const [jobDescription, setJobDescription] = useState(
    jobDetails?.jobDescription || ""
  );
  const [mobileNumber, setMobileNumber] = useState(
    jobDetails?.contactNumber || phoneNumber || ""
  );
  const [workTimings, setWorkTimings] = useState(jobDetails?.workTimings || "");
  const [qualification, setQualification] = useState(
    jobDetails?.qualificationId || []
  );
  const [languages, setLanguages] = useState(jobDetails?.languages || []);
  const [minExperience, setMinExperience] = useState(jobDetails?.expMin || "");
  const [maxExperience, setMaxExperience] = useState(jobDetails?.expMax || "");
  const [gender, setGender] = useState(jobDetails?.genderId || "1");
  const [benefits, setBenefits] = useState(jobDetails?.benefits || "");
  const [jobSkills, setJobSkills] = useState(jobDetails?.skillSet || []);

  const [selectedEducation, setSelectedEducation] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedJobTitles, setSelectedJobTitles] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState([]);
  const handleEducationChange = (selectedOptions) => {
    setSelectedEducation(selectedOptions);
  };

  const handleLangaugeChange = (selectedOptions) => {
    setSelectedLanguage(selectedOptions);
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

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  useEffect(() => {
    if (jobDetails) {
      const job =
        jobTitles.find((job) => job.name === jobDetails.jobTitle) || null;

      const myskill = skills
        ?.filter((skill) => {
          let flag = false;
          jobDetails.skillSet.forEach((skillId) => {
            if (+skillId.skillId === +skill.id) {
              flag = true;
            }
          });
          return flag;
        })
        .map((skill) => ({ value: skill?.id, label: skill?.skill }));

      setSelectedJobTitles({
        value: job.id,
        label: job.name,
      });
      const mylocation = location?.find(
        (loc) => loc.city === jobDetails.location
      );
      const myQualification = education.find(
        (qual) => qual.id === jobDetails.qualificationId
      );
      const myLocality = locality.find(
        (local) => local.location === jobDetails.locality
      );
      setSelectedEducation({
        value: myQualification.id,
        label: myQualification.name,
      });
      setSelectedSkills(myskill);
      // setSelectedLanguage(
      //   language.filter((lang) => jobDetails.languages.includes(lang.id))
      // );
      setSelectedLocation({
        value: mylocation.id,
        label: mylocation.city,
      });
      setSelectedLocality({
        value: myLocality.id,
        label: myLocality.location,
      });
    }
  }, [jobDetails]);

  const updateJobDetails = async () => {
    try {
      const response = await fetch(
        `https://dev.kamai.ai/employer/${orgId}/jobpost/${jobDetails.jobId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${registrationAccessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jobTitleId: selectedJobTitles?.value || 1,
            jobTitle: jobTitle,
            locationId: selectedLocation?.value || 1,
            location: jobLocation,
            localityId: selectedLocality?.value || 1,
            locality: jobLocality,
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
            languageId: 1,
            benefits: benefits,
            skillSet: selectedSkills.map((skill) => ({
              skillTypeId: 1,
              skillId: skill.value,
              skillName: skill.label,
            })),
            languages: selectedLanguage.map((lang) => ({
              languageId: lang.value,
            })),
            contactNumber: "+91" + mobileNumber,
            numberOpenings: parseInt(jobVacancies),
            disabilityId: parseInt(jobDisablePeople),
            organizationId: parseInt(orgId),
            active: true,
            createdBy: parseInt(localStorage.getItem("userId")),
          }),
        }
      );

      if (response.ok) {
        toast.success("Updated Job Details successfully");
        navigate("/EmployerJobListPage");
      } else {
        toast.error("Failed to update job details");
      }
    } catch (error) {
      console.error("Error updating job details:", error);
      toast.error("Error updating job details");
    }
  };
  return (
    <div className="jm-post-job-area mt-24">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-center text-2xl font-bold mb-6 text-gray-800">
              Job Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Job Title *
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

              <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                  <label className="mb-2 text-gray-700 font-semibold">
                    Job Type *
                  </label>
                  <select
                    name="jobType"
                    id="jobType"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                  >
                    <option value="DEFAULT" disabled>
                      Select type of employment
                    </option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Location *
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

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
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

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Minimum Salary *
                </label>
                <input
                  type="text"
                  placeholder="Min. Salary"
                  value={minSalary}
                  onChange={(e) => setMinSalary(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Maximum Salary
                </label>
                <input
                  type="text"
                  placeholder="Max. Salary"
                  value={maxSalary}
                  onChange={(e) => setMaxSalary(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>

              <div className="col-span-2 flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Job Description *
                </label>
                <textarea
                  placeholder="Write a brief about the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full p-3 h-32 border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Candidates will call on this number."
                  value={mobileNumber}
                  onChange={(e) => setmobileNumber(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Work Timings
                </label>
                <input
                  type="text"
                  placeholder="Enter timings eg. 9am - 5pm"
                  value={workTimings}
                  onChange={(e) => setWorkTimings(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Qualification *
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

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Skills *
                </label>
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

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Minimum Experience *
                </label>
                <input
                  type="text"
                  placeholder="Minimum Experience"
                  value={minExperience}
                  onChange={(e) => setMinExperience(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Maximum Experience *
                </label>
                <input
                  type="text"
                  placeholder="Maximum Experience"
                  value={maxExperience}
                  onChange={(e) => setMaxExperience(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Gender
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-amber-500"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-amber-500"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-amber-500"
                      value="other"
                      checked={gender === "other"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="ml-2 text-gray-700">Other</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-semibold">
                  Benefits
                </label>
                <input
                  type="text"
                  placeholder="Enter benefits eg. PF, Bonus"
                  value={benefits}
                  onChange={(e) => setBenefits(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-amber-500 border-gray-300"
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mx-2"
                    onChange={(e) =>
                      setJobDisablePeople(e.target.checked ? "0" : "1")
                    }
                  />
                  <label className="text-gray-700 font-semibold">
                    Job for Disabled People? *
                  </label>
                </div>
              </div>

              <div className="col-span-2 flex justify-center mt-8">
                <button
                  type="button"
                  onClick={updateJobDetails}
                  className="bg-amber-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150 ease-in-out"
                >
                  Update Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobDetails;
