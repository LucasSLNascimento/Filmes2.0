import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesConfig from './RoutesConfig'

function App() {
  return (
    <Router>
        <Header />
        <RoutesConfig />
        <Footer />
    </Router>

  );
}

export default App;
