import React from 'react'
import './Auth.css'
import Button from '../../Components/UI/Button'
const Auth = ({  }) => {
	return(
		<main className="Auth">

			<form action="POST" className="Form">
				<div className="Input">
					<label htmlFor="user-name">User Name</label>
					<input type="text" placeholder='User name'/>

				</div>
				<div className="Input">
					<label htmlFor="password">Password</label>
					<input type="password" placeholder='Password'/>

				</div>

				<Button bg="rgb(118,74,188)">Log in</Button>


			</form>
		</main>

	)
}


export default Auth