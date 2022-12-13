import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      {posts.map((post, index) => {
        return (
          <div className="post" key={index}>
            <div className="post-header">
              <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <span>
                <button className="edit">EDIT</button>
                <button className="delete">DELETE</button>
              </span>
            </div>
            <div className="published">Published: {post.created}</div>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
