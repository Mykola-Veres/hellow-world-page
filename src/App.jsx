import './reset.css';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Slider from './components/Slider';
import Card from './components/Card';
import Footer from './components/Footer';
import Weather from './components/Weather';

export default function App() {
  return (
    <>
      <div className="pageContainer">
        <Header />
        <div className="pageDataContainer">
          <SideMenu />
          <div className="mainContainer">
            <Slider />
            <Weather />
            <Card />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
