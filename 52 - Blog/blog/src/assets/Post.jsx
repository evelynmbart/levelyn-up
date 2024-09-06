import { ThumbsUp } from "@phosphor-icons/react";
import { useState } from "react";

export function Post({ post, handleDelete }) {
  const [likes, setLikes] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpvote = () => {
    setLikes(likes + 1);
  };

  const handleEditing = () => {
    setIsEditing(true);
  };

  return (
    <div className="post">
      <div className="post-container" onClick={handleEditing}>
        <div className="post-content">
          <h2>{post.postTitle}</h2>
          <hr />
          <div className="post-text">
            <p>{post.postText}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="upvote-btn" onClick={handleUpvote}>
          <ThumbsUp size={16} />
          Likes: {likes}
        </button>
        <button onClick={handleDelete} className="delete-btn">
          Delete Post
        </button>
      </div>
    </div>
  );
}
