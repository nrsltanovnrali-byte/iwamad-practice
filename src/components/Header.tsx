import { NavLink } from 'react-router';

type HeaderProps = {
  name?: string;
  tagline?: string;
};

function Header({ name = 'Nursultanov Nurali', tagline = 'Great Manager & Aspiring Web Developer' }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
          Skills
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;