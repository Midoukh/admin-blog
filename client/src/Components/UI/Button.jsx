import React from 'react'
import './Button.css'

const Button = ({ children, bg  }) => {
	return(

		<button className="Button" style={{ backgroundColor: bg }}>{children}</button>

	)
}


export default Button