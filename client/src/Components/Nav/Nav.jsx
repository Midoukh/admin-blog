import React from 'react'
import './Nav.css'
import Button from '../UI/Button'
import back from '../../Assets/back.png'
import { Link } from 'react-router-dom'
const Nav = ({ handleBlog }) => {

	return(

		<nav className="Nav">
			<div className="back-container">
				<Link to="/dashboard">
					<img className="Back" src={back} alt="Go back to dashboard"/>
				</Link>
			</div>
			<div className="publish" onClick={handleBlog}>
				<Button bg="#31326f">Publish</Button>
			</div>
			<div className="save">
				<Button bg="#ffc93c">Save</Button>
			</div>
		</nav>
	)
}

export default Nav