import "./KidsSummary.jsx"

const KidsSummary = ({ children }) => {
  console.log(children)
  if (!children) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }
  
  return (
     
    <div className="plSumm">
      <h2 style={{ marginBottom: "30px" }}>Kids Details</h2>
      <table>
        <thead>
          <tr>
            <th>Case Number</th>
            <th>Kid Name</th>
            <th>Kid SSN</th>
            <th>Kid DOB</th>
            <th>Crowd-Worker ID</th>
          </tr>
        </thead>
        <tbody>
          {children.childs.map((child, index) => (
            <tr key={index}>
              <td>{children.caseNumInt}</td>
              <td>{child.name}</td>
              <td>{child.ssn}</td>
              <td>{child.dob}</td>
              <td>{children.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KidsSummary;
