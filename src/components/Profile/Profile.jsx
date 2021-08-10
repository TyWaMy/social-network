import React from 'react';
import MyPosts from './MyPost/MyPopsts';
import s from './Profile.module.css';

const Profile = () => {
return (
  <div>
    <div>
      <img src="https://i.pinimg.com/736x/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg" />
    </div>
    <div>ava+description</div>
    <MyPosts />
  </div>
); 
}

export default Profile
