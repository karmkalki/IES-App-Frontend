import "./App_Registation.css"
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AppRegistration = () => {
  const userIdStored = localStorage.getItem('userId');
  console.log(userIdStored)  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phNo: '',
    gender: '',
    ssn: 0,
    dobString: '',
    userId:userIdStored
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
    console.log(formData)
     
              
    try {

      
       
        console.log(formData)

      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      // Handle response data as needed
      console.log('Response from server:', data);
       if(data==0){
         toast.error("duplicate email")
       }
       else{
        localStorage.setItem('caseNum', data);  
         toast.success("Your registration done sucessfully")
         setFormData({
          email: '',
          name: '',
          phNo: '',
          gender: '',
          ssn: 0,
          dobString: '',
          userId:userIdStored
      })
           
       }
    } catch (error) {
      console.error('Error submitting form:', error);
      }
  };
 

  return (
      
      
               

      
             
     <div className="register-form">

         <p style={{fontSize:"30px",fontWeight:"400",marginTop:"10px"}}>Create Application</p>
            
    <form className="re-form" >
    <div className="regis" >
      <label for="inputEmail4" className="regis_label">Email</label>
      <input className="inpR" type="email"  id="inputEmail4" name="email" value={formData.email} onChange={handleChange} required/>
    </div>
    <div className="regis" >
      <label for="inputPassword4"className="regis_label" >Full Name</label>
      <input  className="inpR" type="text" id="inputPassword4" name="name" value={formData.name} onChange={handleChange} required/>
    </div>
    <div className="regis" >
      <label for="inputNumber"className="regis_label" >Ph-Number</label>
      <input  className="inpR" type="text" id="inputNumber" name="phNo" value={formData.phNo} onChange={handleChange} required/>
    </div>
    <div className="regis" >
      <label for="inputGender"className="regis_label" >Gender</label>
      <br></br>
      <select  className="inpR"  id="inputGender" aria-label="Default select example"  name="gender" value={formData.gender} onChange={handleChange} required style={{width:"300px", marginTop:"5px"}}>
  <option selected>Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
    </div>
    <div className="regis" >
      <label for="dob"className="regis_label" >DOB</label>
      <input  className="inpR" type="date" id="dob" name="dobString" value={formData.dobString} onChange={handleChange} required/>
    </div>

    <div className="regis" >
      <label for="ssn"className="regis_label" >SSN</label>
      <input  className="inpR" type="number" id="ssn" name="ssn" value={formData.ssn} onChange={handleChange} required/>
    </div>

    <div style={{width:"200px", marginLeft:"415px"}}>
    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </div>
    
  </form>
  </div>
  
  );

}
export default AppRegistration;
