import React from "react";
import './Categories.css'
const Categories = ({ getCategory }) => {
	return (
		<div className="box" style={{ display: 'flex', alignItems: 'center', paddingLeft: '1rem', marginBottom: '5rem' }}>
			<h2>Category: </h2>
			<select name="Categories" onChange={getCategory} required>
				<option value="react">React</option>
				<option value="node">Node</option>
				<option value="java script">Java Script</option>
				<option value="web assembly">Web Assembly</option>
				<option value="books">Books and Resources</option>
				<option value="crypto-currency">Crypto Currency</option>
				<option value="others">Others</option>
			</select>
		</div>
	);
};

export default Categories;
