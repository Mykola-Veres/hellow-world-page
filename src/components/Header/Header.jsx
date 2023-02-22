import Logo from './Logo';
import UserInfo from './UserInfo';
import './Header.css';

function Header() {
  return (
    <header className="headerContainer">
      <nav className="headerDataContainer">
        <ul>
          <li>
            <a href="#" className="logo">
              <Logo />
            </a>
          </li>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Акції</a>
          </li>
          <li>
            <a href="#">Магазини</a>
          </li>
          <li>
            <a href="tel:#">
              <i className="fa-solid fa-phone"></i> 0 800 888 888
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-regular fa-circle-user"></i>
              <UserInfo />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
