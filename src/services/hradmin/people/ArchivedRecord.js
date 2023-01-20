import React from "react";
import { PageHeader } from "../../../common/PageHeader";
import { SearchBar } from "../../../common/SearchBar";
import Employee1 from "../../../assets/images/em1.png";
import Employee2 from "../../../assets/images/em2.png";
import CardCurrentEmp from "./CardCurrentEmp";
import { DropDown } from "../../../common/FormFields/DropDown";

const Archived = () => {
    /*Schemas*/
    const searchSchema = {
        placeholder: "searchh",
    };
    const dropDownSchemaDepartment = {
        header: "Department",
        iconClass: "iconBlackArrowDown",
        options: ["IT", "Marketing", "HR"]
    }
    const dropDownSchemaEmployees = {
        header: "Employees",
        iconClass: "iconBlackArrowDown",
        options: ["Present Today", "Absent Today", "On leave"]
    }
    const archivedRecord = [
        {
            name: "nisha",
            designation: "software engineer",
            team: "FrontEnd Team",
            image: Employee1,
            date: '21 Nov 22 - 21 Nov 23',
        },
        {
            name: "nisha",
            designation: "software engineer",
            team: "FrontEnd Team",
            image: Employee2,
            date: '21 Nov 22 - 21 Nov 23',
        },
        {
            name: "nisha",
            designation: "software engineer",
            team: "frontend team",
            image: Employee1,
            date: '21 Nov 22 - 21 Nov 23',
        },
        {
            name: "nisha",
            designation: "software engineer",
            team: "frontend team",
            image: Employee2,
            date: '21 Nov 22 - 21 Nov 23',
        },
        {
            name: "nisha",
            designation: "software engineer",
            team: "frontend team",
            image: Employee1,
            date: '21 Nov 22 - 21 Nov 23',
        },
        {
            name: "nisha",
            designation: "software engineer",
            team: "frontend team",
            image: Employee2,
            date: '21 Nov 22 - 21 Nov 23',
        },
        {
            name: "nisha",
            designation: "software engineer",
            team: "frontend team",
            image: Employee1,
            date: '21 Nov 22 - 21 Nov 23',
        },
        {
            name: "nisha",
            designation: "software engineer",
            team: "frontend team",
            image: Employee2,
            date: '21 Nov 22 - 21 Nov 23',
        },
    ];

    const renderFiltersRow = () => {
        const renderDepartmentFilter = () => {
            return (
                <DropDown schema={dropDownSchemaDepartment} />
            );
        }
        const renderEmployeeFilter = () => {
            return (
                <>
                    <DropDown schema={dropDownSchemaEmployees} />
                </>
            )
        }
        return (
            <>
                <div className="filtersRow filter-drop">
                    {renderDepartmentFilter()}
                    {renderEmployeeFilter()}
                </div>
            </>
        )
    }

    return (
        <>
            <div className="pageBody archivedrecord">
                <PageHeader pageheading="Archived Records (12)" />
                <div className="archieve-header">
                    <div>
                        <SearchBar schema={searchSchema} />
                    </div>
                    <div>
                        {renderFiltersRow()}
                    </div>
                </div>
                <div className="LoopWrapperCardCurrentEmp">
                    {archivedRecord.map((data, index) => (
                        <CardCurrentEmp data={data} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Archived;