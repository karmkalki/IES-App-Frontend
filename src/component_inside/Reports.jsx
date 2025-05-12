import './Reports.css'
import { TbReportSearch } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from 'react';
import { useEffect } from 'react';

const Reports = () =>{
    
    const [selectedCriteria, setSelectedCriteria] = useState({
             planName :"",
             planStatus :""
    });
    const [reportData, setReportData] = useState([]);
    
    
    
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

         const handleSubmit = async (e) => {
          e.preventDefault();
          
          // Check if selectedCriteria contains data
         
      
         
          try {
            console.log(selectedCriteria);
              const response = await fetch('http://localhost:8085/getReport', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(selectedCriteria),
               
                  
              });
      
              if (!response.ok) {
                console.log(setSelectedCriteria)
                  throw new Error('Failed to fetch report data');

              }
      
              const data = await response.json();
              setReportData(data);
          } catch (error) {
              console.error('Error fetching report data:', error);
          }
      };
      
      const handleChange = (e) => {
          const { name, value } = e.target;
          setSelectedCriteria({ ...selectedCriteria, [name]: value });
          
      };
      
console.log(selectedCriteria)
console.log(reportData)

  return (
    <div className="reportDiv-form">
    
           <h3>Reports <TbReportSearch /></h3>
                
        <form className="reports-form" >
        <div className="regis" >
          <label for="inpuRole"className="regis_label" >Plan Name</label>
          <br></br>
          <select  className="inpR"  id="inputRole" aria-label="Default select example"  name="planName" value={selectedCriteria.planName} onChange={handleChange} required style={{width:"300px", marginTop:"5px"}}>
          <option value="null">Select Plan</option>
  {planOptions.map(option => (
    <option key={option.value} value={option.text}>{option.text}</option>
  ))}
    
    </select>
        </div>
        <div className="regis" >
          <label for="inpuRole"className="regis_label" >Plan Status</label>
          <br></br>
          <select  className="inpR"  id="inputRole" aria-label="Default select example"  name="planStatus"  value={selectedCriteria.planStatus || ""}  onChange={handleChange} required style={{width:"300px", marginTop:"5px"}}>
      <option value="null">Select Status</option>
      <option value='APPROVED'>Approved</option>
      <option value="DENIAL">Denial</option>
    
    </select>
        </div>
       
    
       
        <div style={{width:"200px", marginLeft:"100px",marginTop:"38px"}}>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Search <IoSearchSharp /></button>
      </div>
        
      </form>

      <div className="RepSumm">
    <h2 style={{marginBottom:"30px",}}>Search Result</h2>
    <table  >
      <thead>
        <tr>
          <th>Case-Number</th>
          <th>SSN-Number</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone-Number</th>
          
        </tr>
      </thead>
      <tbody>
    {reportData && reportData.length > 0 ? (
        // If reportData is present and not empty
        reportData.map((rowData, index) => (
            <tr key={index}>
                <td>{rowData.caseNum}</td>
                <td>{rowData.ssn}</td>
                <td>{rowData.name}</td>
                <td>{rowData.gender}</td>
                <td>{rowData.email}</td>
                <td>{rowData.phNo}</td>
            </tr>
        ))
    ) : (
        // If reportData is empty or null
        <tr>
            <td colSpan="6">Records not available</td>
        </tr>
    )}
</tbody>
    </table>
  </div>
      </div>
      
      );

  
           
}

export default Reports;