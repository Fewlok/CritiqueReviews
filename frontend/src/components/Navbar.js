import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import logo from './CritiqueReviewsLogo.png';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="navbar">
      <nav className="container">
        <Link to="/" className="site-title">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/blogs"
            >
              Reviews
            </NavLink>
          </li>
          {user && <li>
            <NavLink to="/createblog">
              New Review
            </NavLink>
          </li>}
          {user && <li>
          <NavLink to="/myBlogs" >
              My Reviews
            </NavLink>
          </li>}
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li>
            {user ? (
              <div>
                <span>{user.username}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            ) : (
              <div>
              <NavLink to="/login" className="btnLogin">
                Login
              </NavLink>

              <NavLink to="/signup" className="btnSignup">
                Signup
              </NavLink>
              </div>

            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
