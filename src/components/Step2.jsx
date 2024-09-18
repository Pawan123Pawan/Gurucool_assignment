import React from "react";

function Step2({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Step 2: Address Information
      </h2>
      <input
        type="text"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        placeholder="Address Line 1"
        className="input"
      />
      {errors.address1 && <p className="text-red-500">{errors.address1}</p>}
      <input
        type="text"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        placeholder="Address Line 2"
        className="input"
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="input"
      />
      {errors.city && <p className="text-red-500">{errors.city}</p>}
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        className="input"
      />
      {errors.state && <p className="text-red-500">{errors.state}</p>}
      <input
        type="text"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        placeholder="Zip Code"
        className="input"
      />
      {errors.zip && <p className="text-red-500">{errors.zip}</p>}
    </div>
  );
}

export default Step2;
