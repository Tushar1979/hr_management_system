import React from "react"
import { SearchBar } from "../../../common/SearchBar"
import { EmpCard } from "./EmployeeCard"
import { EventCard } from "../../../common/EventCard"
import Employee1 from '../../../assets/images/em1.png'
import Employee2 from '../../../assets/images/em2.png'
import { PageHeader } from "../../../common/PageHeader"
export const CurrentEmp = () => {
    const searchSchema = {
        placeholder :"Search Employee"
    }
    const empRecord = [
        {
          name: "kavita",
          designation : "software engineer",
          team : "frontend team",
          image : Employee1
        },
        {
          name: "kavita",
          designation : "software engineer",
          team : "frontend team",
          image : Employee2,
        },
        {
          name: "kavita",
          designation : "software engineer",
          team : "frontend team",
          image : Employee1
        },
        {
          name: "kavita",
          designation : "software engineer",
          team : "frontend team",
          image : Employee2,
        },
        {
          name: "kavita",
          designation : "software engineer",
          team : "frontend team",
          image : Employee1,
        },
        {
          name: "kavita",
          designation : "software engineer",
          team : "frontend team",
          image : Employee2,
        },
        {
          name: "kavita",
          designation : "software engineer",
          team : "frontend team",
          image : Employee1
        },
        {
          name: "kavita",
          designation : "software engineer",
          team : "frontend team",
          image : Employee2,
        },
    ]
    console.log(empRecord.length)
    // for event card object
    const eventList = [
      "Meaghan Cpmpigotto",
      "Meaghan Cpmpigotto",
      "Meaghan Cpmpigotto",
      "Meaghan Cpmpigotto"
    ]
    const documentApprove = [
      "request-for-approval",
      "request-for-approval",
      "request-for-approval",
      "request-for-approval"
    ]

    const renderBody=(arr)=>{
      // console.log(arr)
      return(
        <>
          {
           <ul className="eventList">
              {
                arr.map((data)=> <li>{data}</li>)
              }
           </ul>
          }
        </>
      )
  }
    return(
        <>
            <div class="CurrentEmp pageBody">
              <div className="my-3">
                <PageHeader pageheading={`Current employee (${empRecord.length})`}/>
              </div>
              <div className="d-flex">
                  <div className="mt-3">
                    <SearchBar schema={searchSchema}/>
                    <EmpCard empData ={empRecord}/>
                  </div>
                  <div className="mt-5 ms-3"> 
                    <EventCard title="Pending information" renderBody={()=>renderBody(eventList)}/>
                    <EventCard title="Pending information" renderBody={()=>renderBody(documentApprove)}/>
                  </div>
              </div>
            </div>
        </>
    )
}