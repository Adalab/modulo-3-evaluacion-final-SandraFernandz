import logo from '../images/Rick_and_Morty.png';
import '../styles/header.scss';

function Header() {
  return <img className="title" src={logo} alt="logo" />;
}

export default Header;
