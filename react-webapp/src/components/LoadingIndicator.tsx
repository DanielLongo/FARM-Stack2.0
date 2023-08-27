import React, { useState, useEffect } from "react";
import LoadingSpinbox from "./UICore/LoadingSpinbox";

interface LoadingIndicatorProps {
  messages: string[];
  timePerItem: number;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  messages,
  timePerItem,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, timePerItem);

    return () => clearInterval(interval);
  }, [messages, timePerItem]);

  return (
    <div className="flex-col flex items-center justify-center">
      <LoadingSpinbox />
      <p className="text-sm text-slate-600">{messages[currentIndex]}</p>
    </div>
  );
};

export default LoadingIndicator;
