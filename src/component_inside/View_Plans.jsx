import { useState } from "react";
import "./View_Accounts.css"
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const View_Plans = () =>{
    const[plans,setPlans]          =      useState(undefined)
    useEffect(() => {
      fetchData();
  }, []);
  
      const fetchData = async () => {
          try {
              const response = await fetch('http://localhost:8080/viewPlans');
              if (!response.ok) {
                  throw new Error('Failed to fetch user accounts');
              }
              const data = await response.json();
              setPlans(data)
          } catch (error) {
              console.error('Error fetching user accounts:', error);
              // Optionally, handle errors such as displaying an error message
          }
      };

      const handleActive = async (accountId) => {
        try {
            const response = await fetch(`http://localhost:8080/planActiveStatus?planId=${accountId}`
            , {
                method: 'GET', // Assuming PUT request to deactivate the account
            });
            if (!response.ok) {
                throw new Error('Failed to deactivate account');
            }
            // Assuming backend returns updated user account data along with the response
            const Data = await response.text();
            console.log(Data)
            // Update the component state with the latest data
            fetchData(); // Fetch updated data from the backend
        } catch (error) {
            console.error('Error deactivating account:', error);
        }
    };
      console.log(plans)
                      
     return (
          <div className="viewAccContent" style={{marginTop:"40px", height:"550px"}} >
              <h2 style={{marginLeft:"20px", marginTop:"20px"}}>View Plans<MdOutlineFormatListBulleted />  </h2>
         <div className="viewAccSumm" style={{marginTop:"20px"}}>
         <h3 style={{marginBottom:"30px",marginLeft:"-100px"}}> DHS-Plans  </h3>
         <table  >
           <thead>
             <tr>
           
                       <th>S.No</th>
                      <th>Plan Name</th>
                      <th>Plan Start Date</th>
                      <th>Plan End Date</th>
                      <th>Plan Category</th>
                      <th>Edit</th>
                      <th>Action</th>
                      
               
             </tr>
           </thead>
           <tbody>
    {plans ? (
        plans.map((plan, index) => (
            <tr key={index}>
                <td>{index + 1}</td> {/* Serial number column */}
                <td>{plan.planName}</td>
                <td>{plan.planStartDate}</td>
                <td>{plan.planEndDate}</td>
                <td>{plan.planCategory}</td>
               
               
                <td>
    <button style={{
            width: "60px",
            marginLeft: "15px",
            marginTop: "5px",
            marginBottom: "5px",
            borderRadius: "11px",
            background: "green", // For visibility, change the color to ensure it's visible
        }}>
        <Link to={`/inside/updatePlan?planId=${plan.planId}`}>
            <FaRegEdit style={{ marginLeft: "2px", color:"white" }} size={20} />
        </Link>
    </button>
</td>

                <td>
    { plan.actvieSt === 'Y' ? (
        <>
            <button style={{width:"60px", marginLeft:"15px", marginTop:"5px", marginBottom:"5px", borderRadius:"11px", background:"#FF474C "}} onClick={() => handleActive(plan.planId)} ><RxCross2 /></button>
            
        </>
    ) : (
        <button style={{width:"60px", marginLeft:"15px", marginTop:"5px", marginBottom:"5px", borderRadius:"11px", background:"green"}} onClick={() => handleActive(plan.planId)}><IoCheckmarkSharp /></button>
    )}
</td>
                {/* Add additional fields as needed */}
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="8">Loading...</td> {/* Adjust colspan based on number of columns */}
        </tr>
    )}
</tbody>

         </table>
       </div>
       </div>
     );     
}
export default View_Plans;