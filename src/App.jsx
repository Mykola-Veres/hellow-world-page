import './reset.css';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Weather from './components/Weather';

export default function App() {
  return (
    <div className="pageContainer">
      <Header />
      <div className="pageDataContainer">
        <SideMenu />
        <main className="mainContainer">
          <Slider />
          <Weather />
          <Categories />
        </main>
      </div>
      <Footer />
    </div>
  );
}
