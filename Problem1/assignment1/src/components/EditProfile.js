import React from 'react';

const EditProfile = ({ userData, setUserData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Bio:</label>
          <textarea name="bio" value={userData.bio} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
