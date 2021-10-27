import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import "./PostIt.css";

const PostCard = () => {
    const postList = useSelector((state) => state.list.posts);

  return (
    <Fragment> 
   { postList.map((postData)=><div  key={postData.objectId} className="card">
      <div className="image-container">
        <img className="image_post" src={postData.image} alt="" />
      </div>
      <div>
        <div className="title_date_post">
          <h2 className="title_post">{postData.title}</h2>
        </div>
        <div className="description_post">
          <p className="description">{postData.description}</p>
        </div>
        <div className="category_post">
          <button className="category">{postData.category}</button>
        </div>
      </div>
    </div>)}
    </Fragment> 
  );
};

export default PostCard;

