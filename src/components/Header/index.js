import React from 'react'
//import { Link } from 'react-router-dom'
//import "./calendar.css";
import "./style.css";

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="bg-white shadow-sm">
        <nav className="navbar navbar-expand-sm p-0">
          <div className="container-fluid">
            <a className="navbar-brand p-0" href="index.html"><img src="images/jtmac_logo.PNG" alt="JTMaC" className="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-menu" aria-controls="header-menu" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-ellipsis-v" />
            </button>
            <div className="collapse navbar-collapse" id="header-menu">
              <ul className="navbar-nav ms-auto mb-0">
                <li className="nav-item home">
                  <a className="nav-link rounded-pill border-0 px-3 py-1 active" href="index.html"><span>Home</span></a>
                </li>
                <li className="nav-item admin">
                  <a className="nav-link rounded-pill border-0 px-3 py-1" href="admin-login.html"><span>Admin</span></a>
                </li>
                <li className="nav-item">
                <button className="shadow btn_book rounded-pill bg_green2 border-0 text-white px-3 py-2">Book an appointment</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
   )

 }

export default Header