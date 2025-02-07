import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Log from '../src/Components/views/Log';
import Footer from '../src/Components/footer/Footer';
import {  Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './Components/views/ErrorPage';
function App() {
 
  return (
    <>
        <Routes>
          <Route path='/' element={<Log />} />
          <Route path='*' element={<ErrorPage />} />

        </Routes>
        
       <Footer />
    </>
  )
}

export default App
