import React from 'react';
import './App.css';
import Home from './components/Home'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import ScrollToTop from "react-scroll-to-top";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ScrollToTop className="scrollToTop" smooth color="black" />
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
