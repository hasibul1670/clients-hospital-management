import React from 'react';
import mainImage from '../../images/White.jpg';
import { Link } from "react-router-dom";
import Footer from '../Shared/Footer';

const Home = () => {
    ///fragment  for navigation <> </>// 
    const menus = <>

    <li></li>


</>
///fragment  for navigation <> </>// 


    return (
        <div class="">
   

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




      <button class="btn btn-primary mt-3">  <Link to = "/appointment">Book An Appointment</Link></button>

    </div>

{/* collapse */}


  </div>

</div>
<div class ="text-center  divide-x-8 ">
<h2 class="text-rose-500 text-4xl font-semibold
border-b-4 border-teal-600  
" >
  SQUARE CENTRE OF EXCELLENCE</h2>
  

<h2 class="text-cyan-30 text-2xl">ALL CENTRES OF EXCELLENCE</h2>
</div>


<div class="p-6 mb-6 
   <div
 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
columns-4 mx-auto
 bg-orange-200


">
<div class="card w-64 hvr-sweep-to-top bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card w-64 hvr-sweep-to-top bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card w-64 hvr-sweep-to-top bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card w-64 hvr-sweep-to-top bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>


{/* stats */}

<div class="flex p-4 bg-green-500 justify-center">

<div class="stats stats-vertical w-4/5 lg:stats-horizontal shadow">
  
  <div class="stat">
    <div class="stat-title">Consultation Rooms</div>
    <div class="stat-value">150</div>
    
  </div>
  
  <div class="stat">
    <div class="stat-title">In Patients Bed</div>
    <div class="stat-value">4,200</div>
    
  </div>
  
  <div class="stat">
    <div class="stat-title">Staff </div>
    <div class="stat-value">5000+</div>

  </div>
  
</div>



</div>
{/* stats */}

{/* footer */}
<Footer></Footer>
{/* footer */}

</div>



    );
};

export default Home;