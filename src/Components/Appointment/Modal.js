import React from 'react';

const Modal = ({treatments}) => {
    const{name,slots}= treatments;
    return (
        <div>
            
  

<input type="checkbox" id="modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg ">Booking For : {name}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>
{/* 72.5 ses */}
        </div>
    );
};

export default Modal;