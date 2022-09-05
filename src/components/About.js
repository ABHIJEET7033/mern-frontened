import React, {useEffect, useState}  from 'react'
import "bootstrap/dist/js/bootstrap.min.js";
import aboutpic from "../images/aboutpic.png";
import abhipic from "../images/aboutpic.png";

import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch("https://mernbackened.herokuapp.com/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
                },
               credentials:'include'
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                            <img src={userData.name === "Abhijeet Kumar" ? abhipic : aboutpic} alt="Abhi" />
                            </div>
                        </div>

                         <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{ userData.name }</h5>
                                <h6>{ userData.work }</h6>
                                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                   <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>

                                </ul>
                           </div>
                        </div>

                        
                    </div>



                    <div className="row">
                        {/* left side url  */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Work Link</p>
                    
                                <a href="https://leetcode.com/ABHI7033/" target="_abhi">Leetcode</a> <br />
                                <a href="https://www.interviewbit.com/profile/abhijeet-kumar_229" target="_abhi">interviewbit</a> <br />
                                <a href="https://www.hackerrank.com/2872000abhijeet" target="_abhi">Hackerrank</a> <br />
                                <a href="https://github.com/ABHIJEET7033" target="_abhi">Github</a> <br />
                                <a href="https://www.linkedin.com/in/abhijeet-kumar-8117401aa/" target="_abhi">linkedin</a> <br />

                            </div>
                        </div> 

                        {/* right side data toogle  */}

                     <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                            <p> User Id</p>
                                            </div>
                                            <div className="col-md-6">
                                            <p>787865454546</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>Name</p>
                                            </div>
                                            <div className="col-md-6 ">
                                                <p>{userData.name }</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>Email</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p> { userData.email }</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                               <p>Phone</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userData.phone }</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>Profession</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userData.work }</p>
                                            </div> 
                                        </div>
                            </div>
                        </div>
                    </div>
                    </div>
                

                </form>
           </div>
        </>
    )
}

export default About
