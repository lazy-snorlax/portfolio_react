import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            Portfolio
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <a href="#aboutme" className="btn btn-ghost btn-md rounded-btn">
              About
            </a>
            <a href="#skills" className="btn btn-ghost btn-md rounded-btn">
              Skills
            </a>
            <a href="#projects" className="btn btn-ghost btn-md rounded-btn">
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
