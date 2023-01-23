import React from "react";
import { PageHeader } from "../../../common/PageHeader";
import { SearchBar } from "../../../common/SearchBar";
import Employee1 from "../../../assets/images/em1.png";
import Employee2 from "../../../assets/images/em2.png";
// import Cross from "../../../assets/images/cross.svg"
// import Cross from "./assets/images/cross.svg"
// import Right from "../../../assets/images/right.svg";
import CardCurrentEmp from "./CardCurrentEmp";

const NewEmployee = () => {
    const searchSchema = {
        placeholder: "searchh",
    };
    const NewEmployee = [
        {
            image: Employee1,
            email: "sanskriti@cubexo.in"
        },
        {
            image: Employee2,
            email: "sanskriti@cubexo.in"
        },
    ];
    return (
        <>
            <div className="pageBody">
                <PageHeader pageheading="New Employee Requests" />
                <div>
                    <SearchBar schema={searchSchema} />
                    <div className="LoopWrapperCardCurrentEmp">
                        {NewEmployee.map((data, index) => (
                            <CardCurrentEmp data={data} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewEmployee;
