"use client";

import React, { useState } from "react";

const VerifyMailForm: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", "", "", ""]);

  const handleOtp = (index: number, value: string): void => {
    const newOtp = [...otp];
    newOtp[index] = value;

    //moves to next input box if previous is filled
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(
        `otp-input-${index + 1}`,
      ) as HTMLInputElement | null;
      if (nextInput) {
        nextInput.focus();
      }
    }

    setOtp(newOtp);
    console.log(otp);
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="h-3/4 w-[30rem] rounded-lg border-2 bg-white px-16 py-10">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Verify your email
        </h2>
        <p className="text-center text-sm mb-5">
          Enter the 8 digit code you have received on swa***@gmail.com
        </p>

        <form>
          <div>
            <label htmlFor="otp-input">code</label>
            <br />
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-input-${i}`}
                type="text"
                value={digit}
                onChange={(e) => handleOtp(i, e.target.value)}
                className="mr-2 h-8 w-8 rounded-md border-2 p-4"
              />
            ))}
            <button
              type="submit"
              className="w-full rounded bg-black px-4 py-2 mt-10 text-white"
            >
              VERIFY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyMailForm;
