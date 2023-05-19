import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
// import Menu from "./Menu";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    // setIsUserOpen(!isUserOpen);
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log("log out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  let t = true;
  return (
    <nav className="border mb-12 container mx-auto">
      {/* <Menu></Menu> */}
      <div className="navbar justify-between bg-base-100">
        <div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            TOY BARI
          </Link>
        </div>
        <div className="flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/all_toys">All Toys</NavLink>
          <NavLink to="/my_toys">My Toys</NavLink>
          <NavLink to="/add_toys">Add Toys</NavLink>

          {user ? (
            <button onClick={handleLogOut}>Log out</button>
          ) : (
            <NavLink to="/login">Log in</NavLink>
          )}
          <NavLink to="/register">Register</NavLink>
        </div>
        <div className="flex-none  ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://source.unsplash.com/user/c_v_r/100x100" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
