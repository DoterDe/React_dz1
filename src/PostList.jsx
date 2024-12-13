import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          author={post.author}
          content={post.content}
          time={post.time}
        />
      ))}
    </div>
  );
};

export default PostList;
