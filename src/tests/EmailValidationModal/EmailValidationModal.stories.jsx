import React, { useEffect, useRef, useState } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import { EmailValidationModal } from "./EmailValidationModal";

const meta = { title: "Test/EmailModal" };

const COUTER_TIME = 5000 * 60; //? equal to 5 minutes.

export const EmailValidationModalStory = () => {
  const localStorage = useLocalStorage("loudDS_last_resend_email_request");
  const validEmail = useLocalStorage("loudDS_valid_email");

  const refreshTimer = useRef(null);

  const isFinishCounter = () => {
    const time = localStorage.get();
    const now = Date.now();

    return now - time > COUTER_TIME;
  };

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [canResendEmail, setCanResetEmail] = useState(isFinishCounter());
  const [showModal, setShowModal] = useState(false);

  const checkEmail = () => {
    if (refreshTimer.current) clearTimeout(refreshTimer.current);

    const timerId = setInterval(() => {
      if (validEmail.get() === "true") {
        setIsValidEmail(true);
        clearTimeout(refreshTimer.current);
      }
    }, 5000); //? check email every 5 seconds.

    refreshTimer.current = timerId;
  };

  //? init check email.
  useEffect(() => {
    return () => clearTimeout(refreshTimer.current);
  }, []); // eslint-disable-line

  const handleCloseModal = () => {
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
    setShowModal(false);
  };

  const handleFinishCounter = () => {
    setCanResetEmail(true);
  };

  const handleOpneModal = () => {
    if (validEmail.get() === "true") {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
      setShowModal(true);
      checkEmail();
    }
  };

  const handleResendEmail = () => {
    localStorage.set(Date.now());
    setCanResetEmail(false);
  };

  return (
    <EmailValidationModal
      canResendEmail={canResendEmail}
      handleCloseModal={handleCloseModal}
      handleOpneModal={handleOpneModal}
      handleResendEmail={handleResendEmail}
      isValidEmail={isValidEmail}
      onFinishCounter={handleFinishCounter}
      showModal={showModal}
      time={parseInt(localStorage.get()) + COUTER_TIME - Date.now()}
    />
  );
};

export default meta;
