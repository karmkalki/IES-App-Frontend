import './Create_Plan.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GrUpdate } from "react-icons/gr";

const Update_plan = () =>{
    const [planData, setplanData] = useState({
        planName: '',
        planCategory: '',
        planStartDate: '',
        planEndDate: '',
        planId:0
      });
              
      const location = useLocation();
      const searchParams = new URLSearchParams(location.search);
      const planIdFetched = searchParams.get('planId');
                 console.log(planIdFetched)
      const handleChange = (e) => {
        const { name, value } = e.target;
        setplanData({ ...planData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
       e.preventDefault();
       
                  
      try  {
          const response = await fetch('http://localhost:8080/planUpdateExecution', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(planData)
          });
          const data = await response.text();
          // Handle response data as needed
         toast.success(data)
        } catch (error) {
          toast.error('Error submitting form:', error);
          }
      };

      useEffect(() => {
        // Fetch user data only when userId is available
        if (planIdFetched) {
            fetchUserData(planIdFetched);
        }
    }, [planIdFetched]); // useEffect will re-run whenever userId changes

    const fetchUserData = async (userIdFetched) => {
        try {
            const response = await fetch(`http://localhost:8080/updatePlan?planId=${userIdFetched}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const plData = await response.json();
            console.log(plData)
            setplanData({
                planName: plData.planName,
                planCategory:plData.planCategory,
                planEndDate:plData.planEndDate,
                planStartDate:plData.planStartDate,
                planId:plData.planId
            })
            
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
     
    console.log(planData)
      return (
          
          
                   
    
          
                 
         <div className="register-form">
    
             <p style={{fontSize:"30px",fontWeight:"400",marginTop:"10px"}}>Update Plan <GrUpdate /></p>
                
        <form className="re-form" >
       
        <div className="regis" >
          <label for="inputPassword4"className="regis_label" >Plan Name</label>
          <input  className="inpR" type="text" id="inputPassword4" name="planName" value={planData.planName} onChange={handleChange} required/>
        </div>

        <div className="regis" >
          <label for="inputPassword4"className="regis_label" >Plan Category</label>
          <input  className="inpR" type="text" id="inputPassword4" name="planCategory" value={planData.planCategory} onChange={handleChange} required/>
        </div>
       
       
        <div className="regis" >
          <label for="dob"className="regis_label" >Plan Start Date</label>
          <input  className="inpR" type="date" id="dob" name="planStartDate" value={planData.planStartDate} onChange={handleChange} required/>
        </div>

        <div className="regis" >
          <label for="dob"className="regis_label" >Plan End Date</label>
          <input  className="inpR" type="date" id="dob" name="planEndDate" value={planData.planEndDate} onChange={handleChange} required/>
        </div>
    
       
        <div style={{width:"200px", marginLeft:"415px"}}>
        <button type="submit" onClick={handleSubmit} style={{background:"green" ,borderRadius:"13px"}}>Update <GrUpdate /></button>
      </div>
        
      </form>
      </div>
      
    );
}

export default Update_plan;