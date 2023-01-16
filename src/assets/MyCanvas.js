import React, {useState,useEffect,useMemo} from "react";
import { SearchBar } from "../common/SearchBar";
import Popup from "../common/Popup";
import Payslipdetails from "../common/Payslipdetails";
const MyCanvas = () => {
    const[watch,setWatch]=useState(false);
    const Render=()=>{
        return(
            <>
            <div>
                <h2>Hy Shubh</h2>
            </div>
            </>
        )

    }
    const modalschema={
        titleModal: "Add Event",
    customBody: Render(),
    buttons: ["cancel", "submit"],
    }
    const searchSchema = {
        placeholder :"searchh"
        
      }
     
        
      
 
  return (
    <>
    <div>
        {/* <SearchBar schema={searchSchema}/>
        <div className="App">
      <button onClick={(e) => setWatch(true)}>Show Modal</button>
        <Popup schema={modalschema} show={watch}/>  */}
        <Payslipdetails/>
    
      
    </div>
    </>
  )
}

export default MyCanvas