import "./Officials.css"
import { FaUserShield } from "react-icons/fa";
const Officials = () =>{
     return  <div className="Offcials" style={{borderRadius:"15px"}}>

                         <h3 style={{paddingTop:"30px"}}>OFFICIALS <FaUserShield style={{marginTop:"-10px"}} /></h3>

                         <div class="row" >
      <div class="col-lg-3 extra">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h4 class="fw-normal">Commisioner</h4>
        
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-3 extra">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h4 class="fw-normal">Deputy-Commisioner</h4>
       
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-3 extra">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid meet" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
        <image xlinkHref="/public/img7.png" width="100%" height="100%" style={{borderRadius:"90px"}} /></svg>
        
        <h4 class="fw-normal">Health Minister</h4>
        <p >And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
     
    </div>
    <div class="row">
      <div class="col-lg-3 extra">
      <img src="jhon.jfif" class="bd-placeholder-img rounded-circle" width="150" height="150" role="img" aria-label="Placeholder" alt="Image"/>
        <h4 class="fw-normal">Child-Welfare Minister</h4>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-3 extra">
         <div class="bd-placeholder-img rounded-circle">
      <img src="img7.png"  width="140" height="140"  role="img" aria-label="Placeholder" alt="Image" style={{borderRadius:"110px", background :"green"}}/></div>
        <h4 class="fw-normal">Women-Welfare Minister</h4>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-3 extra">
      <img src="alaska_logo.png" class="bd-placeholder-img rounded-circle"   width="140" height="140" role="img" aria-label="Placeholder" alt="Image"/>
        <h4 class="fw-normal">Social Services Director</h4>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
     
    </div>
    
     </div>
}
export default Officials;