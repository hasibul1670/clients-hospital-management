import React from 'react';
import mainImage from '../../images/White.jpg';
import { Link } from "react-router-dom";

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
<footer class="footer bg-slate-800 text-gray-50 p-10 bg-base-300 text-base-content">
  <div>
    <span class="footer-title">SQUARE HOSPITALS LTD.</span> 
    <a class="link link-hover">18/F, Bir Uttam
Qazi Nuruzzaman Sarak,
West Panthapath,Dhaka 1205</a> 
    <a class="link link-hover">info@squarehospital.com</a> 
    <a class="link link-hover">10616</a> 
  
  </div> 
  <div>
    <span class="footer-title">BANANI</span> 
    <a class="link link-hover">House # 1, Road # 11,
Block # F, Banani,
Dhaka- 1213</a> 
    <a class="link link-hover">10616, 01313718687,
09610707334</a> 
    <a class="link link-hover">info@squarehospital.com</a> 
  </div> 
  <div>
    <span class="footer-title">Social</span> 
    <div class="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
{/* footer */}

</div>



    );
};

export default Home;