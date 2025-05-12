import { useState } from "react";
import { useEffect } from "react";
import "./Plan_Selection.css"
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { toast } from 'react-toastify';

const Plan_Selection = () =>{
  const caseNumStorage = localStorage.getItem('caseNum');
  console.log(caseNumStorage)  
  const userIdStorage = localStorage.getItem('userId');
  console.log(userIdStorage)  

    const [planData, setPlanData] = useState({
        userId: userIdStorage,
        caseNum: caseNumStorage,
        planId: 0
      });
    const [planOptions, setPlanOptions] = useState([]);
    useEffect(() => {
         console.log("useEffect called")
        // Fetch plan options from the backend API
        fetch('http://localhost:8080/viewPlans')
          .then(response => response.json())
          .then(data => {
            // Extract plan names and IDs from the response data
            const options = data.map(plan => ({ value: plan.planId, text: plan.planName }));
            setPlanOptions(options);
          })
          .catch(error => {
            console.error('Error fetching plan options:', error);
          });
      }, []);
    

       console.log(planOptions);
            
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlanData({ ...planData, [name]: value });
      };



    const handleSubmit = async (e) => {
        e.preventDefault();
       
       
    
       try {
          const response = await fetch('http://localhost:8082/planSelection', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(planData)
          });
          const data = await response.json();
          // Handle response data as needed
          console.log('Response from server:', data);
           if(data==true){
               toast.success("Selected Successfully (Fill Remaining Details) !!");
               setPlanData({
                userId: userIdStorage,
                caseNum: caseNumStorage,
                planId: 0
               })
           }
           else{
             toast.error("Problem in Server!! Try Again")
           }
           
        } catch (error) {
          toast.error('Error submitting form:', error);
        }
      };
    
        
    return (
          
          
                   
    
          
                 
        <div className="income-form">
   
            <p style={{fontSize:"30px",fontWeight:"400",marginTop:"10px"}}>Plans Selection <HiOutlineDeviceTablet /></p>
               
       <form className="plan-form" >
      
       <div className="regis" >
         <label for="inputPassword4"className="regis_label" >Case Number</label>
         <input  className="inpR" type="text" id="inputPassword4" name="caseNum" value={planData.caseNum} readOnly onChange={handleChange} required/>
       </div>


       <div className="regis" >
         <label for="inpuRole"className="regis_label" >Select Plan</label>
         <br></br>
         <select  className="inpR"  id="inputRole" aria-label="Default select example"  name="planId" value={planData.planId} onChange={handleChange} required style={{width:"300px", marginTop:"5px"}}>
         <option value="">Select Plan</option>
  {planOptions.map(option => (
    <option key={option.value} value={option.value}>{option.text}</option>
  ))}
    
   </select>
       </div>
   
      
       <div style={{width:"200px", marginLeft:"415px"}}>
       <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
     </div>
       
     </form>
     </div>
     
     );
         
}
export default Plan_Selection;