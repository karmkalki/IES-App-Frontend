import React, { useState } from 'react';
import { CgScreen } from "react-icons/cg";
import "./SummaryScreen.css";
import {useNavigate} from 'react-router-dom'
import PlanSummary from '../summey_content/PlanSummary';
import { useEffect } from 'react';
import IncomeSummary from '../summey_content/IncomeSummary';
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";
import KidsSummary from '../summey_content/KidsSummary';
import EducationSummary from '../summey_content/EducationSummary';
import { GiConfirmed } from "react-icons/gi";

const SummaryScreen = ({  }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [summaryData, setSummaryData] = useState([]);
  const caseNumStorage = localStorage.getItem('caseNum');
  console.log(caseNumStorage) 
  const navigate = useNavigate();
/*  <SummaryTable1 data={summaryData.form1} />  */
useEffect(() => {
   console.log("inside useEffect")
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8082/summary/${caseNumStorage}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSummaryData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error as needed, e.g., show error message
    }
  };

  fetchData(); // Call the fetchData function when the component mounts
},[navigate]);
const handleNext = () => {
  setCurrentPage(currentPage + 1);
};
const handlePrevious = () => {
  setCurrentPage(currentPage - 1);
};
 console.log(summaryData)
const handleConfirm = () => {
  // Navigate to the given link after one second
  setTimeout(() => {
    navigate('/inside/eligibility');
  }, 1000);
};
  const renderTableForCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <PlanSummary Plan={summaryData.plan} />;
      case 2:
        return <IncomeSummary income={summaryData.income} />;
      case 3:
        return <KidsSummary children={summaryData.childs} />;
      case 4:
        return (
          <div>
            <EducationSummary education={summaryData.education} />
            <button onClick={handleConfirm} style={{ width: "100px", marginLeft: "600px", borderRadius: "11px", backgroundColor: "green" }}>Confirm <GiConfirmed /></button>
          </div>
        );
      default:
        return null;
    }
  };

  // Other code for pagination and navigation

  return (
    <div className='summary'>
       <h3>Summary Screen <CgScreen /></h3>
      {renderTableForCurrentPage()}
        <div className='buttonSection'>
        {currentPage > 1 && <button onClick={handlePrevious} style={{width:"100px", marginLeft:"20px" ,borderRadius:"11px"}} ><MdOutlineSkipPrevious /> Previous </button>}
      {currentPage < 4 && <button onClick={handleNext} style={{width:"100px", marginLeft:"20px", borderRadius:"11px"}}>Next <MdOutlineSkipNext /></button>}
      
      </div>
    </div>
  );
};

export default SummaryScreen;
