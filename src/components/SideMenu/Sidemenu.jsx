import './SideMenu.css';

function SideMenu() {
  return (
    <nav className="sideNavContainer">
      <ul>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-laptop"></i>
            </span>
            Ноутбуки
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-mobile-button"></i>
            </span>
            Смартфони
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-blender"></i>
            </span>
            Побутова техніка
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-couch"></i>
            </span>
            Товари для дому
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-wrench"></i>
            </span>
            Інструменти
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-bath"></i>
            </span>
            Сантехніка
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-sun-plant-wilt"></i>
            </span>
            Сад і город
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-baseball"></i>
            </span>
            Спорт
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-shirt"></i>
            </span>
            Одяг та взуття
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-pump-soap"></i>
            </span>
            Краса та здоров’я
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-children"></i>
            </span>
            Дитячі товари
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-paw"></i>
            </span>
            Зоотовари
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-circle-info"></i>
            </span>
            Довідка
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-paper-plane"></i>
            </span>
            Контакти
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-truck"></i>
            </span>
            Доставка й оплата
          </a>
        </li>
        <li>
          <a href="#">
            <span className="iconContainer">
              <i className="fa-solid fa-coins"></i>
            </span>
            Бонусний рахунок
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;
