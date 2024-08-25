import React, { useState } from "react";
import MultiStep from "react-multistep";
import Header from "../Components/Header/Header";

const Details = ({ setVideoSection }) => {
  const [next, setNext] = useState(false);
  return next ? (
    <div className="w-full mx-auto max-h-screen bg-white shadow-lg overflow-hidden">
      <div className="text-2xl py-4 px-6  text-[#130160] text-center font-bold uppercase">
        Create Your Video Resume Now
      </div>
      <img src="assets/img/about/home-2-about-1.png" alt="" />
      <div className="flex items-center justify-evenly m-4">
        <button
          className="border-2 border-[#130160] hover:text-white hover:bg-[#130160] py-2 px-16 rounded text-[#130160] focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => setNext(true)}
        >
          Sample
        </button>
        <button
          className="border-2 hover:border-[#130160] hover:text-[#130160] py-2 px-16 rounded bg-[#130160] text-white focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => setVideoSection(true)}
        >
          Record
        </button>
      </div>
      <div className="text-center underline">skip</div>
    </div>
  ) : (
    <>
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
          <div className="mb-4 col-span-2 jm-latest-job-meta-wrapper">
            <a>HTML</a>
            <a>HTML</a>
            <a>HTML</a>
            <a>HTML</a>
            <a>HTML</a>
            <a>HTML</a>
            <a>HTML</a>
          </div>
        </form>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-[#F59300] text-white py-2 px-16 rounded hover:bg-[#F59300] focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => setNext(true)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const Instructions = () => {
  return (
    <div className="mb-4 mx-auto">
      <div className="mb-6">
        <h3 className="mb-2 ">Steps to record your video resume:</h3>
        <ul className="list-disc list-item ml-4">
          <li>Step 1 - Click next to begin the video resume.</li>
          <li>Step 2 - Click record to start recording the video.</li>
          <li>
            Step 3- After recording each segment, review it by clicking ( )
          </li>
          <li>Step 4- Click next to go to the next section</li>
          <li>
            Step 5- Once all videos are recorded, click on submit to upload your
            video resume.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-2 ">Tips for recording your resume:</h3>
        <ul className="list-disc list-item ml-4">
          <li>Start the video only once you are ready to record.</li>
          <li>Look at the camera at all times, do not look elsewhere.</li>
          <li>
            Use the hints provided in each section to complete your videos.
          </li>
        </ul>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mb-4">
        <h3>Personal Details - full name, city, country, education etc</h3>
        <p>
          Eg: Hi, I am John Doe. I live in Hyderabad, India. I have completed my
          Bachelor of Commerce from Osmania University, Hyderabad in the year
          2020.
        </p>
      </div>
      <div class="relative w-full min-w-[200px] h-80">
        <textarea
          class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
        ></textarea>
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Personal Details
        </label>
        <button className="absolute bottom-1 right-1/2 bg-[#130160] p-3 h-6 w-6 rounded-full flex justify-center items-center">
          <i class="fa-solid fa-play text-white"></i>
        </button>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mb-4">
        <h3>
          Experience - talk about your total experience, latest company,
          designation, tenure, etc
        </h3>
        <p>
          Eg: I am currently working with Zepto as a delivery agent. I started
          working here in June 2022. I am responsible for ensuring timely
          delivery of ordered items to our customers. Prior to this I was
          working with Swiggy as a delivery partner from March 2020 to May 2022.
          I looked after delivering ordered food to our customers within a
          well-defined time period.
        </p>
      </div>
      <div class="relative w-full min-w-[200px] h-80">
        <textarea
          class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
        ></textarea>
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Experience
        </label>
        <button className="absolute bottom-1 right-1/2 bg-[#130160] p-3 h-6 w-6 rounded-full flex justify-center items-center">
          <i class="fa-solid fa-play text-white"></i>
        </button>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mb-4">
        <h3>
          Skills - mention all your skills, which make you standout as a
          candidate.
        </h3>
        <p>
          Eg: I have very strong communication skills. I am also very good at
          time management. I quickly adapt to new environments and can learn new
          skills easily.
        </p>
      </div>
      <div class="relative w-full min-w-[200px] h-80">
        <textarea
          class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
        ></textarea>
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Skills
        </label>
        <button className="absolute bottom-1 right-1/2 bg-[#130160] p-3 h-6 w-6 rounded-full flex justify-center items-center">
          <i class="fa-solid fa-play text-white"></i>
        </button>
      </div>
    </div>
  );
};

const Extra = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mb-4">
        <h3>
          Extra Information - This is optional, you can speak about anything
          which might add value to your profile.
        </h3>
        <p>
          Eg: I love cooking and I like to try different methods each time to
          enhance my cooking skill, this also helps me stay motivated.
        </p>
      </div>
      <div class="relative w-full min-w-[200px] h-80">
        <textarea
          class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
        ></textarea>
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Extra Info
        </label>
        <button className="absolute bottom-1 right-1/2 bg-[#130160] p-3 h-6 w-6 rounded-full flex justify-center items-center">
          <i class="fa-solid fa-play text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default function CandidateRegister() {
  const [videoSection, setVideoSection] = useState(false);
  const steps = [
    { title: "Instructions", component: <Instructions /> },
    { title: "Personal Details", component: <Education /> },
    { title: "Experience", component: <Experience /> },
    { title: "Skill Set", component: <Skills /> },
    { title: "Extra", component: <Extra /> },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 max-h-screen overflow-hidden">
        {videoSection ? (
          <div className="w-11/12 mx-auto">
            <MultiStep
              steps={steps}
              stepCustomStyle={{ color: "#130160" }}
              prevButton={{
                title: "Back",
                style: {
                  background: "#130160",
                  color: "white",
                  borderRadius: "5px",
                  padding: "10px 50px",
                  marginRight: "10px",
                  marginLeft: "30%",
                  marginTop: "10px",
                },
              }}
              nextButton={{
                title: "Next",
                style: {
                  background: "#F59300",
                  color: "white",
                  borderRadius: "5px",
                  padding: "10px 50px",
                  marginRight: "10px",
                  marginTop: "10px",
                },
              }}
            />
          </div>
        ) : (
          <Details setVideoSection={setVideoSection} />
        )}
        <div>
          <img src="assets/img/banner/banner-21.png" />
        </div>
      </div>
    </div>
  );
}
