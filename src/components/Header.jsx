
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <h1> <Link to="/"><img className='logo' src="/assets/Bohemi-logo.png" alt="Bohemi logo" /> Bohemi</Link>  </h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/amenities">Amenities</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
export default Header;
