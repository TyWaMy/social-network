import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
return (
      <div className={s.posts}>
      <Post message='Hi,how are you?' likestatus='0'/>
      <Post message="Its's my first post" likestatus='50'/>
     
      </div>
     )
}

export default MyPosts
