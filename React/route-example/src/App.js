import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>Shivam Contact Application</h1>

        <nav>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/about">About</Link><br></br>
          <Link to="/contact">Contact</Link><br></br>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
