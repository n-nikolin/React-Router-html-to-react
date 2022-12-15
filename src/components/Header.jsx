import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>My Blog</h1>
      </Link>
      <h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
        recusandae?
      </h2>
    </header>
  );
}
