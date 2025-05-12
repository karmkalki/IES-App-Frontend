import Header_Inside from "./component_inside/Header_Inside";
import SideBar from "./component_inside/SideBar";
import Footer from "./component_inside/Footer_inside";
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import DashBoard from "./component_inside/DashBoard";
import App_Registration from "./component_inside/App_Registration";
import { DBProvider } from "./Store/dashboard_store";
import Create_Account from "./component_inside/Create_Account";
import Create_Plan from "./component_inside/Create_Plan";
import IncomeDetails from "./component_inside/Income_Details";
import Education_dtls from "./component_inside/Education_dtls";
import Kids_Info from "./component_inside/Kids_Info";
import Plan_Selection from "./component_inside/Plan_Selection";
import SummaryScreen from "./component_inside/SummaryScreen";
import Reports from "./component_inside/Reports";
import Elig_Determine from "./component_inside/Elig_Dtermine";
import Correspondence from "./component_inside/Correspondence";
import Pending_Notice from "./component_inside/Pending_Notice";
import View_Accounts from "./component_inside/View_Accounts";
import View_Plans from "./component_inside/View_Plans";
import View_Applications from "./component_inside/View_Applicatons";
import Update_Acc from "./component_inside/Update_Acc";
import Update_plan from "./component_inside/Update_plan";
//<Route path="/inside/updateAccount/:userId" component={Update_Acc} />

const Inside = () =>{
     return <div className="Inside_bg" style={{backgroundColor:"#DFF2FF" ,height:"100vh" ,width:"100%"}}>
        
         <Header_Inside></Header_Inside>
         <div className="ContentInside" style={{display:"flex"}}>
        <SideBar></SideBar> 
        <Routes>
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/registration" element={<App_Registration></App_Registration>} />
        <Route path="/createAcc" element={<Create_Account></Create_Account>} />
        <Route path="/createPlan" element={<Create_Plan></Create_Plan>} />
        <Route path="/income" element={<IncomeDetails></IncomeDetails>} />
        <Route path="/education" element={<Education_dtls></Education_dtls>} />
        <Route path="/kids" element={<Kids_Info></Kids_Info>} />
        <Route path="/planSelection" element={<Plan_Selection></Plan_Selection>} />
        <Route path="/summary" element={<SummaryScreen></SummaryScreen>} />
        <Route path="/reports" element={<Reports></Reports>} />
        <Route path="/eligibility" element={<Elig_Determine></Elig_Determine>} />
        <Route path="/correspondence" element={<Correspondence></Correspondence>} />
        <Route path="/pending" element={<Pending_Notice></Pending_Notice>} />
        <Route path="/viewAccounts" element={<View_Accounts></View_Accounts>} />
        <Route path="/viewAccounts" element={<View_Accounts></View_Accounts>} />
        <Route path="/viewPlans" element={<View_Plans></View_Plans>} />
        <Route path="/viewApplications" element={<View_Applications></View_Applications>} />
        <Route path="/updateAccount" element={<Update_Acc></Update_Acc>} />
        <Route path="/updatePlan" element={<Update_plan></Update_plan>} />
       
       


        
        
        
      </Routes>
      </div>
        <Footer></Footer>  
       

        </div>
      
}

export default Inside;