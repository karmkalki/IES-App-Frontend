import { FaUserAlt } from "react-icons/fa";
import './DashBoard.css'
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from '../Store/dashboard_store';


import { useContext } from "react";


const DashBoard = () =>{
  const storedData = localStorage.getItem('DBData');
   
  const userId = localStorage.getItem('userId');
  console.log(userId)      ;
  const DBData = storedData ? JSON.parse(storedData) : null;
              
  
  // Now you can use DBData in your dashboard component
  console.log(DBData);
  
      
     return <div className='DashBoard'>
                   
                            <div className='Card-Details'>
                            <div class="card text-bg-info mb-3" style={{width:"280px",height:"180px",marginLeft:"30px",marginTop:"35px"}}>
  <div class="card-header">No Of Plans Available</div>
  <div class="card-body">
    <h4 class="card-title">{DBData.planCnt}</h4>
      
    <p class="card-text"style={{fontWeight:"500", color:"black"}}>jan 2024 - April 2024</p>
  </div>
</div>

<div class="card text-bg-warning mb-3" style={{width:"280px",height:"180px",marginLeft:"15px",marginTop:"35px"}}>
  <div class="card-header">Citizen Approved</div>
  <div class="card-body">
    <h4 class="card-title">{DBData.approvedCnt}</h4>
    <p class="card-text"style={{fontWeight:"500", color:"black"}}>jan 2024 - April 2024</p>
  </div>
</div>
<div class="card text-bg-danger mb-3" style={{width:"280px",height:"180px",marginLeft:"15px",marginTop:"35px"}}>
  <div class="card-header">Citizen Denied</div>
  <div class="card-body">
    <h4 class="card-title">{DBData.denialCnt}</h4>
    <p class="card-text" style={{fontWeight:"500", color:"black"}}>jan 2024 - April 2024</p>
  </div>
</div>
<div class="card text-bg-dark mb-3" style={{width:"280px",height:"180px",marginLeft:"15px",marginTop:"35px"}}>
  <div class="card-header">Benifits Given</div>
  <div class="card-body">
    <h4 class="card-title">{DBData.benifitAmt}$</h4>
    <p class="card-text"style={{fontWeight:"500", color:"black"}}>jan 2024 - April 2024</p>
  </div>
</div>




                            </div>

                            <div className='Personal-Details' style={{marginTop:"10px",marginLeft:"30px"}}>
                            
                             Welcome Back!!!! {DBData.user.fullName} <FaUserAlt size={20} style={{marginLeft:"8px",marginBottom:"4px"}}/>
    </div>


                            </div>
     
         
}
export default DashBoard;