import logo from '../img/logoSite.svg';
import search from '../img/Search.png';

export default function Header() {
  return (
    <header className="container header_cont">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <li>Продукция</li>
          <li>Материалы</li>
          <li>О нас</li>
          <li>Контакты</li>
          <img src={search} alt="search" />
        </nav>
    </header>
  )
}
