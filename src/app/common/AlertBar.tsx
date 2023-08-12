import React, { useState } from "react";

const AlertBar = ({
  message,
  showAlert,
}: {
  message: string;
  showAlert: boolean;
}) => {
  return showAlert ? (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-success text-white z-50 p-4 rounded-b-md shadow-md">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  ) : null;
};

export default AlertBar;
