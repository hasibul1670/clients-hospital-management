import React from 'react';
import mainImage from '../../images/White.jpg';


const Home = () => {
    ///fragment  for navigation <> </>// 
    const menus = <>

    <li></li>


</>
///fragment  for navigation <> </>// 


    return (
        <div>
   

<div class="hero  min-h-screen bg-base-200">
  <div class="hero-content flex-col md:flex-row">
    <img src={mainImage} class="max-w-sm rounded-lg shadow-2xl" />
   
{/* collapse */}   

    <div class="">

      <h1 class="text-5xl font-bold">WHY CHOOSE US?</h1>


    <div tabindex="0" class="collapse collapse-arrow border border-base-300
    mt-2 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  Excellent Services
  </div>
  <div class="collapse-content"> 
    <p>Clinical excellence must be the priority for any health care service provider. ONE Hospital ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.</p>
  </div>
</div>

<div tabindex="0" class="collapse collapse-arrow border border-base-300
    mt-2 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  Qualified Doctors
  </div>
  <div class="collapse-content"> 
    <p>ONE Hospital aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK & quality hospitals in the Middle East. Even the nurses & technicians are also proficiently trained from Bangladesh, Australia, UK, India and The Philippines.</p>
  </div>
</div>

<div tabindex="0" class="collapse collapse-arrow border border-base-300
    mt-2 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  Emergency Departments
  </div>
  <div class="collapse-content"> 
    <p>For appointment, emergency, billing & information: 10616
Land phone: +88 02 8144400
Mobile no.: +88 01713377775
24-hour emergency & ambulance service: +88 01713377775
Email: info@squarehospital.com Facebook: https://www.facebook.com/squarehospital.</p>
  </div>
</div>




      <button class="btn btn-primary mt-3">Get Started</button>

    </div>

{/* collapse */}


  </div>

</div>




<div style={{ backgroundImage:`url(${mainImage})` }} 

class="p-6 m-8  card 
 w-96 
hvr-sweep-to-top
bg-no-repeat
bg-cover
absolute 
glass">

  <div class="  card-body">

    <h2 class=" card-title" 
    >Life hack</h2>
  <div 
  data-hover="Hello, this is the tooltip"
  >
    
  <h1>hello hobwee</h1>
  </div>

</div>

{/* 
<div>    <p>How to park your car at your garage?</p>
</div> */}

    {/* <div class="card-actions justify-end">
      <button class="btn btn-primary">Learn now!</button>
    </div> */}

</div>










        </div>


    );
};

export default Home;