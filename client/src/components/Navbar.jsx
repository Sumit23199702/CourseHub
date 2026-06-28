import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          CourseHub
        </Link>

        <div className="flex items-center gap-5">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          {/* Student */}
          {token && role === "student" && (
            <>
              <Link to="/cart" className="hover:text-blue-400">
                Cart
              </Link>

              <Link to="/my-courses" className="hover:text-blue-400">
                My Courses
              </Link>

              <Link to="/profile" className="hover:text-blue-400">
                Profile
              </Link>
            </>
          )}

          {/* Instructor */}
          {token && role === "instructor" && (
            <>
              <Link to="/instructor" className="hover:text-blue-400">
                Dashboard
              </Link>

              <Link to="/profile" className="hover:text-blue-400">
                Profile
              </Link>
            </>
          )}

          {/* Admin */}
          {token && role === "admin" && (
            <>
              <Link to="/admin" className="hover:text-blue-400">
                Dashboard
              </Link>

              <Link to="/profile" className="hover:text-blue-400">
                Profile
              </Link>
            </>
          )}

          {/* Guest */}
          {!token && (
            <>
              <Link to="/login" className="hover:text-blue-400">
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Register
              </Link>
            </>
          )}

          {/* Logout */}
          {token && (
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
