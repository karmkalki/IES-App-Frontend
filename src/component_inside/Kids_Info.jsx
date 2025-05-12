import { useEffect } from "react";
import { useState } from "react";
import "./Kids_Info.css"
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaChildReaching } from "react-icons/fa6";
import { toast } from "react-toastify";


const Kids_Info = () =>{

  const caseNumStorage = localStorage.getItem('caseNum');  
  const userIdStorage = localStorage.getItem('userId');
    const [KidsData, setKidsData] = useState({
        caseNumInt: caseNumStorage,
        childs:[],
        userId:userIdStorage  
      });

      const[kid1,setKid1] = useState({
              name :"",
              ssn :0,
              dob:""
      });
    
      const[kid2,setKid2] = useState({
        name :"",
        ssn :0,
        dob:""
});

      const handleChange1 = (e) => {
        const { name, value } = e.target;
        setKid1({ ...kid1, [name]: value });
      };

      const handleChange2 = (e) => {
        const { name, value } = e.target;
        setKid2({ ...kid2, [name]: value });
      };
      const handleChangeCase = (e) => {
        const { name, value } = e.target;
        setKidsData({ ...KidsData, [name]: value });
      };
      useEffect(() => {
        // Perform the action (e.g., make a POST request) after KidsData has been updated
        if (KidsData.childs.length > 0) {
           console.log(KidsData)
          // Example of making a POST request using fetch
          fetch('http://localhost:8082/childDetails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(KidsData)
          })
          .then(response => response.json())
          .then(data => {
            // Handle response data as needed
            console.log('Response from server:', data);
            if(data==true){
              toast.success("Submitted Sucessfully");
           setKid1({
            name :"",
              ssn :0,
              dob:""
           })
           setKid2({
            name :"",
              ssn :0,
              dob:""
           })
          }
          else{
            toast.error("Problem in Server!!! Try Again")
          }
          })
          .catch(error => {
            toast.error('Error submitting form:', error);
          });
        }
      }, [KidsData]);
             
      const handleSubmit = async (e) => {
        
         e.preventDefault();
        let updatedKidsData = { ...KidsData };
        console.log("inside form")
           if(!kid2.name==""){
                console.log(kid2);
            updatedKidsData = {
                ...updatedKidsData,
                childs: [...updatedKidsData.childs, kid2]
              };
           }

           if(!kid1.name==""){
            console.log(kid1)
            updatedKidsData = {
                ...updatedKidsData,
                childs: [...updatedKidsData.childs, kid1]
              };
           }
           setKidsData(updatedKidsData);
       // console.log(incomeData)
                  
       /* try {
          const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(incomeData)
          });
          const data = await response.json();
          // Handle response data as needed
          console.log('Response from server:', data);
        } catch (error) {
          console.error('Error submitting form:', error);
          }*/
      };
     
    
      return (   
          
          
                   
    
          
                 
         <div className="kids-form">
    
             <p style={{fontSize:"30px",fontWeight:"400",marginTop:"10px"}}>Kids Details <FaHandsHoldingChild /></p>

             
                
        <form className="   ki-form" >
       
        <div className="regis" >
          <label for="inputPassword4"className="regis_label" >Case Number</label>
          <input  className="inpR" type="text" id="inputPassword4" name="caseNum" value={KidsData.caseNumInt} readOnly onChange={handleChangeCase} required/>
        </div>

        <h3>Kid 1 <FaChildReaching style={{marginBottom:"7px"}} /></h3>
                <div className="inter-Form">   
        <div className="regis" >
          <label for="inputPassword1"className="regis_label" >Name</label>
          <input  className="inpK" type="text" id="inputPassword1" name="name" value={kid1.name} onChange={handleChange1} required/>
        </div>
       
       
        <div className="regis" >
          <label for="dob1"className="regis_label" >DOB</label>
          <input  className="inpK" type="date" id="dob1" name="dob" value={kid1.dob} onChange={handleChange1} required/>
        </div>

        <div className="regis" >
          <label for="ssn1"className="regis_label" >SSN </label>
          <input  className="inpK" type="text" id="ssn1" name="ssn" value={kid1.ssn} onChange={handleChange1} required/>
        </div>

        
    
       </div>
       <h3>Kid 2 <FaChildReaching style={{marginBottom:"7px"}}></FaChildReaching></h3>
       <div className="inter-Form">   
        <div className="regis" >
          <label for="inputPassword2"className="regis_label" >Name</label>
          <input  className="inpK" type="text" id="inputPassword2" name="name" value={kid2.name} onChange={handleChange2} required/>
        </div>
       
       
        <div className="regis" >
          <label for="dob2"className="regis_label" >DOB</label>
          <input  className="inpK" type="date" id="dob2" name="dob" value={kid2.dob} onChange={handleChange2} required/>
        </div>

        <div className="regis" >
          <label for="ssn2"className="regis_label" >SSN</label>
          <input  className="inpK" type="text" id="dob" name="ssn" value={kid2.ssn} onChange={handleChange2} required/>
        </div>

       
    
       </div>

       
       









        <div style={{width:"200px", marginLeft:"415px"}}>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
        
      </form>
      </div>
      
      );
      
    }
export default Kids_Info;