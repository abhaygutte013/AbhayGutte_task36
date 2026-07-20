import { useState } from "react";
import API from "/src/api.js";

function PostForm({ getPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", {
        title,
        content,
        user,
      });
      alert("Post Added Successfully");
      setTitle("");
      setContent("");
      setUser("");
      getPosts();
    } catch (error) {
      console.log(error);
      alert("Error Adding Post");
    }
  };

  return (
    <div className="card">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter User ID"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
export default PostForm;