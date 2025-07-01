import React from "react";
import Header from "../components/Header";
import WelkomMessage from "../components/WelkomMessage";
import FormGroups from "../components/FormGroups";
import { ForgotMessage } from "../data";
import './Login.css'; 

export default function ForgotPassword() {
  return (
    <div>
      <Header />
      <main>
        <WelkomMessage {...ForgotMessage[0]} />
        <FormGroups />
      </main>
    </div>
  );
}
