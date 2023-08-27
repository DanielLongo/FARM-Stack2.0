import React from "react";
import LoadingSpinbox from "../components/UICore/LoadingSpinbox";

const LoadingPage: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50">
      <LoadingSpinbox />
      <p className="text-gray-500">
        For help email{" "}
        <a
          href="mailto:daniel.longo@stanford.edu"
          className="text-blue-500 underline"
        >
          daniel.longo@stanford.edu
        </a>
      </p>
    </div>
  );
};

export default LoadingPage;
