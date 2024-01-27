import React from 'react'
import './Navbar.css';
import img2 from './download2.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-10 mt-3">
  <div class="container">
    <a class="navbar-brand" href="#s">  
    <img src={img2} alt="" />    
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item mx-3">
          <Link class="nav-link active mx-3" aria-current="page" to="/" id='links'>Home</Link>
        </li>
        <li class="nav-item mx-2" >
          <Link class="nav-link" to="/Blogs" id='links' >Blogs</Link>
        </li>
        <li class="nav-item mx-2" >
          <Link class="nav-link" to="/Blog1" id='links'>Single Post</Link>
        </li>
        <li class="nav-item mx-2" >
          <Link class="nav-link" to="/AuthorPage" id='links'>Author Page</Link>
        </li>
       
        <li class="nav-item mx-2" >
          <Link class="nav-link" to="/Contact" id='links'>Contact Us</Link>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" id='search-box'/>
        <button class="btn btn-outline" type="submit" id='search-btn'><i class="bi bi-search"></i></button>
      </form>
    </div>
  </div>
  
  
</nav>
    </div>
  )
}


export default Navbar
