import "./Pending_Notice.css"
import { useState } from "react";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

const Pending_Notice = () =>{
    const[caseNum,setCaseNum]           =          useState(0);
    const[respData,setRespData]    = useState(undefined)    ; 

   
    const fetchData = async (e) => {
      e.preventDefault();
       try {
         const response = await fetch(`http://localhost:8084/viewCorrespondence/${caseNum}`);
         if (!response.ok) {
           throw new Error('Failed to fetch data');
         }
         const data = await response.json();

         setRespData(data)
       } catch (error) {
         console.error('Error fetching data:', error);
         // Handle error as needed, e.g., show error message
       }
     };
     const handleChange = (e) => {
      
      setCaseNum(e.target.value);
    };
        console.log(respData)

        const handleGeneratePDF = async () => {
          fetch(`http://localhost:8084/generateNotice/${respData.caseNum}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.blob();
          })
          .then(blob => {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'Notice.pdf';
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
          })
          .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
          });
      
        };
    
    return (
          
          
               
       
    
          
                 
        <div className="PendDiv-form">
   
           <h3>Pending Notices <MdOutlinePendingActions /></h3>
               
       <form className="pend-form" >
      
       <div className="regis" >
         <label for="inputPassword4"className="regis_label" >Case Number</label>
         <input  className="inpE" type="text" id="inputPassword4" name="caseNum" value={caseNum} onChange={handleChange} required/>
       </div>

      
      
      
      

      
   
      
       <div style={{width:"220px", marginLeft:"250px"}}>
       <button type="submit" style={{backgroundColor:"green", borderRadius:"11px"}} onClick={fetchData}>Search <MdOutlineContentPasteSearch /></button>
     </div>
       
     </form>
     {respData !== undefined &&
           <div className="elSumm" style={{marginTop:"30px"}}>
           <h2 style={{marginBottom:"30px"}}>App-Details</h2>
           <table style={{width:"900px"}}  >
             <thead>
               <tr>
               <th>Case Number</th>
                     <th>Plan Name</th>
                     <th>Plan Status</th>
                     <th>Plan Start Date</th>
                     <th>Plan End Date</th>
                     <th>Benifit Amount</th>
                     <th>Print Notice</th>
                
                 
               </tr>
             </thead>
             <tbody>
          {respData && respData.caseNum ? (
              <tr>
              <td>{respData.caseNum ? respData.caseNum : 'N/A'}</td>
<td>{respData.planName ? respData.planName : 'N/A'}</td>
<td>{respData.planStatus ? respData.planStatus : 'N/A'}</td>
<td>{respData.eligStartDate ? respData.eligStartDate : 'N/A'}</td>
<td>{respData.eligEndDate ? respData.eligEndDate : 'N/A'}</td>
<td>{respData.benifitAmt ? respData.benifitAmt : 'N/A'}</td>

               <td><button onClick={handleGeneratePDF} style={{borderRadius:"11px",width:"170px", marginLeft:"20px", marginTop:"5px",marginBottom:"5px"}}>Download Notice <FaDownload /></button></td>
              </tr>
          ): (
            <p>Loading...</p>
        )}
          </tbody>
           </table>
         </div>
        }
     </div>
     
     );

}
export default Pending_Notice;