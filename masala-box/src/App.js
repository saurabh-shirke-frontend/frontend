import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import NavBar from './Component/NavBar';
import Index from './Component/Pages/Home/Index';
import ProductIndex from './Component/Pages/Product/ProductIndex';
import LoginHome from './Component/Pages/Login/LoginHome';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={Index}/>
        <Route path='/product' exact Component={ProductIndex}/>
        <Route path='/login' exact Component={LoginHome}/>
      </Routes>
      </Router>
      {/* <Index/> */}
    </div>
  );
}

export default App;
