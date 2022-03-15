import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const ResidentInfo = ({habitantUrl}) => {

    const[resident,setResident]= useState({});
    
        useEffect(()=>{
            
            axios.get(habitantUrl)
            .then(res=>setResident(res.data))
        
          }, [habitantUrl]);

   
    
    
    return (
        <div className='resident-info'>

            
            <img src={resident.image} alt=""/>

            <h3>{resident.name}</h3>
            <p><b>Status</b>: {resident.status}</p>
			<p>	<b>Origin</b>: {resident.origin?.name}</p>
			<p><b>Episodes where apper</b>: {resident.episode?.length}</p>
            
        </div>
    );
};

export default ResidentInfo;