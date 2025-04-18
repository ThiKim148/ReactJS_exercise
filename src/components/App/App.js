import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/header';
import Content from '../Content/content';

function App() {
  return (
    <div>
      <Header />
      {/* Các thành phần khác */}
      <Content />
    </div>
  );
}

export default App;
