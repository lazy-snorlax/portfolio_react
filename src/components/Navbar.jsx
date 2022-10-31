import { useNavigate, useLocation, Route, Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

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
            <Link to="/#projects" className="btn btn-ghost btn-md rounded-btn">
              Projects
            </Link>
            <Link to="/#skills" className="btn btn-ghost btn-md rounded-btn">
              Skills
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
