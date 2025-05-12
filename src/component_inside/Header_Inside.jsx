import "./Header_Inside.css"
import { TfiMenu } from "react-icons/tfi";
import { IoMdSearch } from "react-icons/io";
import { MdHealthAndSafety } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Header_Inside = () =>{
   const navigate  = useNavigate();
 
    // Function to clear localStorage
    const clearLocalStorage = () => {
      localStorage.removeItem('caseNum');
      localStorage.removeItem('userId');
      localStorage.removeItem('DBData');
      // Remove other items as needed
    };
  
    // Logout function
    const logout = () => {
      // Clear localStorage
      clearLocalStorage();
     navigate('/')
    };
     
       
       return (
     <div className='Header_Inside'>
              <img src="/alaska_logo.png" alt="alaska_logo" style={{height:"80px",width:"80px"}} />
              <div className="content1">
              <TfiMenu  style={{marginLeft:"30px", marginTop:"25px"}} size={25}/>
              <IoMdSearch style={{marginLeft:"30px", marginTop:"25px"}} size={25}/>
              <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{marginLeft:"30px", marginTop:"25px"}}>
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
        </form>
              </div>

              <div className="content2">
                   <p style={{backgroundColor:"#87cefa",fontWeight:"600",color:"black"}}><MdHealthAndSafety size={25}/>DEPARTMENT OF HEALTH AND SERVICES <GrServices size={25}/></p>
              </div>
              <div className="content3">
              <button class="btn btn-warning rounded-pill px-3" type="button" style={{marginLeft:"430px", marginTop:"17px"}}onClick={logout}>Log-Out<RiLogoutBoxRFill /></button> 
              </div>
     </div>
  )
       
       
}
export default Header_Inside;