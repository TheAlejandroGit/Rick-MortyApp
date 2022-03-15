import React from 'react';
import '../App.css';

const LocationInfo = ({location}) => {
    return (
        <div>
            
            <div>
            <h1 >{location?.name}</h1>
            <p><b>Type</b>: {location.type}</p>
			<p><b>Dimension</b>: {location.dimension}</p>
			<p><b>Population</b>: {location.residents?.length}</p>
            </div>
        </div>
    );
};

export default LocationInfo;