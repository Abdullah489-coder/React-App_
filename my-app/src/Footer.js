import React from 'react'
import './Footer.css';
import img2 from './download2.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <footer class=' container mt-5' id='footer'>
  <div class='row mt-5 '>
    <div class='col-md-3'>
      <h4>About</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="  email@example.com"/>
    </div>
   </div>
   <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Phone: </label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="      03100551936"/>
  </div>
    </div>
   </div>
    <div class='col-md-2'><h4>Quick Link</h4>
    <Link href='#' id='footer-link'> Home</Link><br/>
    <Link href='#' id='footer-link'>About</Link><br/>
    <Link href='#' id='footer-link'>Blog</Link><br/>
    <Link href='#' id='footer-link'>Archived</Link><br/>
    <Link href='#' id='footer-link'>Author</Link><br/>
    <Link href='#' id='footer-link'>Contact</Link><br/>
   
    </div>
    <div class='col-md-2'>
      <h4>Category</h4>
      <Link  to="/Lifestyle" id='footer-link'>Lifestyle</Link><br/>
    <Link to="/Technology" id='footer-link'>Technology</Link><br/>
    <Link to="/Travel" id='footer-link'>Travel</Link><br/>
    <Link to="/Business" id='footer-link'>Business</Link><br/>
    <Link to="/Economy" id='footer-link'>Economy</Link><br/>
    <Link to="/Sports" id='footer-link'>Sports</Link><br/>
    </div>
   
  <div class="col-sm-4 text-center">
    <div class="card h-80">
      <div class="card-body">
        <h4 class="card-title">Weekly Newsletter</h4>
        <p class="card-text" id='footer=p'>Get blog articles and offers via email</p>
        <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping"><i class="bi bi-envelope"></i></span>
  <input type="text" class="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
       
        <a href="#d" class="btn btn-primary mt-3 text-white fs-15">Subscribe</a>
        <form class="d-flex">
      
      </form>
      </div>
    </div>
  
  </div>

  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#g">
      <img src={img2} alt="" width="160" height="50" class="d-inline-block align-text-top"/>
     </a><br></br>
    
     <ul class="nav justify-content-end">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" href="#" id='footer-link'>Term of Use</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="#" id='footer-link'>Privacy Policy</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="#" id='footer-link'>Cookie Policy</Link>
  </li>
 
</ul>


  </div>
</nav>
  </div>
</footer>
    </div>
  )
}

export default Footer
