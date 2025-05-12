import './Create_Plan.css'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Create_Plan  = () =>{
    const [planData, setplanData] = useState({
        planName: '',
        planCategory: '',
        planStartDateString: '',
        planEndDateString: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setplanData({ ...planData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
       e.preventDefault();
        console.log(planData)
                  
      try  {
          const response = await fetch('http://localhost:8080/createPlan', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(planData)
          });
          const data = await response.text();
          if(data=="true"){
          toast.success("Plan Created Sucessfully");
          setplanData({
            planName: '',
            planCategory: '',
            planStartDateString: '',
            planEndDateString: '',
          })
        }
        } catch (error) {
          toast.error('Error submitting form:', error);
          }
      };
     
    
      return (
          
          
                   
    
          
                 
         <div className="register-form">
    
             <p style={{fontSize:"30px",fontWeight:"400",marginTop:"10px"}}>Create Plan</p>
                
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
          <input  className="inpR" type="date" id="dob" name="planStartDateString" value={planData.planStartDateString} onChange={handleChange} required/>
        </div>

        <div className="regis" >
          <label for="dob"className="regis_label" >Plan End Date</label>
          <input  className="inpR" type="date" id="dob" name="planEndDateString" value={planData.planEndDateString} onChange={handleChange} required/>
        </div>
    
       
        <div style={{width:"200px", marginLeft:"415px"}}>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
        
      </form>
      </div>
      
      );
}
export default Create_Plan;