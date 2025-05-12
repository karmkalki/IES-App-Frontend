import "./SideBar.css"
import React, { useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { TfiDashboard } from "react-icons/tfi";
import { HiMiniDeviceTablet } from "react-icons/hi2";
import { IoGridOutline } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { FiDatabase } from "react-icons/fi";
import { TbReportSearch } from "react-icons/tb";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from 'react-router-dom';

    
    const Sidebar = () => {
      const [isOpenRegistration, setIsOpenRegistration] = useState(false);
      const [isOpenDC, setIsOpenDC] = useState(false);
      const [isOpenED, setIsOpenED] = useState(false);
      const [isOpenCorr, setIsOpenCorr] = useState(false);
      const [isOpenAdmin, setIsOpenAdmin] = useState(false);
     
      
    
      const toggleSubMenuRegistration = () => {
        setIsOpenRegistration(!isOpenRegistration)
      };
      const toggleSubMenuED = () => {
        setIsOpenED(!isOpenED)
      };
      const toggleSubMenuDC = () => {
        setIsOpenDC(!isOpenDC)
      };
      const toggleSubMenuCorr = () => {
        setIsOpenCorr(!isOpenCorr)
      };
      const toggleSubMenuAdmin = () => {
        setIsOpenAdmin(!isOpenAdmin)
      };
    
      return (
        <div className="sidebar">
          <ul className="menu">
            <li >
             <Link to="/inside/dashboard">
  <TfiDashboard size={25} /> DashBoard
</Link>
            </li>
            
            <li>
              <a href="#" onClick={toggleSubMenuRegistration} className={isOpenRegistration ? 'active' : ''}>
              <HiMiniDeviceTablet size={25}/>Application-Registration  {isOpenRegistration ? <MdArrowDropDown /> : <IoMdArrowDropright />}
              </a>
              {isOpenRegistration && (
                <ul className="submenu">
                  <li>
                  <Link to="/inside/registration">
                     Create Application
</Link>
<Link to="/inside/viewApplications">
                     View Applications
</Link>
                  
                  </li>
                  
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={toggleSubMenuDC} className={isOpenDC? 'active' : ''}>
              <FiDatabase  size={25}/>Data-Collection{isOpenDC ? <MdArrowDropDown /> : <IoMdArrowDropright />}
              </a>
              {isOpenDC && (
                <ul className="submenu">
                  <li>
                  <Link to="/inside/planSelection">
                    Plan-Selection
</Link>
                    <Link to="/inside/income">
                    Income-Details
</Link>
<Link to="/inside/education">
                   Education-Details
</Link>
<Link to="/inside/kids">
                  Kids-Details
</Link>                   
                    
<Link to="/inside/summary">
                 Summary Screen
</Link>         
                    
                    

                  </li>
                 
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={toggleSubMenuED} className={isOpenED ? 'active' : ''}>
              <IoGridOutline size={25}/>Eligibility-Determination {isOpenED ? <MdArrowDropDown /> : <IoMdArrowDropright />}
              </a>
              {isOpenED && (
                <ul className="submenu">
                  <li>
                  <a href="#">
                    Determine Eligibility
</a>
                  </li>
                 
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={toggleSubMenuCorr} className={isOpenCorr ? 'active' : ''}>
              <TfiMenu  size={25}/>Correspondence{isOpenCorr ? <MdArrowDropDown /> : <IoMdArrowDropright />}
              </a>
              {isOpenCorr && (
                <ul className="submenu">
                  <li>
                  <a href="#">
                    Correspondence
</a>

               <Link to="/inside/pending">
                    Pending Notices
</Link>      
                  </li>
                 
                </ul>
              )}
            </li>
            <li >
             
              <Link to="/inside/reports">
              <TbReportSearch size={25}/> Reports
</Link>
            </li>
           
            <li>
              <a href="#" onClick={toggleSubMenuAdmin} className={isOpenAdmin ? 'active' : ''}>
              <MdAdminPanelSettings size={25}/>Admin{isOpenAdmin ? <MdArrowDropDown /> : <IoMdArrowDropright />}
              </a>
              {isOpenAdmin && (
                <ul className="submenu">
                  <li>
                  <Link to="/inside/createAcc">
                     Create Account
</Link>
<Link to="/inside/createPlan">
                     Create Plan
</Link>
<Link to="/inside/viewAccounts">
                     View Accounts
</Link>
                    
<Link to="/inside/viewPlans">
                     View Plans
</Link>
                    

                  </li>
                 
                </ul>
              )}
            </li>
            
          </ul>
        </div>
      );
    };
    
    

export default Sidebar;
