import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>GERZACK STORE</h1>
      </Link>
      <div className="categories">
        <NavLink 
            to="/category/celulares" 
            className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}
        >
            Celulares
        </NavLink>
        <NavLink 
            to="/category/notebooks" 
            className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}
        >
            Notebooks
        </NavLink>
      </div>
      <span>🛒 0</span>
    </nav>
  );
};

export default NavBar;