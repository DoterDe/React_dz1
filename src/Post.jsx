import React from "react";

const Post = ({ author, content, time }) => {
  return (
    <div style={styles.post}>
      <h3>{author}</h3>
      <p>{content}</p>
      <p>{new Date(time).toLocaleString()}</p>
    </div>
  );
};

const styles = {
  post: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
};

export default Post;
