import React from 'react'

export default function ProfileInfo({user}) {

    const ProfileField = ({ label, value }) => (
        <div className="flex items-center border-b pb-2">
            <span className="text-gray-500 w-64">{label}</span>
            <span className="text-gray-700 font-medium">{value}</span>
        </div>
    );
  return (
    <main className="w-full bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">Profile</h1>
        </div>
        <p className="mt-2 text-sm text-gray-500">Basic info, for a faster booking experience</p>
        <div className="mt-6 space-y-4">
          <ProfileField label="Frist Name" value={user.firstName} />
          <ProfileField label="Last Name" value={user.lastName} />
          <ProfileField label="Email" value={user.email} />
          <ProfileField label="Gender" value="N/A" />
          <ProfileField label="Present Address" value="N/A" />
          <ProfileField label="Permanent Address" value="N/A" />
        </div>
    </main>
  )
}
