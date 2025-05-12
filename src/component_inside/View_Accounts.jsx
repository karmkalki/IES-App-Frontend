import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import "./View_Accounts.css"
import { IoPeopleSharp } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const View_Accounts = () =>{
         const navigate = useNavigate();
    const[userAccounts,setUserAccounts]          =      useState(undefined)

    useEffect(() => {
      fetchData();
  }, []);
  
      const fetchData = async () => {
          try {
              const response = await fetch('http://localhost:8080/viewAccounts');
              if (!response.ok) {
                  throw new Error('Failed to fetch user accounts');
              }
              const data = await response.json();
              setUserAccounts(data);
          } catch (error) {
              console.error('Error fetching user accounts:', error);
              // Optionally, handle errors such as displaying an error message
          }
      };
  
     
  const handleActive = async (accountId) => {
    try {
        const response = await fetch(`http://localhost:8080/activeStatus?userId=${accountId}`
        , {
            method: 'GET', // Assuming PUT request to deactivate the account
        });
        if (!response.ok) {
            throw new Error('Failed to deactivate account');
        }
        // Assuming backend returns updated user account data along with the response
        const Data = await response.text();
        console.log(Data)
        // Update the component state with the latest data
        fetchData(); // Fetch updated data from the backend
    } catch (error) {
        console.error('Error deactivating account:', error);
    }
};

     console.log("userAccounts",userAccounts)
                      
     return (
          <div className="viewAccContent">
              <h2 style={{marginLeft:"20px", marginTop:"20px"}}>View Accounts  <IoPeopleSharp /> </h2>
         <div className="viewAccSumm">
         <h3 style={{marginBottom:"30px",marginLeft:"-100px"}}>Users <FaUsersGear />  </h3>
         <table  >
           <thead>
             <tr>
           
                       <th>S.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Gender</th>
                      <th>SSN</th>
                      <th>Edit</th>
                      <th>Action</th>
               
              </tr>
           </thead>
          <tbody>
    {userAccounts ? (
        userAccounts.map((account, index) => (
            <tr key={index}>
                <td>{index + 1}</td> {/* Serial number column */}
                <td>{account.fullName}</td>
                <td>{account.userEmail}</td>
                <td>{account.userPhno}</td>
                <td>{account.userGender}</td>
                <td>{account.userSsn}</td>
               
                <td>
    <button style={{
            width: "60px",
            marginLeft: "15px",
            marginTop: "5px",
            marginBottom: "5px",
            borderRadius: "11px",
            background: "green", // For visibility, change the color to ensure it's visible
        }}>
        <Link to={`/inside/updateAccount?userId=${account.userId}`}>
            <FaRegEdit style={{ marginLeft: "2px", color:"white" }} size={20} />
        </Link>
    </button>
</td>

                <td>
    { account.activeSt === 'Y' ? (
        <>
            <button style={{width:"60px", marginLeft:"15px", marginTop:"5px", marginBottom:"5px", borderRadius:"11px", background:"#FF474C "}} onClick={() => handleActive(account.userId)} ><RxCross2 /></button>
            
        </>
    ) : (
        <button style={{width:"60px", marginLeft:"15px", marginTop:"5px", marginBottom:"5px", borderRadius:"11px", background:"green"}}   onClick={() => handleActive(account.userId)}><IoCheckmarkSharp /></button>
    )}
</td>
                {/* Add additional fields as needed */}
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="8">Loading...</td> {/* Adjust colspan based on number of columns */}
        </tr>
    )}
</tbody>


         </table>
       </div>
       </div>
     );
}
export default View_Accounts;