import React from "react";
import MultiStep from "react-multistep";
import Header from "../Components/Header/Header";

const Details = () => {
  return (
    <div className="w-full mx-auto max-h-screen bg-white shadow-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-[#F59300] text-white text-center font-bold uppercase">
        Candidate Registration
      </div>
      <form
        className="grid grid-cols-2 gap-4 py-4 px-6"
        action=""
        method="POST"
      >
        <div className="mb-4">
          <label className="block text-[#130160] font-bold mb-2" for="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#130160] font-bold mb-2" for="name">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#130160] font-bold mb-2" for="phone">
            Are you a person with any disability? *
          </label>
          <div className="flex gap-2">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="html"
              >
                <input
                  name="disablity"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="html"
                />
                <span className="absolute text-[#F59300] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label className="mt-px font-light text-gray-700 cursor-pointer select-none">
                Yes
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="react"
              >
                <input
                  name="disablity"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="react"
                  checked
                />
                <span className="absolute text-[#F59300] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label className="mt-px font-light text-gray-700 cursor-pointer select-none">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-[#130160] font-bold mb-2" for="phone">
            Gender
          </label>
          <div className="flex gap-2">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="html"
              >
                <input
                  name="type"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="html"
                />
                <span className="absolute text-[#F59300] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label className="mt-px font-light text-gray-700 cursor-pointer select-none">
                Male
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="react"
              >
                <input
                  name="type"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="react"
                  checked
                />
                <span className="absolute text-[#F59300] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label className="mt-px font-light text-gray-700 cursor-pointer select-none">
                Female
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="react"
              >
                <input
                  name="type"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="react"
                  checked
                />
                <span className="absolute text-[#F59300] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label className="mt-px font-light text-gray-700 cursor-pointer select-none">
                Others
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 font-bold mb-2" for="date">
            Pick up to 5 jobs you are interested in
          </label>
          <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden w-full mx-auto font-[sans-serif]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-gray-600 mr-3 rotate-90"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search skills..."
              className="w-full outline-none bg-transparent text-gray-600 text-sm"
            />
          </div>
        </div>
        <div className="mb-4 col-span-2"></div>
      </form>
      <div className="flex items-center justify-center mb-4">
        <button
          className="bg-[#F59300] text-white py-2 px-16 rounded hover:bg-[#F59300] focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default function CandidateRegister() {
  const steps = [
    // { title: "StepOne", component: <StepOne /> },
    // { title: "StepTwo", component: <StepTwo /> },
    // { title: "StepThree", component: <StepThree /> },
    // { title: "StepFour", component: <StepFour /> },
  ];
  return (
    <div>
      {/* <Header /> */}
      <div className="grid grid-cols-2 max-h-screen overflow-hidden">
        <Details />
        <div>
          <img src="assets/img/banner/banner-21.png" />
        </div>
      </div>
      {/* <MultiStep steps={steps} /> */}
    </div>
  );
}
