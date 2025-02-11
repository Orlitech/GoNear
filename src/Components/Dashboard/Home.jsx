import React from 'react'
import Header from '../header/Header'
import './Seachbutton.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="s129 choices">
      <form>
        <div className="inner-form">
          <div className="input-field">
            <button className="btn-search" type="button">
            <i className="bi bi-search text-light" style={{ fontSize: "2rem" }}></i>


            </button>
            <input id="search" type="text" placeholder="What are you looking for today ??" />
          </div>
        </div>
      </form>
    </div>
    </>
  ) 
}

export default Home
