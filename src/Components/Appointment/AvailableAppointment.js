import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Service from './Service';

const AvailableAppointment = ({date}) => {

const [services,setServices] = useState([]);
const [treatments,setTreatments] = useState([]);
useEffect(() => {
fetch('services.json')
.then(res =>res.json())
.then(data => setServices(data));
},[])

    return (
        <div>
            <h1
        class="text-xl text-primary text-center"
            
            >Available Appointment on {format(date,'PP')}</h1>
<div class="grid grid-cols-1 md:grid-cols-2
lg:grid-cols-3 gap-5
">
    {
services.map(ser =><Service

key={ser.id}
ser={ser}
setTreatments={setTreatments}
></Service> )

    }
</div>
{treatments && <Modal
 date={date} 
 setTreatments={setTreatments}
 treatments={treatments}></Modal>}

        </div>
    );
};

export default AvailableAppointment;