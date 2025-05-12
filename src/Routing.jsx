import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import Home from "./Home";
import Login from "./components_home/Login";
import Inside from "./Inside";

import { DBProvider } from "./Store/dashboard_store";

const Routing = ()=>{
    console.log("inside routing");
           return(
          
                  <DBProvider>
           <BrowserRouter>   
            
   <Routes> 
      
       <Route path='/'   element={<Home/>}    />
       <Route path='/login'  element={<Login></Login>}    />
       <Route path="/inside/*" element={<Inside />} />
       
                </Routes> 
         
           </BrowserRouter>
           </DBProvider>
          ) 
}

export default Routing;