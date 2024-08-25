import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import "react-toastify/dist/ReactToastify.css";

const EmployerRegistration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [emailUrl, setEmailUrl] = useState("");
  const [location, setLocation] = useState("");
  const [locality, setLocality] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const { handleUpdateProfile, profileUpdate, setProfileUpdate } =
    useContext(JobContext);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !emailUrl ||
      !location ||
      !locality ||
      !companyName ||
      !companyAddress ||
      !phoneNumber
    ) {
      toast.error("Please fill all the required fields");
      return;
    }

    handleUpdateProfile();
    // Reset form fields
    setName("");
    setEmailUrl("");
    setLocation("");
    setLocality("");
    setPhoneNumber("");
    setCompanyName("");
    setCompanyAddress("");
    setProfileImage(null);
    setCoverImage(null);
    toast.success("Registration submitted successfully");
    navigate("/EmployerJobListPage");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <img src="assets/img/banner/image.png" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center text-[#130160] mb-6">
              Employer Registration
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#F59300] focus:border-[#F59300]"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#F59300] focus:border-[#F59300]"
                    placeholder="Enter your email"
                    value={emailUrl}
                    onChange={(e) => setEmailUrl(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#F59300] focus:border-[#F59300]"
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Locality
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#F59300] focus:border-[#F59300]"
                    placeholder="Enter your locality"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#F59300] focus:border-[#F59300]"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#F59300] focus:border-[#F59300]"
                    placeholder="Enter your company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Address
                  </label>
                  <textarea
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#F59300] focus:border-[#F59300]"
                    placeholder="Enter your company address"
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Profile Image
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#F59300] file:text-white hover:file:bg-[#130160]"
                      onChange={handleProfileImageChange}
                    />
                    {profileImage && (
                      <img
                        src={profileImage}
                        alt="Profile Preview"
                        className="mt-4 w-32 h-32 object-cover rounded-md"
                      />
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cover Image
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#F59300] file:text-white hover:file:bg-[#130160]"
                      onChange={handleCoverImageChange}
                    />
                    {coverImage && (
                      <img
                        src={coverImage}
                        alt="Cover Preview"
                        className="mt-4 w-full h-40 object-cover rounded-md"
                      />
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gst
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#F59300] file:text-white hover:file:bg-[#130160]"
                      onChange={(e) =>
                        setProfileUpdate({
                          ...profileUpdate,
                          gst: e.target.files[0],
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Pan
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#F59300] file:text-white hover:file:bg-[#130160]"
                      onChange={(e) =>
                        setProfileUpdate({
                          ...profileUpdate,
                          pancard: e.target.files[0],
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#130160] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#F59300]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerRegistration;
