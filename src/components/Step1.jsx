import React from "react";

function Step1({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold  mb-6">
        Step 1: Personal Information
      </h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="input"
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="input"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="input"
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}
    </div>
  );
}

export default Step1;
