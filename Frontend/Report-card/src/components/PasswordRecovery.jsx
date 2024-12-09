// PasswordRecovery.js
import React, { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import VerifyCode from './VerifyCode';
import ResetPassword from './ResetPassword';

const PasswordRecovery = () => {
  const [step, setStep] = useState(1);
  const [userEmail, setUserEmail] = useState('');

  const handleCodeSent = (email) => {
    setUserEmail(email);
    setStep(2);
  };

  const handleCodeVerified = () => {
    setStep(3);
  };

  return (
    <div>
      {step === 1 && (
        <ForgotPassword
          onCodeSent={handleCodeSent}
        />
      )}

      {step === 2 && (
        <VerifyCode
          email={userEmail}
          onCodeVerified={handleCodeVerified}
        />
      )}

      {step === 3 && (
        <ResetPassword email={userEmail} />
      )}
    </div>
  );
};

export default PasswordRecovery;
