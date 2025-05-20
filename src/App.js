import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {showContentMenu(routes)}
      </Routes>
    </Router>
  );
}

const showContentMenu = (routes) => {
  if (routes.length > 0) {
    return routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={<route.main />}
      />
    ));
  }
  return null;
};

export default App;
