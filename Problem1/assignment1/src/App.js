// App.js
import React, { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';

function App() {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Sukanta Pramanik',
    email: 'sukanta@gmail.com',
    bio: 'Full Stack Web Developer',
  });

  const toggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  return (
    <div className="App">
      <h1>User Profile</h1>
      {editMode ? (
        <EditProfile userData={userData} setUserData={setUserData} />
      ) : (
        <UserProfile userData={userData} />
      )}
      <button onClick={toggleEditMode}>
        {editMode ? 'submit' : 'Edit Profile'}
      </button>
    </div>
  );
}

export default App;
