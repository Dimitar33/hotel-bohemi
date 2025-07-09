
import { Link } from 'react-router-dom';
import './Header.scss';
import {useTranslation} from 'react-i18next';

function Header() {

 
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => i18n.changeLanguage(lang);
  

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

      <div className="language-switcher">
      <img src="/flags/en.png" alt="English" onClick={() => changeLanguage('en')} />
      <img src="/flags/bg.png" alt="Bulgarian" onClick={() => changeLanguage('bg')} />
      <img src="/flags/ru.png" alt="Russian" onClick={() => changeLanguage('ru')} />  
      </div>
    </header>
  );
}
export default Header;
