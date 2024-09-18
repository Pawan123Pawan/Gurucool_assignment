import React, { useState, useEffect } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Navigation from "../components/Navigation";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

// Retrieve stored data from localStorage or use defaults
const storedData = JSON.parse(localStorage.getItem("formData")) || {};
const storedStep = JSON.parse(localStorage.getItem("step")) || 1;

const initialFormData = {
  name: storedData.name || "",
  email: storedData.email || "",
  phone: storedData.phone || "",
  address1: storedData.address1 || "",
  address2: storedData.address2 || "",
  city: storedData.city || "",
  state: storedData.state || "",
  zip: storedData.zip || "",
};

function MultiStepForm() {
  const [step, setStep] = useState(storedStep); // Initialize with stored step or default to step 1
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [animate, setAnimate] = useState(true); // State to trigger animations

  // Save formData to localStorage when formData changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Save the current step to localStorage whenever step changes
  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

  const validateStep = (currentStep) => {
    let newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
    }
    if (currentStep === 2) {
      if (!formData.address1) newErrors.address1 = "Address Line 1 is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.zip) newErrors.zip = "Zip Code is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setAnimate(false);
      setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
        setAnimate(true);
      }, 300);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setAnimate(false);
      setTimeout(() => {
        setStep((prevStep) => prevStep - 1);
        setAnimate(true);
      }, 300);
    }
  };

  const handleSubmit = () => {
    if (validateStep(step)) {
      alert("Form submitted!");
      localStorage.removeItem("formData"); // Clear form data on submit
      localStorage.removeItem("step"); // Clear form data on submit
      setFormData({
        name: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
      });
      navigate("thank-you");
    }
  };

  return (
    <div className="flex justify-center items-center h-auto flex-col py-8">
      <div
        className={`bg-gradient-to-r from-blue-200 via-purple-500 to-pink-500 animate-gradient rounded-lg p-6 w-full max-w-lg mx-auto transition-opacity duration-300 `}
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 5s ease-in-out infinite",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <h1 className="text-4xl font-bold text-white py-5 text-center capitalize">
          Multi Step Form
        </h1>
        <ProgressBar step={step} />
        <div
          className={`transition-opacity duration-300 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {step === 3 && <Step3 formData={formData} />}
        </div>

        <Navigation
          step={step}
          handleBack={handleBack}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default MultiStepForm;
