import React from "react";

function Navigation({ step, handleBack, handleNext, handleSubmit }) {
  return (
    <div className="mt-4 flex justify-between">
      {step > 1 && (
        <button className="btn" onClick={handleBack}>
          Back
        </button>
      )}
      {step < 3 && (
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      )}
      {step === 3 && (
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
}

export default Navigation;
