import React from 'react'
import './Card.css';

import card1 from './88df441e-4a4d-4d46-a961-4ee5e26e5470.txt'
import card3 from './3.jpg'
import card2 from './7b2cd079-8bee-4e1a-beef-72594f601f8c.txt'
import card4 from './4.jpg'
import card5 from './5.jpg'
import card6 from './6.jpg'
import card7 from './7.jpg'
import card8 from './8.jpg'
import card9 from './9.jpg'
import main from './main.jpg'
import main1 from './main1.jpg'
import main2 from './main2.jpg'
function Card() {
  return (
    <div>
      <div class='container'>
<div class="row row-cols-1 row-cols-md-3 g-5 mt-5">
  <div class="col ">
    <div class="card h-100">
      <img src={card1}class="card-img-top" alt="..."/>
      <div class="card-body">
      <button type="button" class="btn btn-light" id='card-btn'>Technology</button>
        <p class="card-text" id='paragraph'>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
     <img src={main} alt='' width={50} id='main-img'/>
     <h2 id='names'> Tracey Wilson</h2>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src={card2} class="card-img-top" alt="..."/>
      <div class="card-body">
      <button type="button" class="btn btn-light" id='card-btn'>Technology</button>
        <p class="card-text" id='paragraph'>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
      <img src={main1} alt='' width={50} id='main-img'/>
      <h2 id='names'>Jason Francisco</h2>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 ">
      <img src={card3}class="card-img-top" alt="..."/>
      <div class="card-body">
      <button type="button" class="btn btn-light" id='card-btn'>Technology</button>
        <p class="card-text" id='paragraph'>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
      <img src={main2} alt='' width={50} id='main-img'/>
      <h2 id='names'>Elizabeth Slavin</h2>
    </div>
  </div>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
  <div class="col">
    <div class="card h-100 ">
      <img src={card4} class="card-img-top" alt="..."/>
      <div class="card-body">
      <button type="button" class="btn btn-light" id='card-btn'>Technology</button>
        <p class="card-text" id='paragraph'>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
      <img src={main2} alt='' width={50} id='main-img'/>
      <h2 id='names'>Elizabeth Slavin</h2>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 ">
      <img src={card5} class="card-img-top" alt="..."/>
      <div class="card-body">
      <button type="button" class="btn btn-light" id='card-btn'>Technology</button>
        <p class="card-text" id='paragraph'>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
      <img src={main1} alt='' width={50} id='main-img'/>
      <h2 id='names'>Jason Francisco</h2>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 ">
      <img src={card6} class="card-img-top" alt="..."/>
      <div class="card-body">
      <button type="button" class="btn btn-light" id='card-btn'>Technology</button>
        <p class="card-text" id='paragraph'>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
      <img src={main} alt='' width={50} id='main-img'/>
      <h2 id='names'> Tracey Wilson</h2>
    </div>
  </div>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
  <div class="col ">
    <div class="card h-100 ">
      <img src={card7} class="card-img-top" alt="..."/>
      <div class="card-body">
      <button type="button" class="btn btn-light" id='card-btn'>Technology</button>
        <p class="card-text" id='paragraph'>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
      <img src={main1} alt='' width={50} id='main-img'/>
      <h2 id='names'>Jason Francisco</h2>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 ">
      <img src={card8} class="card-img-top" alt="..."/>
      <div class="card-body">
      <button type="button" class="btn btn-light" id='card-btn'>Technology</button>
        <p class="card-text" id='paragraph'>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
      <img src={main2} alt='' width={50} id='main-img'/>
      <h2 id='names'>Elizabeth Slavin</h2>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 ">
      <img src={card9} class="card-img-top" alt="..."/>
      <div class="card-body">
      <button type="button" class="btn btn-light" id='card-btn'>Technology</button>
      <p class="card-text" id='paragraph'>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
      <img src={main} alt='' width={50} id='main-img'/>Tracey Wilson
      <h2 id='names'> </h2>
    </div>
  </div>
</div>

<div class="d-grid gap-2 col-4 mx-auto mt-5">
  <button class="btn btn-secondry" type="button" id='page-btn'>View All Postes</button>
</div>
</div>
   

    </div>
  )
}

export default Card
