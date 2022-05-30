import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
 } from "react-router-dom";
import { Navbar } from './Component/Header';
import { UserSlider } from './Component/UserSlider';
import { HomePge } from './Page/HomePge';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePge/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
