import React, { useState } from 'react';

export default function AccountSettingEdit(user) {
  const [formData, setFormData] = useState({
    firstName: `${user.firstName}`,
    lastName: `${user.lastName}`,
    email: '',
    gender: '',
    presentAddress: '',
    permanentAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Edit Profile</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Basic Info</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
            
            <div>
              <label className="block text-gray-700">Email</label>
              <input 
                type="text" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              >
                <option value="">Select</option>
                <option value="Single">Male</option>
                <option value="Married">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Address</h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700">Present Address</label>
              <textarea 
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Permanent Address</label>
              <textarea 
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};
