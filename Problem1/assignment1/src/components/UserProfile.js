import React from 'react';

const UserProfile = ({ userData }) => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div>
        <strong>Name:</strong> {userData.name}
      </div>
      <div>
        <strong>Email:</strong> {userData.email}
      </div>
      <div>
        <strong>Bio:</strong> {userData.bio}
      </div>
    </div>
  );
}

export default UserProfile;
