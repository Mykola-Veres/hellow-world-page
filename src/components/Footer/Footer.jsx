import './Footer.css';

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerDataContainer">
        <div className="socialLinksContainer">
          <h2>Зв'язатися з нами</h2>
          <ul>
            <li key="1">
              <a href="#" target="_blank" className="facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li key="2">
              <a href="#" target="_blank" className="instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li key="3">
              <a href="#" target="_blank" className="youtube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li key="4">
              <a href="#" target="_blank" className="viber">
                <i className="fa-brands fa-viber"></i>
              </a>
            </li>
            <li key="5">
              <a href="#" target="_blank" className="telegram">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="companyLinksContainer">
          <div>
            <h2>Про компанію</h2>
            <ul>
              <li key="1">
                <a href="#" target="_blank">
                  Новини
                </a>
              </li>
              <li key="2">
                <a href="#" target="_blank">
                  Про нас
                </a>
              </li>
              <li key="3">
                <a href="#" target="_blank">
                  Вакансії
                </a>
              </li>
              <li key="4">
                <a href="#" target="_blank">
                  Умови використання сайту
                </a>
              </li>
              <li key="5">
                <a href="#" target="_blank">
                  Співпраця з нами
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Клієнтам</h2>
            <ul>
              <li key="1">
                <a href="#" target="_blank">
                  Доставка і оплата
                </a>
              </li>
              <li key="2">
                <a href="#" target="_blank">
                  Гарантія
                </a>
              </li>
              <li key="3">
                <a href="#" target="_blank">
                  Кредит
                </a>
              </li>
              <li key="4">
                <a href="#" target="_blank">
                  Обмін
                </a>
              </li>
              <li key="5">
                <a href="#" target="_blank">
                  Бонусна програма
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
