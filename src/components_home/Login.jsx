import React, { useState } from 'react';
import "./login.css"
import { FcUnlock } from "react-icons/fc";
import { RiLoginBoxLine } from "react-icons/ri";
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import { useUser } from '../Store/dashboard_store';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


import { useContext } from 'react';


        function Login() {
            const { DBData } = useUser();
            const { setDBData } = useUser();
           
            const location = useLocation();
            const searchParams = new URLSearchParams(location.search);
    const emailFromUrl = searchParams.get('email');
    console.log(emailFromUrl);
          
            const navigate = useNavigate();
                                 const email =              useRef();
                                 const password = useRef();
                                
                               
                                  
                                
                            

                      const[Credential,setCredential]      =    useState(
                                                {
                                                     email :"",
                                                     password :""
                                                }
                                              )
                const     [unlockCred,setUnlockCred]     =                          useState(
                    {
                              email:emailFromUrl,
                              tempPwd:"",
                              confPwd:"",
                              newPwd:""
                    }
                )



                const handleChangeUp = (e) => {
                    const { name, value } = e.target;
                    setUnlockCred({ ...unlockCred, [name]: value });
                  };


                  const handleChangeLog = (e) => {
                    const { name, value } = e.target;
                    setCredential({ ...Credential, [name]: value });
                  };

                                             

                                              let requestSent = false;

                                              async function handleUnlock(event) {
                                               
                                                    event.preventDefault();
                                                  
                                                 console.log(unlockCred)
                                                    
                                               
                                                    // Function to make the request to the backend
                                                  
                                                       try {
                                                            console.log("unlockCred inside useEffect:", unlockCred);
                                                            const res = await fetch('http://localhost:8080/unlockAcc', {
                                                                method: 'POST',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify(unlockCred),
                                                            });
                                                
                                                            if (!res.ok) {
                                                                throw new Error('Network response was not ok');
                                                            }
                                                
                                                            const data = await res.text();
                                                            if (!data.includes("Account Unlocked Sucessfully....")) {
                                                                // Perform your logic here
                                                                // For example, display an error message or redirect to another page
                                                               toast.error(data)
                                                            }
                                                            else{
                                                                         toast.success(data)
                                                                        setUnlockCred({
                                                                            email:"",
                                                                            tempPwd:"",
                                                                            confPwd:"",
                                                                            newPwd:""
                                                                        })
                                                            }
                                                           
                                                        } catch (error) {
                                                            console.error("Fetch error:", error);
                                                           toast.error("An error occurred. Please try again later.");
                                                        }
                                                    };
                                                
                                                   
                                                
                                                    
                                              // Function to handle the login request
                                          
                                                 
                                              async function handleLogin(event) {
                                               
                                                    event.preventDefault();
                                                   
                                             
                                                  
                                                      

                                                 try{   const res = await fetch('http://localhost:8080/login', {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify(Credential),
                                                    });
                                            
                                                    if (!res.ok) {
                                                        throw new Error('Network response was not ok');
                                                    }
                                            
                                                    const data = await res.text();
                                                    console.log("Text Response:", data);
                                                         
                                                    if (!data.includes("/dashboard?email=")) {
                                                        // Perform your logic here
                                                        // For example, display an error message or redirect to another page
                                                       toast.error(data)
                                                    }
                                                    else {
                                                        const response = await fetch(`http://localhost:8080${data}`);
                                                        if (!response.ok) {
                                                            throw new Error('Network response was not ok');
                                                        }
                                            
                                                        const jsonData = await response.json();
                                                        console.log('Data received:', jsonData);
                                                     
                                                        localStorage.setItem('DBData', JSON.stringify(jsonData));
                                                                    
                                                        localStorage.setItem('userId', jsonData.user.userId);
                                                        console.log("just navigation")
                                                       
                                                            console.log("Just navigation");
                                                             
                                                            navigate('/inside/dashboard');
                                                         
                                                    }
                                                } catch (error) {
                                                    console.error("Fetch error:", error);
                                                    alert("An error occurred. Please try again later.");
                                                }
                                            }  
                                              
                                            
            return (
                <div className='Body'>
                <div className="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />
                    <div className="signup">
                        <form>
                            <label htmlFor="chk" aria-hidden="true" className='Label'>Unlock Acc</label>
                            <input type="text" name="tempPwd" value={unlockCred.tempPwd} placeholder="Temp Password" required=""  style={{marginTop:"20px",marginLeft:"35px"}} onChange={handleChangeUp} />
                           
                            <input type="password" name="newPwd" value={unlockCred.newPwd} placeholder="New password" required=""  style={{marginTop:"20px",marginLeft:"35px"}} onChange={handleChangeUp} />
                          
                            <input type="password"   name="confPwd" value={unlockCred.confPwd} placeholder="Confirm Password" required=""  style={{marginTop:"20px",marginLeft:"35px"}}  onChange={handleChangeUp}/>
                           
                            <button style={{marginBottom:"50px",marginTop:"20px",marginLeft:"60px"}} onClick={handleUnlock} >Unlock <FcUnlock /></button>
                        </form>
                    </div>
        
                    <div className="login">
                        <form method='post'>
                            <label htmlFor="chk" aria-hidden="true" >Login</label>
                            <input type="email" name="email"  value={Credential.email}  onChange={handleChangeLog} placeholder="Email" required="" style={{marginTop:"20px",marginLeft:"35px"}}/>
                            <input type="password"    name="password" value={Credential.password}  onChange={handleChangeLog} placeholder="Password" required="" style={{marginTop:"20px",marginLeft:"35px"}}/>
                            <button style={{marginBottom:"50px",marginTop:"20px",marginLeft:"60px"}} onClick={handleLogin}>Login <RiLoginBoxLine /></button>
                        </form>
                    </div>
                </div>
                </div>
            );
        }
        
        export default Login;
