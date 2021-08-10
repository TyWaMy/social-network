import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
      
return (
      <div className={s.item}>
      <img src='https://sci-fi-news.ru/wp-content/uploads/2017/01/NEEhr9iIdHIRHN_1_b.jpg '/>
         { props.message }
      <div><span>like</span></div>{props.likestatus}
      </div>
)
}

export default Post
