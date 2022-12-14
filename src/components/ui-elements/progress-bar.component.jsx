import React from "react";

const ProgressBar = ({ name, percentage }) => {
  return (
    <div className="pregress-bar space-y-1">
      <div className="flex justify-between text-slate-500">
        <span>{name}</span>
        <span>{`${percentage}%`}</span>
      </div>
      <div className="w-full bg-gray-200 h-1.5 mb-6 rounded-md overflow-hidden shadow-md">
        <div
          className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
