import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

type HeaderProps = {
  name?: string;
  tagline?: string;
};

function Header({ name = 'Nursultanov Nurali', tagline = 'Great Manager & Aspiring Web Developer' }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <p>♥ {likes}</p>
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