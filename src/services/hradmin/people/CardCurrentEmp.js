/*
const empRecord = [
	{
	  name: "kavita",
	  designation : "software engineer",
	  team : "frontend team",
	  image : Employee1
	},
]
<CardCurrentEmp data ={empRecord} />
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cross from "../../../assets/images/cross.svg";
import Right from "../../../assets/images/right.svg";

const CardCurrentEmp = ({ data, schema }) => {
	const renderapprovereject = () => {
		// const [buttons, setButtons] = useState(false);
		if(!schema)
		return (
			<>
				<div className="newemployeeapprove">
					<span><img src={Cross} /></span>
					<span><img src={Right} /></span>
				</div>
			</>
		)
	}
	return (
		<>
			<div className="CardCurrentEmpWrapper">
				<Link to={data.name}>
					<div className="empCard">
						<img src={data.image} className="empImage" />
						<div className="cardHeading">{data.name}</div>
						<h4>{data.designation}</h4>
						<p>{data.team}</p>
						<h5>{data.email}</h5>
						<span>{data.date}</span>
						{renderapprovereject()}
					</div>
				</Link>
			</div>
		</>
	);
};

export default CardCurrentEmp;