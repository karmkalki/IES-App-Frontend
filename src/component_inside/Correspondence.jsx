import "./Correspondence.css"
import { useState } from "react";
import { useEffect } from "react";
import { TiPrinter } from "react-icons/ti";
import { TfiMenu } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { toast } from 'react-toastify';

const Correspondence = () =>{
  const caseNumStorage = localStorage.getItem('caseNum'); 
  console.log(caseNumStorage)
  const navigate = useNavigate();
             const[Correspondence,setCorrespondence]          =      useState(undefined)
             useEffect(() => {
              console.log("inside useEffect")
             const fetchData = async () => {
               try {
                 const response = await fetch(`http://localhost:8084/viewCorrespondence/${caseNumStorage}`);
                 if (!response.ok) {
                   throw new Error('Failed to fetch data');
                 }
                 const data = await response.json();
                 setCorrespondence(data);
               } catch (error) {
                 console.error('Error fetching data:', error);
                 // Handle error as needed, e.g., show error message
               }
             };
           
             fetchData(); // Call the fetchData function when the component mounts
           },[navigate]);

     console.log(Correspondence)

     const handleGeneratePDF = async () => {
      fetch(`http://localhost:8084/generateNotice/${caseNumStorage}`)
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
          toast.error('Server Problem');
          console.log(error)
      });
  
    };
   
    
    if(!Correspondence){
       
      <div>Loading.....</div>
    }
                     
    return (
         <div className="corrContent">
             <h2 style={{marginLeft:"20px", marginTop:"20px"}}>Correspondence  <TfiMenu  size={25}/></h2>
        <div className="corrSumm">
        <h3 style={{marginBottom:"30px"}}>Notice Section <TiPrinter /> </h3>
                    
        <table  >
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
          {Correspondence && Correspondence.caseNum ? (
              <tr>
              <td>{Correspondence.caseNum ? Correspondence.caseNum : 'N/A'}</td>
<td>{Correspondence.planName ? Correspondence.planName : 'N/A'}</td>
<td>{Correspondence.planStatus ? Correspondence.planStatus : 'N/A'}</td>
<td>{Correspondence.eligStartDate ? Correspondence.eligStartDate : 'N/A'}</td>
<td>{Correspondence.eligEndDate ? Correspondence.eligEndDate : 'N/A'}</td>
<td>{Correspondence.benifitAmt ? Correspondence.benifitAmt : 'N/A'}</td>

               <td><button onClick={handleGeneratePDF} style={{borderRadius:"11px",width:"170px", marginLeft:"20px", marginTop:"5px",marginBottom:"5px"}}>Download Notice <FaDownload /></button></td>
              </tr>
          ): (
            <p>Loading...</p>
        )}
          </tbody>
        </table>
      </div>
      </div>
    );
}
export default Correspondence;