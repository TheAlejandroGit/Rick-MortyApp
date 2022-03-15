
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import SearchBox from"./Components/SearchBox"
import ResidentsList from "./Components/ResidentsList"
import LocationInfo from './Components/LocationInfo';

function App() {

  const[location, setLocation]= useState({})
  
  useEffect(()=>{
    const random= Math.floor(Math.random()*126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then(res=>setLocation(res.data))

  }, []);

  console.log(location);
  return (
    <div className="App"> 
    <SearchBox setLocation={setLocation}/>
    <LocationInfo location={location}/>
    <ResidentsList habitants={location?.residents}/>
    </div>
  );
}

export default App;
