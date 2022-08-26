import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Content from './Component/Content';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
function App() {
	 AOS.init();
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
