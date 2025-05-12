import { useState } from "react";
import "./Elig_Determine.css"
import { FiUserCheck } from "react-icons/fi";
import { FaSquareCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Elig_Determine = () =>{
  const navigate = useNavigate();
  const caseNumStorage = localStorage.getItem('caseNum'); 
   console.log(caseNumStorage) 
       
        const[eligData,setEligData]    = useState(undefined)    ;  
        
        const handleSubmit = async (e) => {
            e.preventDefault();
             
                try {
    const response = await fetch(`http://localhost:8083/elig-determine/${caseNumStorage}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    setEligData(data); // Assuming setEligState is a state updater function
    console.log('Response from server:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error as needed
  }       
            
           };
           console.log(eligData)
         

        const    handleCorr =  async () => {
            try {
              const response = await fetch(`http://localhost:8083/generate-correspondence/${caseNumStorage}`);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.text();
            
              console.log('Response from server:', data);
              navigate('/inside/correspondence');
            } catch (error) {
              console.error('Error fetching data:', error);
              // Handle error as needed
            }       
           
             
           
          };
        
        return (
          
          
                   
    
          
                 
            <div className="Elig-form">
       
               <h3>Determine Eligibility <FiUserCheck /></h3>
                   
           <form className="re-form" >
          
           <div className="regis" >
             <label for="inputPassword4"className="regis_label" >Case Number</label>
             <input  className="inpE" type="text" id="inputPassword4" name="caseNum" value={caseNumStorage} readOnly required/>
           </div>
   
          
          
          
          
   
          
       
          
           <div style={{width:"320px", marginLeft:"250px"}}>
           <button type="submit" style={{backgroundColor:"green", borderRadius:"11px"}} onClick={handleSubmit}>Determine Eligibility <FaSquareCheck /></button>
         </div>
           
         </form>
         {eligData !== undefined &&
               <div className="elSumm" style={{marginTop:"60px", marginLeft:"100px"}}>
               <h2 style={{marginBottom:"30px"}}>Elig-Report</h2>
               <table  style={{width:"800px"}}>
                 <thead>
                   <tr>
                     <th>Case Number</th>
                     <th>Plan Name</th>
                     <th>Plan Status</th>
                     <th>Plan Start Date</th>
                     <th>Plan End Date</th>
                     <th>Benifit Amount</th>
                     <th>Denial Reason</th>
                    
                     
                   </tr>
                 </thead>
                 <tbody>
                    
                     <tr>
                       <td>{eligData.caseNum}</td>
                       <td>{eligData.planName}</td>
                      <td>{eligData.planStatus}</td>
                      <td>{eligData.eligStartDate}</td>
                      <td>{eligData.eligEndDate}</td>
                      <td>{eligData.benifitAmt}</td>
                      <td>{eligData.denialReason}</td>
                     </tr>
                        
                 </tbody>
               </table>
               <div style={{width:"330px", marginLeft:"600px", marginTop:"50px"}}>
           <button type="submit" style={{backgroundColor:"green", borderRadius:"11px"}} onClick={handleCorr}>View Correspondence <FaSquareCheck /></button>
         </div>     
             </div>
            }
         </div>
         
         );

            

}
export default Elig_Determine;