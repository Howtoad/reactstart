import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home">
        <h1>The Dojo Blog</h1>
      </Link>
      <div className="links">
        <Link to="home">Home</Link>
        <Link to="create">Create</Link>
      </div>
    </nav>
  );
};

export default Navbar;
