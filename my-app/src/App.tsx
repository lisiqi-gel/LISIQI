import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from'./ten/Login';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from'react-router-dom';
import Home from'./ten/Home' ;
import Register from './ten/Register';
import QQQ from './ten/QQQ';


function App() {
  return (
    <Router>
        <Routes>
          <Route  path="/" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} >
            <Route path="senta" element={<QQQ />} />
            <Route path="1" element={<QQQ />} />
            <Route path="1" element={<QQQ />} />
            <Route path="1" element={<QQQ />} />
            <Route path="1" element={<QQQ />} />
            <Route path="1" element={<QQQ />} />
            <Route path="1" element={<QQQ />} />
          </Route>
          
      </Routes>
    </Router>

  );
}

export default App;
