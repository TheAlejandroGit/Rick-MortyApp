import React from 'react';
import ResidentInfo from './ResidentInfo';
import '../App.css';

const ResidentsList = ({habitants}) => {
    return (
        <div>
          <h2>Residents</h2>

          <div className='residentList'>
            { 
               habitants?.map(habitant=>(
                  
                <ResidentInfo habitantUrl={habitant} key={habitant}/>
                    // <div key={habitant.residents?.url}>
                    //     {habitant}
                    // </div>
                ))
            }
            </div>
        </div>
    );
};

export default ResidentsList;