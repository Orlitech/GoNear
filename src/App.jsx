import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Footer from '../src/Components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './Components/views/ErrorPage';
import Home from './Components/Dashboard/Home';
import Log from './Components/views/Log';

function App() {
  return (
    <div className='bg-body-tertiary'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/log' element={<Log />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
