"use client";

import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import VerifcationCode from "./VerifcationCode";
import ResetPassword from "./ResetPassword";

export default function View() {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState("");

  const handleStep1Next = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setStep(2);
  };

  return step === 1 ? (
    <ForgotPassword onNext={handleStep1Next} />
  ) : step === 2 ? (
    <VerifcationCode
      email={email}
      onNext={() => setStep(3)}
      onBack={() => setStep(1)}
    />
  ) : (
    <ResetPassword email={email} />
  );
}
