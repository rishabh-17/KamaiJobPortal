import React, { useState } from 'react';
import { toast } from 'react-toastify';

const RefundPolicyArea = () => {


  return (
    <section className="pt-12 pb-16 mt-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-md shadow-md p-8">
          <h4 className='text-2xl font-bold text-[#130160] mb-6'>Refund Policy</h4>
          <ol className="list-decimal ml-6 space-y-4 text-sm text-black">
            <li>
              <strong className="text-[#130160]">Subscription or Service Fees</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li><b className="text-[#F59300]">Non-Refundable:</b> Subscription fees are typically non-refundable once the payment is processed, particularly if the user has accessed or used any of the services or resources provided.</li>
                <li><b className="text-[#F59300]">Free Trial Period:</b> Users can cancel their subscription within the free trial period without incurring any charges. After the trial period ends, the subscription fee becomes non-refundable.</li>
              </ul>
            </li>
            <li>
              <strong className="text-[#130160]">Cancellation</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li><b className="text-[#F59300]">Within Specified Period:</b> Users have the option to cancel their subscription within [24-48 hours] of payment to receive a full refund. This period allows users to review the service before committing fully.</li>
                <li><b className="text-[#F59300]">No Refund After Use:</b> Once the services have been accessed or used in any capacity, refunds will generally not be issued.</li>
              </ul>
            </li>
            <li>
              <strong className="text-[#130160]">Technical Issues</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li><b className="text-[#F59300]">Service Disruption:</b> If users encounter technical issues that prevent them from accessing the services and the problem remains unresolved despite our best efforts, a refund may be granted. Users should report such issues promptly to facilitate resolution.</li>
              </ul>
            </li>
            <li>
              <strong className="text-[#130160]">Changes in Service</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li><b className="text-[#F59300]">Significant Changes:</b> In the event of significant changes to the service that adversely affect the user experience, users may be eligible for a refund. Such changes include major alterations in service features or terms that impact the user's original service expectations.</li>
              </ul>
            </li>
            <li>
              <strong className="text-[#130160]">Dispute Resolution</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li><b className="text-[#F59300]">Contact Support:</b> To request a refund or address any issues, users should contact customer support within [specified period] of encountering the problem. This allows us to address concerns promptly and effectively.</li>
                <li>Resolution: Disputes will be handled through arbitration or as per the legal framework established by Indian law. We aim to resolve disputes fairly and efficiently in accordance with applicable regulations.</li>
              </ul>
            </li>
            <li>
              <strong className="text-[#130160]">Legal Compliance</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li><b className="text-[#F59300]">Regulations:</b> Our refund policy is designed to comply with the Consumer Protection Act, 2019, and other relevant regulations in India, ensuring that all practices meet the legal standards set forth for consumer protection.</li>
              </ul>
            </li>
            <li>
              <strong className="text-[#130160]">Contact Information</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li><b className="text-[#F59300]">Support:</b> For any questions, concerns, or further clarification regarding this policy, please contact us at support@kamai.ai. Our support team is available to assist you with any issues or inquiries.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicyArea; 