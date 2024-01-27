import React from 'react'
import Card from '../Card'
import img from '../main1.jpg'
import './Authotpage.css'
function pages() {
  return (
    <div>
    <div class='container mt-5'>
      <div class='row'>
        <div class='col-12 text-center' id='pages-p'>
          <img src={img} class="img-fluid" alt="..." width={70}></img>
          <h2 class="card-title pt-3">Jonathan Doe</h2>
          <i class="bi bi-facebook" id='social'></i> <i class="bi bi-twitter" id='social'></i> <i class="bi bi-instagram" id='social'></i> <i class="bi bi-youtube" id='social'></i>
          <p class="card-text text-center pt-5">Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</p>
        </div>
      </div>
    </div>
      <Card />
    </div>
  )
}

export default pages
