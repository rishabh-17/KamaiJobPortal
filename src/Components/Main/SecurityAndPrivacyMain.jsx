import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ContactArea from "../Contact/ContactArea";
import SecurityAndPrivacyArea from "../SecurityAndPrivacy/SecurityAndPrivacyArea";

const SecurityAndPrivacyMain = () => {
  return (
    <main>
      {/* <Breadcrumb topic={'Contact'} topicSpan={'Contact'}/> */}
      <SecurityAndPrivacyArea />
    </main>
  );
};

export default SecurityAndPrivacyMain;
