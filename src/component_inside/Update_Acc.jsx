import "./Create_Account.css"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import { GrUpdate } from "react-icons/gr";
const Update_Acc = () =>{

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userIdFetched = searchParams.get('userId');
               console.log(userIdFetched)

               const [accData, setaccData] = useState({
                userEmail: '',
                fullName: '',
                userPhno: '',
                userGender: '',
                userSsn: '',
                userDOB: '',
                role:'',
                userId:0
              });
            
               useEffect(() => {
                // Fetch user data only when userId is available
                if (userIdFetched) {
                    fetchUserData(userIdFetched);
                }
            }, [userIdFetched]); // useEffect will re-run whenever userId changes
        
            const fetchUserData = async (userIdFetched) => {
                try {
                    const response = await fetch(`http://localhost:8080/update?userId=${userIdFetched}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }
                    const userData = await response.json();
                   
                    setaccData(
                        {
                           userEmail:userData.userEmail,
                          
                           fullName: userData.fullName,
                           userPhno: userData.userPhno,
                           userGender: userData.userGender,
                           userSsn: userData.userSsn,
                           userDOB: userData.userDOB,
                           role:userData.role,
                           userId: userData.userId

                        }
                    )
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };

   
      const handleChange = (e) => {
        const { name, value } = e.target;
        setaccData({ ...accData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
       e.preventDefault();
        console.log(accData)
                  
        try {
          const response = await fetch('http://localhost:8080/updateExcecution', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(accData)
          });
          const data = await response.text();
        
        toast.success(data)

        } catch (error) {
         toast.error('Error submitting form:', error);
          }
      };
      console.log("data ",accData)

      if (!accData) {
        return <p>Loading...</p>;
    }
     
      return (
          
          
                   
    
          
                 
         <div className="register-form">
    
             <p style={{fontSize:"30px",fontWeight:"400",marginTop:"10px"}}>Update Account <GrUpdate /></p>
                
        <form className="re-form" >
        <div className="regis" >
          <label for="inputEmail4" className="regis_label">Email</label>
          <input className="inpR" type="email"  id="inputEmail4" name="userEmail" value={accData.userEmail} onChange={handleChange} required/>
        </div>
        <div className="regis" >
          <label for="inputPassword4"className="regis_label" >Full Name</label>
          <input  className="inpR" type="text" id="inputPassword4" name="fullName" value={accData.fullName} onChange={handleChange} required/>
        </div>
        <div className="regis" >
          <label for="inputNumber"className="regis_label" >Ph-Number</label>
          <input  className="inpR" type="text" id="inputNumber" name="userPhno" value={accData.userPhno} onChange={handleChange} required/>
        </div>
        <div className="regis" >
          <label for="inputGender"className="regis_label" >Gender</label>
          <br></br>
          <select  className="inpR"  id="inputGender" aria-label="Default select example"  name="userGender" value={accData.userGender} onChange={handleChange} required style={{width:"300px", marginTop:"5px"}}>
      <option selected>Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
        </div>
        <div className="regis" >
          <label for="dob"className="regis_label" >DOB</label>
          <input  className="inpR" type="date" id="dob" name="userDOB" value={accData.userDOB} onChange={handleChange} required/>
        </div>
    
        <div className="regis" >
          <label for="ssn"className="regis_label" >SSN</label>
          <input  className="inpR" type="number" id="ssn" name="userSsn" value={accData.userSsn} onChange={handleChange} required/>
        </div>
   
        <div className="regis" >
          <label for="inpuRole"className="regis_label" >Role</label>
          <br></br>
          <select  className="inpR"  id="inputRole" aria-label="Default select example"  name="role" value={accData.role} onChange={handleChange} required style={{width:"300px", marginTop:"5px"}}>
      <option selected>Select Role</option>
      <option value="ADMIN">Admin</option>
      <option value="CROWDWORKER">Crowd-Worker</option>
    </select>
        </div>
       
    
        <div style={{width:"200px", marginLeft:"415px", marginTop:"40px"}}>
        <button type="submit" class="btn btn-success" onClick={handleSubmit} style={{borderRadius:"13px"}}>Update <GrUpdate /></button>
      </div>
        
      </form>
      </div>
      
      );        
}

export default Update_Acc;