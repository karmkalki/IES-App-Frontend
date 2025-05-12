import "./IncomeSummary.css"

const IncomeSummary = ({income}) =>
 
{
  console.log(income);
  if (!income) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }
    return (
        <div className="plSumm">
        <h2 style={{marginBottom:"30px"}}>Income Details</h2>
        <table  >
          <thead>
            <tr>
              <th>Case Number</th>
              <th>Salary</th>
              <th>Rent Income</th>
              <th>Property Income</th>
              <th>Crowd-Worker ID</th>
              
            </tr>
          </thead>
          <tbody>
             
              <tr>
                <td>{income.caseNumInt}</td>
                <td>{income.salary}</td>
               <td>{income.rentIncome}</td>
               <td>{income.propertyIncome}</td>
               <td>{income.userId}</td>
              </tr>
           
          </tbody>
        </table>
      </div>
    );              
}
export default IncomeSummary;