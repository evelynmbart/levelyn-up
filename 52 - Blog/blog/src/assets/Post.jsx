import { ThumbsUp } from "@phosphor-icons/react";
import { useState } from "react";
import "../App.css";

export function Post({ post, handleDelete, handleEdit }) {
  const [likes, setLikes] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    postTitle: post.postTitle,
    postText: post.postText,
  });

  const handleUpvote = () => {
    setLikes(likes + 1);
  };

  // For review
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(formData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="content-container">
          <div className="user-input">
            <label>
              Blog-post title:
              <input
                type="text"
                placeholder="Day One"
                value={formData.postTitle}
                onChange={(e) =>
                  setFormData({ ...formData, postTitle: e.target.value })
                }
              />
            </label>
            <div className="user-input" id="second-label">
              <label>Write away...</label>
              <textarea
                className="text"
                placeholder="Today was a doozy...."
                value={formData.postText}
                onChange={(e) =>
                  setFormData({ ...formData, postText: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <button className="post-btn" type="submit">
          Save!
        </button>
      </form>
    );
  }

  return (
    <div className="post">
      <div className="post-container">
        <div className="post-content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{post.postTitle}</h2>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
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
