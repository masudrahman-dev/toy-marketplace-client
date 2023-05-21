import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Logo from "../../../assets/images/logo.svg";
const Header = () => {
  const [isShow, setIsShow] = useState(false);

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

  return (
    <nav className="  container mx-auto py-5">
      {/* <Menu></Menu> */}
      <div className="navbar justify-between bg-base-100">
        <div className="btn ">
          <img src={Logo} alt="logo" />
          <Link to="/" className=" ml-3 text-2xl font-semibold text-rose-600">
            TOY BARI
          </Link>
        </div>
        <div className="flex gap-5">
          <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive ? "text-rose-600 font-bold" : ""}>
                Home
              </span>
            )}
          </NavLink>
          <NavLink to="/blogs">
            {({ isActive }) => (
              <span className={isActive ? "text-rose-600 font-bold" : ""}>
                Blogs
              </span>
            )}
          </NavLink>
          <NavLink to="/all_toys">
            {({ isActive }) => (
              <span className={isActive ? "text-rose-600 font-bold" : ""}>
                All Toys
              </span>
            )}
          </NavLink>
          {user && (
            <>
              <NavLink to="/my_toys">
                {({ isActive }) => (
                  <span className={isActive ? "text-rose-600 font-bold" : ""}>
                    My Toys
                  </span>
                )}
              </NavLink>
              <NavLink to="/add_toys">
                {({ isActive }) => (
                  <span className={isActive ? "text-rose-600 font-bold" : ""}>
                    Add Toys
                  </span>
                )}
              </NavLink>
            </>
          )}
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

          {user ? (
            <>
              {" "}
              <div className=" mx-3">
                <label
                  onMouseEnter={() => setIsShow(!isShow)}
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                {isShow && <p className="absolute ">{user?.displayName}</p>}
              </div>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Log out
              </button>
            </>
          ) : (
            <NavLink className="btn btn-ghost" to="/login">
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
