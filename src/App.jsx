import { useEffect, useState } from "react";
import "./App.css";
import API from "/src/api.js";

import UserForm from "/src/components/UserForm.jsx";
import PostForm from "/src/components/PostForm.jsx";
import PostList from "/src/components/PostList.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>Schema Reference Assignment</h1>

      <UserForm />

      <PostForm getPosts={getPosts} />

      <PostList posts={posts} />
    </div>
  );
}

export default App;