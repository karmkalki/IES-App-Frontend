import { useState } from "react";
import './Income_Details.css'
import { TbZoomMoney } from "react-icons/tb";
import { toast } from "react-toastify";


const IncomeDetails = () =>{

  const caseNumStorage = localStorage.getItem('caseNum');  
  const userIdStorage = localStorage.getItem('userId');
  

    const [incomeData, setincomeData] = useState({
        caseNumInt: caseNumStorage,
       salary: '',
        propertyIncome: '',
        rentIncome: '',
        userId:userIdStorage  
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setincomeData({ ...incomeData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
       e.preventDefault();
        console.log(incomeData)
                  
        try {
          const response = await fetch('http://localhost:8082/incomeDetails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(incomeData)
          });
          const data = await response.json();
          // Handle response data as needed
           if(data==true){
               toast.success("Submitted Sucessfully");
               setincomeData(
                {
                  caseNumInt: caseNumStorage,
       salary: '',
        propertyIncome: '',
        rentIncome: '',
        userId:userIdStorage 
                }
               )
           }
           else{
             toast.error("Problem in Server!!! Try Again")
           }
          console.log('Response from server:', data);
        } catch (error) {
          console.error('Error submitting form:', error);
          }
      };
     
    
      return (
          
          
                   
    
          
                 
         <div className="income-form">
    
             <p style={{fontSize:"30px",fontWeight:"400",marginTop:"10px"}}>Income Details <TbZoomMoney /></p>
                
        <form className="re-form" >
       
        <div className="regis" >
          <label for="inputPassword4"className="regis_label" >Case Number</label>
          <input  className="inpR" type="text" id="inputPassword4" name="caseNum" value={incomeData.caseNumInt} readOnly onChange={handleChange} required/>
        </div>

        <div className="regis" >
          <label for="inputPassword4"className="regis_label" >Salary</label>
          <input  className="inpR" type="text" id="inputPassword4" name="salary" value={incomeData.salary} onChange={handleChange} required/>
        </div>
       
       
        <div className="regis" >
          <label for="dob"className="regis_label" >Property Income</label>
          <input  className="inpR" type="text" id="dob" name="propertyIncome" value={incomeData.propertyIncome} onChange={handleChange} required/>
        </div>

        <div className="regis" >
          <label for="dob"className="regis_label" >Rent Income</label>
          <input  className="inpR" type="text" id="dob" name="rentIncome" value={incomeData.rentIncome} onChange={handleChange} required/>
        </div>
    
       
        <div style={{width:"200px", marginLeft:"415px"}}>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
        
      </form>
      </div>
      
      );

}

export default IncomeDetails;
