import React from "react";

const FAQsArea = () => {
  return (
    <section className="jm-contact-area pt-24 pb-24 mt-8 bg-gray-50">
      <div className="container mx-auto px-4" style={{ fontSize: "14px" }}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h5 className="text-2xl font-bold text-[#130160] mb-4">
            Frequently Asked Questions (FAQ)
          </h5>

          <div className="mb-6">
            <h6 className="text-lg font-semibold text-[#130160] underline decoration-[#F59300] mb-3">
              General Questions
            </h6>
            <div className="mb-4">
              <strong className="text-[#130160]">Q: What is Kamai?</strong>
              <p className="text-sm text-gray-700 mt-2">
                A: Kamai is an online job portal dedicated to connecting
                blue-collar workers with employers. We focus on providing job
                opportunities in various industries such as construction,
                manufacturing, maintenance, transportation, and more.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: How does Kamai work?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: Kamai allows job seekers to create profiles, search for job
                listings, and apply directly through our platform. Employers can
                post job openings, search for candidates, and manage
                applications.
              </p>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="mb-6">
            <h6 className="text-lg font-semibold text-[#130160] underline decoration-[#F59300] mb-3">
              For Job Seekers
            </h6>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: How do I create a profile on Kamai?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: To create a profile, click on the "Sign Up" button on our
                homepage. Fill in your details, including work experience,
                skills, and contact information. Once completed, you can start
                applying for jobs.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: Is there a fee for job seekers to use Kamai?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: No, Kamai is completely free for job seekers. You can create
                a profile, search for jobs, and apply without any charges.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: How do I apply for a job?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: Once you find a job listing that interests you, click on the
                "Apply" button. Follow the instructions to submit your
                application, which may include uploading your resume and cover
                letter.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: Can I apply for multiple jobs?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: Yes, you can apply for as many jobs as you like. We encourage
                you to explore various opportunities and apply to those that
                match your skills and interests.
              </p>
            </div>
          </div>

          {/* For Employers */}
          <div className="mb-6">
            <h6 className="text-lg font-semibold text-[#130160] underline decoration-[#F59300] mb-3">
              For Employers
            </h6>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: How do I post a job on Kamai?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: To post a job, sign in to your employer account and click on
                the "Post a Job" button. Fill in the job details, including the
                job title, description, requirements, and location. Once
                submitted, your job listing will be live on our platform.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: What are the fees for posting a job?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: Kamai offers various pricing plans for job postings. Please
                visit our Pricing page for detailed information on our packages
                and their respective costs.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: How do I search for candidates?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: Employers can search for candidates by using our advanced
                search filters, which include criteria such as job title,
                location, skills, and experience. You can view profiles and
                contact candidates directly through our platform.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: How do I manage applications?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: You can manage applications through your employer dashboard.
                Here, you can review resumes, communicate with candidates, and
                track the status of each application.
              </p>
            </div>
          </div>

          {/* Account and Technical Support */}
          <div className="mb-6">
            <h6 className="text-lg font-semibold text-[#130160] underline decoration-[#F59300] mb-3">
              Account and Technical Support
            </h6>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: I forgot my password. How can I reset it?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: Click on the "Forgot Password" link on the sign-in page.
                Enter your registered email address, and we will send you
                instructions on how to reset your password.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: How do I update my profile information?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: To update your profile, sign in to your account and navigate
                to the "Profile" section. Here, you can edit your personal
                details, work experience, skills, and contact information.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: Who can I contact for support?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: If you need assistance, please visit our Contact Us page and
                fill out the support form. You can also email us at
                support@kamai.ai, and our customer service team will get back to
                you promptly.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: Is my personal information safe on Kamai?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: Yes, Kamai takes the security of your personal information
                seriously. We use advanced security measures to protect your
                data and ensure your privacy.
              </p>
            </div>
          </div>

          {/* Miscellaneous */}
          <div className="mb-6">
            <h6 className="text-lg font-semibold text-[#130160] underline decoration-[#F59300] mb-3">
              Miscellaneous
            </h6>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: Can I use Kamai on my mobile device?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: Yes, Kamai is mobile-friendly and can be accessed on
                smartphones and tablets. You can use our platform on any device
                with an internet connection.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-[#130160]">
                Q: How do I provide feedback about my experience with Kamai?
              </strong>
              <p className="text-sm text-gray-700 mt-2">
                A: We value your feedback! Please visit our Feedback page to
                share your thoughts and suggestions. Your input helps us improve
                our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsArea;
