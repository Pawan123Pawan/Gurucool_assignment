import React from 'react';

function Step3({ formData }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Step 3: Confirmation</h2>

      {/* Personal Information */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-gray-600">
            <p className="font-medium">Name:</p>
            <p className="text-gray-800">{formData.name}</p>
          </div>
          <div className="text-gray-600">
            <p className="font-medium">Email:</p>
            <p className="text-gray-800">{formData.email}</p>
          </div>
          <div className="text-gray-600">
            <p className="font-medium">Phone:</p>
            <p className="text-gray-800">{formData.phone}</p>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Address Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-gray-600">
            <p className="font-medium">Address Line 1:</p>
            <p className="text-gray-800">{formData.address1}</p>
          </div>
          <div className="text-gray-600">
            <p className="font-medium">Address Line 2:</p>
            <p className="text-gray-800">{formData.address2 || 'N/A'}</p>
          </div>
          <div className="text-gray-600">
            <p className="font-medium">City:</p>
            <p className="text-gray-800">{formData.city}</p>
          </div>
          <div className="text-gray-600">
            <p className="font-medium">State:</p>
            <p className="text-gray-800">{formData.state}</p>
          </div>
          <div className="text-gray-600">
            <p className="font-medium">Zip Code:</p>
            <p className="text-gray-800">{formData.zip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
