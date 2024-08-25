import React from "react";
import { toast } from "react-toastify";

const TermsAndConditionsArea = () => {
  return (
    <section className="pt-12 pb-16 mt-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-md shadow-md p-8">
          <h4 className="text-2xl font-bold text-[#130160] mb-6">
            Terms and Conditions
          </h4>

          <div className="space-y-4 ">
            <h6 className="text-lg font-semibold text-[#130160]">
              Introduction
            </h6>
            <p className="text-sm text-black">
              Welcome to Kamai! These Terms and Conditions ("Terms") govern your
              use of our website and services. By accessing or using Kamai, you
              agree to comply with these Terms. If you do not agree with any
              part of these Terms, you should not use our services.
            </p>

            <ol className=" ml-6 space-y-4 text-sm text-black">
              <li>
                <strong className="text-[#130160]">1. Use of Services</strong>
                <ol className=" ml-6 space-y-2">
                  <li>
                    <strong className="text-[#130160]">1.1. Eligibility</strong>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        Users must be at least 18 years old to use our services.
                      </li>
                      <li>
                        By using Kamai, you represent and warrant that you have
                        the legal capacity to enter into these Terms.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-[#130160]">
                      1.2. Account Registration
                    </strong>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        To access certain features, you must create an account.
                      </li>
                      <li>
                        You agree to provide accurate and complete information
                        during registration.
                      </li>
                      <li>
                        You are responsible for maintaining the confidentiality
                        of your account credentials.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-[#130160]">
                      1.3. Prohibited Conduct
                    </strong>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        You agree not to engage in any unlawful or prohibited
                        activities, including but not limited to:
                      </li>
                      <ul className="list-circle ml-6 space-y-1">
                        <li>Posting false or misleading job listings.</li>
                        <li>Impersonating any person or entity.</li>
                        <li>
                          Using the platform for unauthorized commercial
                          purposes.
                        </li>
                        <li>
                          Interfering with or disrupting the services or
                          servers.
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ol>
              </li>

              <li>
                <strong className="text-[#130160]">2. Job Seekers</strong>
                <ol className=" ml-6 space-y-2">
                  <li>
                    <strong className="text-[#130160]">
                      2.1. Profile Creation
                    </strong>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        Job seekers can create profiles, upload resumes, and
                        apply for job listings.
                      </li>
                      <li>
                        You agree to provide accurate and current information in
                        your profile.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-[#130160]">
                      2.2.Application Process
                    </strong>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        By applying for a job, you consent to the disclosure of
                        your information to the employer.
                      </li>
                      <li>
                        Kamai does not guarantee employment or the accuracy of
                        job listings.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>

              <li>
                <strong className="text-[#130160]">3. Employers</strong>
                <ol className="ml-6 space-y-2">
                  <li>
                    <strong className="text-[#130160]">3.1. Job Posting</strong>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        Employers can post job listings by providing detailed
                        and accurate information.
                      </li>
                      <li>
                        You are responsible for the content of your job
                        postings.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-[#130160]">
                      3.2. Candidate Search
                    </strong>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        Employers can search for and contact candidates through
                        our platform.
                      </li>
                      <li>
                        You agree to use candidate information solely for
                        recruitment purposes.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>

              <li>
                <strong className="text-[#130160]">4. Fees and Payments</strong>
                <ol className=" ml-6 space-y-2">
                  <li>
                    <strong className="text-[#130160]">4.1. Job Seekers</strong>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Kamai services are free for job seekers.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-[#130160]">4.2. Employers</strong>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        Employers may be charged fees for job postings and other
                        premium services.
                      </li>
                      <li>
                        All fees are non-refundable unless otherwise stated.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>

              <li>
                <strong className="text-[#130160]">
                  5. Intellectual Property
                </strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    Kamai retains all rights to the content and services
                    provided on our platform.
                  </li>
                  <li>
                    Users are granted a limited, non-exclusive, non-transferable
                    license to use the services.
                  </li>
                </ul>
              </li>

              <li>
                <strong className="text-[#130160]">6. Privacy</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    Your use of Kamai is also governed by our Privacy Policy,
                    which can be found here.
                  </li>
                  <li>
                    By using our services, you consent to the collection and use
                    of your information as described in our Privacy Policy.
                  </li>
                </ul>
              </li>

              <li>
                <strong className="text-[#130160]">
                  7. Limitation of Liability
                </strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    Kamai is not liable for any direct, indirect, incidental, or
                    consequential damages arising from your use of our services.
                  </li>
                  <li>
                    We do not warrant the accuracy, completeness, or reliability
                    of any job listings or candidate profiles.
                  </li>
                </ul>
              </li>

              <li>
                <strong className="text-[#130160]">8. Termination</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    Kamai reserves the right to suspend or terminate your
                    account at any time for any reason, including violation of
                    these Terms.
                  </li>
                  <li>
                    Upon termination, you must cease all use of our services and
                    delete any downloaded content.
                  </li>
                </ul>
              </li>

              <li>
                <strong className="text-[#130160]">9. Changes to Terms</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    Kamai may update these Terms from time to time. We will
                    notify you of any changes by posting the new Terms on our
                    website.
                  </li>
                  <li>
                    Your continued use of our services after such changes
                    constitutes your acceptance of the new Terms.
                  </li>
                </ul>
              </li>

              <li>
                <strong className="text-[#130160]">10. Governing Law</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    These Terms are governed by and construed in accordance with
                    the laws of India, without regard to its conflict of law
                    principles.
                  </li>
                </ul>
              </li>

              <li>
                <strong className="text-[#130160]">
                  11. Contact Information
                </strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    If you have any questions or concerns about these Terms,
                    please contact us at
                    <br />
                    <b className="text-[#F59300]">support@kamai.ai</b>.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TermsAndConditionsArea;
