import "./IncomeSummary.css"
const EducationSummary = ({education}) =>{
  if (!education) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }
  console.log(education)
    return (
        <div className="plSumm">
        <h2 style={{marginBottom:"30px"}}>Education Details</h2>
        <table  >
          <thead>
            <tr>
              <th>Case Number</th>
              <th>Degree</th>
              <th>University</th>
              <th>Graduation-Year</th>
              <th>Crowd-Worker ID</th>
              
            </tr>
          </thead>
          <tbody>
             
              <tr>
                <td>{education.caseNumInt}</td>
                <td>{education.highestDegree}</td>
               <td>{education.university}</td>
               <td>{education.graduationYear}</td>
               <td>{education.userId}</td>
              </tr>
           
          </tbody>
        </table>
      </div>
    );          
}
export default EducationSummary;