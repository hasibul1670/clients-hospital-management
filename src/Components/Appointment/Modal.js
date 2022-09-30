import React from 'react';
import { format } from 'date-fns';

const Modal = ({date,treatments, setTreatments}) => {

    const{id,name,slots}= treatments;

const handleBooking =event=>{

  event.preventDefault();
  const slot1 = event.target.slot.value;
  console.log(id,name,slot1);
  setTreatments(null);

}



    return (
        <div>
            
<input type="checkbox" id="modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg ">Booking For : {name}</h3>

<form onSubmit={handleBooking} class="grid grid-cols-1 gap-3 justify-items-center mt-4">

<input type="text" value={format(date,'PP')} disabled class="input input-bordered input-primary w-full max-w-xs" />


<select name="slot"class="select select-bordered select-primary w-full max-w-xs">

{



slots && slots.map(slot=><option value={slot}> {slot} </option> )

}




</select>


<input type="text"name="name" placeholder="Your Name" class="input input-bordered input-primary w-full max-w-xs" />
<input type="text"Name="phone" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
<input type="submit" value="submit"  class="btn btn-primary w-full max-w-xs" />
</form>

    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>
{/* 72.6 ses */}
        </div>
    );
};

export default Modal;