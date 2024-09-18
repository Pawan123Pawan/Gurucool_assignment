import React from 'react';

function ProgressBar({ step }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
      <div
        className={`bg-green-500 h-1.5 rounded-full`}
        style={{ width: `${(step / 3) * 100}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
