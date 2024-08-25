/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { JobContext } from "../../Context/JobContext";
import { toast } from "react-toastify";

const FeedbackArea = () => {
  const [suggestion, setSuggestion] = useState("");
  const [rating, setRating] = useState();
  const [followUp, setFollowUp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { profileToken, phoneNumber } = useContext(JobContext);

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    const feedbackData = {
      username: "+91" + phoneNumber,
      suggestion,
      rating,
      followUp,
    };

    try {
      const response = await fetch("https://dev.kamai.ai/admin/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${profileToken}`,
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmitSuccess(true);
        setSuggestion("");
        setRating("");
        setFollowUp("");
        toast.success("Feedback submitted successfully!");
      } else {
        toast.error(`Error submitting feedback: ${response.statusText}`);
        toast.error(`Status code: ${response.status}`);
      }
    } catch (error) {
      toast.error(`Uncaught error submitting feedback: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md py-3 px-3 sm:mx-auto">
      <div className="flex flex-col rounded-xl bg-slate-200 shadow-lg">
        <div className="px-12 py-5">
          <h2 className="whitespace-nowrap text-center font-semibold text-gray-800 sm:text-xl">
            Your opinion matters to us!
          </h2>
        </div>
        <div className="flex w-full flex-col items-center bg-[#fdfeff]">
          <div className="flex flex-col items-center space-y-3 py-6">
            <span className="text-lg font-medium text-gray-500">
              How was your experience?
            </span>
            <div className="flex space-x-3">
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value} onClick={() => handleRatingClick(value)}>
                  <svg
                    className={`h-8 w-8 cursor-pointer ${
                      rating >= value ? "text-[#130160]" : "text-gray-400"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-3/4 flex-col">
            <textarea
              rows="3"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="resize-none rounded-xl bg-gray-100 p-4 text-gray-500 outline-none focus:ring"
              placeholder="Leave a message, if you want"
            ></textarea>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="my-8 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 py-3 text-base text-white"
            >
              {isSubmitting ? "Submitting..." : "Rate now"}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center py-5">
          <a href="#" className="text-sm text-gray-600">
            Maybe later
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeedbackArea;
