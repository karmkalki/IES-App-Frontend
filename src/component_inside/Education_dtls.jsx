import "./Education_dtls.css"
import { useState } from "react";
import { MdCastForEducation } from "react-icons/md";
import { toast } from "react-toastify";

const Education_dtls = () =>{

  const caseNumStorage = localStorage.getItem('caseNum');  
  const userIdStorage = localStorage.getItem('userId');
    const [educationData, seteducationData] = useState({
        caseNumInt: caseNumStorage,
       graduationYear: '',
       university : '',
        highestDegree: '',
        userId:userIdStorage  
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        seteducationData({ ...educationData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
       e.preventDefault();
        console.log(educationData)
                  
        try {
          const response = await fetch('http://localhost:8082/educationDetails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(educationData)
          });
          const data = await response.json();
          // Handle response data as needed
          console.log('Response from server:', data);
          if(data==true){
            toast.success("Submitted Sucessfully");
           seteducationData(
            {
              caseNumInt: caseNumStorage,
       graduationYear: '',
       university : '',
        highestDegree: '',
        userId:userIdStorage  
            }
           )
        }
        else{
          toast.error("Problem in Server!!! Try Again")
        }
        } catch (error) {
          console.error('Error submitting form:', error);
          }
      };
     
    
      return (
          
          
                   
    
          
                 
         <div className="income-form">
    
             <p style={{fontSize:"30px",fontWeight:"400",marginTop:"10px"}}>Education Details <MdCastForEducation /></p>
                
        <form className="re-form" >
       
        <div className="regis" >
          <label for="inputPassword4"className="regis_label" >Case Number</label>
          <input  className="inpR" type="text" id="inputPassword4" name="caseNum" value={educationData.caseNumInt} readOnly onChange={handleChange} required/>
        </div>

        <div className="regis" >
          <label for="inputPassword4"className="regis_label" >Highest Degree</label>
          <input  className="inpR" type="text" id="inputPassword4" name="highestDegree" value={educationData.highestDegree} onChange={handleChange} required/>
        </div>
       
       
        <div className="regis" >
          <label for="dob"className="regis_label" >University Name</label>
          <input  className="inpR" type="text" id="dob" name="university" value={educationData.university} onChange={handleChange} required/>
        </div>

        <div className="regis" >
          <label for="inpuRole"className="regis_label" >Graduation-Year</label>
          <br></br>
          <select  className="inpR"  id="inputRole" aria-label="Default select example"  name="graduationYear" value={educationData.graduationYear} onChange={handleChange} required style={{width:"300px", marginTop:"5px"}}>
      <option selected>Select Year</option>
      <option value='2022'>2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option><option value="2016">2016</option>
      <option value="2015">2015</option>
    </select>
        </div>
    
       
        <div style={{width:"200px", marginLeft:"415px"}}>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
        
      </form>
      </div>
      
      );
}

export default Education_dtls;