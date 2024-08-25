import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import { toast } from "react-toastify";

const CompanyDetails = () => {
  const navigate = useNavigate();
  const {
    registrationAccessToken,
    profileToken,
    orgId,
    companyData,
    phoneNumber,
  } = useContext(JobContext);

  const [companyName, setCompanyName] = useState(companyData?.companyName);
  const [location, setLocation] = useState(companyData?.location);
  const [locality, setLocality] = useState(companyData?.locality);
  const [recruiterName, setRecruiterName] = useState(
    companyData?.recruiterName
  );
  const [email, setEmail] = useState(companyData?.email);
  const [mobileNumber, setMobileNumber] = useState(companyData?.mobileNumber);
  const [companyAddress, setCompanyAddress] = useState(companyData?.address);
  const [website, setWebsite] = useState(companyData?.website);
  const [companyType, setCompanyType] = useState(companyData?.orgType);
  const [companyOverview, setCompanyOverview] = useState(
    companyData?.companyOverview
  );
  const [companyLogo, setCompanyLogo] = useState(
    companyData?.companyLogoAWSS3URL
  );
  const [coverPhoto, setCoverPhoto] = useState(companyData?.coverpicAWSS3URL);

  const saveCompanyDetails = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", `${orgId}`);
    formData.append("companyName", companyName);
    formData.append("location", location);
    formData.append("locality", locality);
    formData.append("recruiterName", recruiterName);
    formData.append("email", email);
    formData.append("mobileNumber", `+91${phoneNumber}`);
    formData.append("address", companyAddress);
    formData.append("website", website);
    formData.append("orgType", companyType);
    formData.append("companyOverview", companyOverview);
    formData.append("coverPhoto", coverPhoto);
    formData.append("companyLogo", companyLogo);

    try {
      const response = await fetch(
        `https://dev.kamai.ai/employer/organization/${orgId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${profileToken}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const jobPost = await response.json();
        if (jobPost?.jobRole === null) {
          toast.error("Error");
        } else {
          toast.success("Updated Company Profile successfully");
          window.location.href = "/EmployerJobListPage";
        }
      } else {
        throw new Error("Failed to fetch Job Post.");
      }
    } catch (error) {
      console.error("Error updating company details:", error);
      toast.error("An error occurred while updating.");
    }
  };

  return (
    <div className="container mx-auto py-10 mt-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-center text-2xl font-semibold text-[#130160] mb-6">
            Company Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Location
              </label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Locality
              </label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Recruiter's Name
              </label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Email ID
              </label>
              <input
                type="email"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Company Address
              </label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">Website</label>
              <input
                type="url"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Company Type
              </label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Company Overview
              </label>
              <textarea
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                rows="4"
                value={companyOverview}
                onChange={(e) => setCompanyOverview(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Update Profile Picture
              </label>
              <input
                type="file"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                onChange={(e) => setCompanyLogo(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#130160] mb-2">
                Update Cover Photo
              </label>
              <input
                type="file"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#130160]"
                onChange={(e) => setCoverPhoto(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 bg-[#130160] text-white rounded-full hover:bg-[#F59300] transition duration-300"
              onClick={saveCompanyDetails}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
