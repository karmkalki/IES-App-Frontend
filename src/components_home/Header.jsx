import "./Header.css"
import { Link } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { GrServices } from "react-icons/gr";
const Header = () =>{
    return  <div className="Header">
                              <nav>
                            <div className="image"> <img src="alaska_logo.png" alt="logo" style={{height:"130px", width:"130px"}}></img></div> 
                          <div className="links">
                    <ul>
                         <li>Home</li>
                         <li>Services</li>
                         <li>Departments</li>
                         <li>Officials</li>
                         <li>
                      <button style={{backgroundColor:"white", color:"black", width:"90px", borderRadius:"7px" ,}}><Link to="/login" style={{textDecoration:"none",color:"black"}}>Login<RiLoginBoxLine /></Link></button>
</li>


                    </ul>
                    </div>

                              </nav>
                    <div className="declare">
                         
                    <h1>Governmnet Of Alaska State </h1>
               
       <a href="" class="hero-btn">Visit Us to know more</a>


                    </div>
                   
                   <div className="Dhs">
                           <p style={{fontWeight:"700",color:"black",marginLeft:"60px"}}><MdHealthAndSafety size={25}/>Department Of Health & Services<GrServices size={25}/></p>

                   </div>
    
 </div>
}
export default Header;