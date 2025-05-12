import { useState } from "react";
import './View_Applications.css';
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { useEffect } from "react";

const View_Applications = () =>{
    const[applications,setApplications]          =      useState(undefined)
    const userIdStorage = localStorage.getItem('userId');
    console.log(userIdStorage) 

    useEffect(() => {
       if(userIdStorage){
      fetchData();}
  }, []);
  
      const fetchData = async () => {
          try {
              const response = await fetch(`http://localhost:8081/viewAllApplication/${userIdStorage}`);
              if (!response.ok) {
                  throw new Error('Failed to fetch user accounts');
              }
              const data = await response.json();
              
              setApplications(data)
          } catch (error) {
              console.error('Error fetching user accounts:', error);
              // Optionally, handle errors such as displaying an error message
          }
      };
      console.log(applications)
      
                      
     return (
          <div className="viewAppContent">
              <h2 style={{marginLeft:"20px", marginTop:"20px"}}>View Applications <HiOutlineDeviceTablet /> </h2>
         <div className="viewAppSumm">
         <h3 style={{marginBottom:"30px",marginLeft:"-100px"}}> Applications </h3>
         <table  >
           <thead>
             <tr>
           
                       <th>S.No</th>
                       <th>Case-Num</th>
                      <th> Name</th>
                      <th>Email</th>
                      <th>Phone number</th>
                      <th>Gender</th>
                      
                      <th>SSN</th>
                      
               
             </tr>
           </thead>
           <tbody>
           {applications ? (
        applications.map((application, index) => (
            <tr key={index}>
                <td>{index + 1}</td> {/* Serial number column*/ }
                <td>{application.caseNum}</td>
                <td>{application.name}</td>
                <td>{application.email}</td>
                <td>{application.phNo}</td>
                <td>{application.gender}</td>
                <td>{application.ssn}</td>
               
               
            
                {/* Add additional fields as needed */}
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="8">Loading...</td> {/* Adjust colspan based on number of columns*/ }
        </tr>
    )}
   
</tbody>

         </table>
       </div>
       </div>
     );     
     
}
export default View_Applications;