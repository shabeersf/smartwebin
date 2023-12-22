"use client"
import ProgressBar from '@/components/Progress/ProgressBar';
import React, { useState, useEffect } from 'react';

const LoadingUi = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating progress increase for demonstration purposes
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [progress]);



  return (
    <div className="w-full">
      <ProgressBar percentage={progress} />
    </div>
  );
};

export default LoadingUi;
