import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

type HeaderProps = {
  name?: string;
  tagline?: string;
};

function Header({
  name = 'Nursultanov Nurali',
  tagline = 'Great Manager & Aspiring Web Developer',
}: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <div className="header-brand">
        <img src={logo} alt="" className="header-logo" />

        <div>
          <h1>{name}</h1>
          <p>{tagline}</p>
        </div>
      </div>

      <div className="header-navigation">
        <p>♥ {likes}</p>

        <nav aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>

          <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>
            Skills
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>

          <NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;