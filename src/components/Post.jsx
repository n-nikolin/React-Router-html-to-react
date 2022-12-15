import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Parser } from 'html-to-react'
import axios from "axios";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/posts/${id}/`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="post">
      <div className="post-header">
        <h3>{post.title}</h3>
        <span>
          <button className="edit">EDIT</button>
          <button className="delete">DELETE</button>
        </span>
      </div>
      <div className="published">Published: {post.created}</div>
      <div>{Parser().parse(post.content)}</div>
      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
}
