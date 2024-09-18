import React from "react";
import MultiStepForm from "./pages/MultiStepForm";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import ThankYou from "./pages/ThankYou";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
