import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PostEditor from "./components/PostEditor";

function App() {
  return (
    <div className="container">
        <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/new_post" element={<PostEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
