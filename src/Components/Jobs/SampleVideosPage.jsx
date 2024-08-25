import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import ReactPlayer from "react-player";

const SampleVideosPage = () => {
  const [videoData, setVideoData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      name: "samplevideo1",
      url: "https://kamai-sample-videos.s3.ap-south-1.amazonaws.com/SampleVideo_1.mp4",
    },
    {
      name: "samplevideo2",
      url: "https://kamai-sample-videos.s3.ap-south-1.amazonaws.com/SampleVideo_.mp4",
    },
    {
      name: "samplevideo3",
      url: "https://kamai-sample-videos.s3.ap-south-1.amazonaws.com/SampleVideo.mp4",
    },
    {
      name: "samplevideo4",
      url: "https://kamai-sample-videos.s3.ap-south-1.amazonaws.com/SampleVide.mp4",
    },
    {
      name: "samplevideo5",
      url: "https://kamai-sample-videos.s3.ap-south-1.amazonaws.com/SampleVid.mp4",
    },
    {
      name: "samplevideo6",
      url: "https://kamai-sample-videos.s3.ap-south-1.amazonaws.com/SampleVi.mp4",
    },
  ];

  useEffect(() => {
    fetch("https://dev.kamai.ai/jobseeker/samplevideo")
      .then((response) => response.json())
      .then((data) => {
        setVideoData(data[0]);
        setSelectedVideo(data[0].url); // Set initial video to play
      })
      .catch((error) => {
        console.log("Error fetching the videos: ", error);
      });
  }, []);

  const handleVideoSelect = (url) => {
    setSelectedVideo(url);
  };

  return (
    <>
      <Header />
      <nav className="mb-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/9254/20d6/d716f3449581627c695d8af219752eb5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LfNO1XLb9KjqemQo9iFSqFcXUFTHj7~N2BVrz~V5iUtfjH7AAirpgRIjCRxg7KPAzRAvvclT8nFT3x30BcbNMESdx-v7h5QrDsLL0HkZLDKCHOYYdc2YRXA435cWYuzN9w-zEExsqKhLPV-CoL0hYQzkdI7fCnHyW87F~rdcnMIqVQFWLPMJeBBwKwTm1hBegmTJA9GyR-fNtPcMui7AMu0ru~~Oy7ZbaY7hQ8l0~~ycm0Y0aWnVwZ2rObNIf6jmAOmXclsapcZ1toruDIWhIuXvz7uYhNpAt14fTHOgGiVPDT3cMg-50d2lPUrB-MTVHRye8OJO~XBy1eNBmtK6iA__"
          alt="Logo"
          className="w-52 h-24 p-4"
        />
      </nav>

      <div className="flex flex-wrap justify-center">
        {/* Left Half: Video List Section */}
        <div className="w-full md:w-1/4 p-3 border-r border-gray-300 h-screen overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Video List</h2>
          <div className="grid grid-cols-1 gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className={` ${
                  video.url === selectedVideo
                    ? "bg-[#130160] text-white"
                    : "bg-white"
                }  rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ${
                  selectedVideo === video.url ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => handleVideoSelect(video.url)}
              >
                <h2 className="text-lg font-semibold mb-2 hover-text-black">
                  {video.name}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Right Half: Video Player Section */}
        <div className="w-full md:w-3/4 p-4">
          {/* Video Player */}
          <div className="mb-6">
            {selectedVideo ? (
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h5 className="text-xl font-semibold mb-4">
                  {videoData ? videoData.header1 : "Selected Video"}
                </h5>
                <div className="flex justify-center">
                  <ReactPlayer
                    url={selectedVideo}
                    controls
                    className="rounded-lg overflow-hidden"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h1>Loading...</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleVideosPage;
