import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date,setDate} ) => {
  
    return (
        <div>
            <div class="hero bg-gray-200  min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />


    <div>
    <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
    
    />

    </div>

  
  </div>
</div>
        </div>
    );
};

export default AppointmentBanner;