import { useState } from "react";
import "./App.css";
import { Post } from "./assets/Post";
import "./assets/Post.css";

function App() {
  const [formData, setFormData] = useState({
    postTitle: "",
    postText: "",
  });
  const [postsArray, setPostsArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostsArray([formData, ...postsArray]);
    setFormData({
      postTitle: "",
      postText: "",
    });
  };

  const handleDelete = (indexToDelete) => {
    setPostsArray(postsArray.filter((_, index) => index !== indexToDelete));
  };

  const handleEdit = (indexToEdit, newFormData) => {
    setPostsArray(
      postsArray.map((post, index) => {
        if (index === indexToEdit) {
          return newFormData;
        } else {
          return post;
        }
      })
    );
  };

  return (
    <>
      <nav>Blog</nav>
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
        <button className="post-btn">Post!</button>
      </form>
      <div className="newPost">
        {postsArray.map((post, index) => {
          return (
            <Post
              key={index}
              post={post}
              handleDelete={() => handleDelete(index)}
              handleEdit={(newFormData) => handleEdit(index, newFormData)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
