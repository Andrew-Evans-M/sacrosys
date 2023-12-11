import React from 'react'
import "../../assets/css/login.css"
import img1 from "../../assets/images/login/Main.png"
import img2 from "../../assets/images/login/Mac.png"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function UserLogin() {

  	const navigate = useNavigate();

  	const handleClick = () => {
       navigate("/dashBoard")
  	}

  return (
			<>
			<div className="mainCont">
				<div className="headerCont">
					<h4>Logo</h4>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-brightness-high" viewBox="0 0 16 16">
						<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
					</svg>
				</div>
				<div className="container mt-5">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
							<div className="imgMainCont">
								<img className='laptopImage' src={img1}></img>
								<img className="screenContent" src={img2}></img>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
							<div className="inputTextCont">
								<p>"Welcome to the future of restaurant reporting!We're serving up a fresh approach to streamlineyour restaurant management, making data deliciouslyeasy to digest."</p>
							</div>
							<div className="inputLoginCont">
								<div className="textFieldCont">
									<TextField className='mt-2 fieldSec' id="outlined-basic" label="Email" variant="outlined" />
									<TextField className='mt-2 fieldSec' id="outlined-basic" label="Password" variant="outlined"/>
									<Button onClick={() => handleClick()} className='mt-4 fieldBtn'>Login</Button>
									<p>By continuing. you agree to (name)’s Terms ofservice and Privacy policy  </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</>
    
    
  )
}

export default UserLogin