import "./PlanSummary.css"

const  PlanSummary = ({Plan}) =>{
  if (!Plan) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }
   console.log(Plan)
    return (
    <div className="plSumm">
    <h2 style={{marginBottom:"30px"}}>Plan Info</h2>
    <table  >
      <thead>
        <tr>
          <th>Case Number</th>
          <th>Plan Name</th>
          <th>Plan ID</th>
          <th>Crowd-Worker ID</th>
          
        </tr>
      </thead>
      <tbody>
         
          <tr>
          <td>{Plan.caseNum}</td>
  <td>{Plan.planName}</td>
  <td>{Plan.planId}</td>
  <td>{Plan.userId}</td>
          </tr>
       
      </tbody>
    </table>
  </div>
);                  
           
}
export default PlanSummary;