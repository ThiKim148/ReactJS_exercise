import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import routes from '../../route';

import logo from './logo.svg';
import Add from '../Add';
import Room from '../Room';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';

function App() {
  const showContent = (routes) => {
    return routes.map((route, index) => (
      <Route 
        key={index} 
        path={route.path} 
        exact={route.exact} 
        element={<route.main />}
      />
    ));
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Trang Chủ</Link></li>
            <li><Link to="/about">Giới thiệu</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>{showContent(routes)}</Routes>
    </BrowserRouter>
  );
}

export default App;