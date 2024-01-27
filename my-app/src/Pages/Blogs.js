import React from 'react'

import img9 from  '../download3.jpg';
import main from '../main.jpg'
import Card from '../Card.js'
import './Blog.css'


function Blogs() {
  return (
    <div>
      <h1 class='text-center mt-5 '><span class="badge  text-dark">PAGE TITLE</span></h1>
     
       
    
      <div class="card bg-dark text-white mt-5 container">
  <img src={img9} class="card-img" alt="..."/>
  <div class="card-img-overlay " id='card-main'>
  <span class="badge bg-primary" id='btn-card'>Technology</span>
    <p class="card-text" id='card-text'>The Impact of Technology on the Workplace: How Technology is Changing</p>
    <img src={main} alt='' width={50} id='main-img'/>
      <h2 id='names'> Tracey Wilson</h2>
  </div>
</div>

<Card/>

    </div>
  )
}

export default Blogs
