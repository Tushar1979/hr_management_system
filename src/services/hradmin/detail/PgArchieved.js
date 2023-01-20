import React from 'react'
import { SearchBar } from '../../../common/SearchBar'
import CardCurrentEmp from './CardCurrentEmp'
import Employee1 from '../../../assets/images/em1.png'
import { DropDown } from '../../../common/FormFields/DropDown'

const PgArchieved = () => {
	const empRecord = [
		{
			name: "Aish",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "Aish",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "Aish",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "Aish",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "Aish",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "Aish",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "Aish",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "Aish",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
	]

	const SearchSchema = {
		placeholder: "searchh"
	}
	const dropDownSchemaDepartment = {
		header:"Department",
		iconClass:"iconBlackArrowDown",
		options:["IT", "Marketing","HR"]
	}
   const yearEmpdata={
	header:"Year",
	options:["2000","2001","2003"] 

   }
	return (
		<>
			<div className='PgArchievedWrapper'>
				<div className='Main-drop'>
				
                 <div className='drop'>
				 <SearchBar schema={SearchSchema} />
				 </div>
				 <div className='drop-item'>
				 <DropDown schema={dropDownSchemaDepartment} />
				 </div>
				 <div className='drop-item'>
				 <DropDown schema={yearEmpdata} />
				 </div>
				 </div>
				{/* <CardCurren data={EmpRecord}/> */}

				<div className="LoopWrapperCardCurrentEmp">
					{empRecord.map((data, index) => (
						<CardCurrentEmp data={data} key={index} />
					))}
				</div>
               
			</div>

		</>
	)
}

export default PgArchieved
