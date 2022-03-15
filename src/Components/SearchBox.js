import React, { useState } from 'react';
import axios from "axios";
import '../App.css';


const SearchBox = ({setLocation}) => {
    const[typeId, setTypeId]=useState(" ");
   
    const searchLocation =()=>{
        console.log(typeId)
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
        .then(res=>setLocation(res.data))

    }
    return (
       
            <div className='search'>
            <input type="text" onChange={e=>setTypeId(e.target.value)} value={typeId} className="searchTerm"/>
            <button onClick={searchLocation} className="searchButton"><b> Search</b>  </button>
            </div>
    );
};

export default SearchBox;