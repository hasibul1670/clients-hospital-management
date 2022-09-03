import React from 'react';

const Service = ({ser,setTreatments}) => {
    const {name,slots} = ser;
    return (


<div class=" p-8">
           <div class="card bg-gray-100  lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
<p>{
slots.length ? <span class="">{slots[0]}</span>
:<span class="text-red-500" >No Slot Available</span>
}
</p>


    <p>{slots.length}
    {slots.length>1 ? " Spaces " :" Space " } available </p>
    <div class="card-actions justify-start">
   
      <label for="modal" 
      disabled = {slots.length == 0}
      onClick={()=>setTreatments(ser)}
      class="btn btn btn-primary modal-button">Book Appointmentl
      </label>

      
    </div>
  </div>
</div> 
        </div>

        
    );
};

export default Service;