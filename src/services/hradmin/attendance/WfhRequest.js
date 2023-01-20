import React, { useState } from 'react';
import { FormProcessor } from '../../../common/FormFields/FormProcessor';
import { PageHeader } from '../../../common/PageHeader';
import { SearchBar } from '../../../common/SearchBar';
import CollectionList from '../../../common/table/CollectionList';
import TableAction from './TableAction';


const WfhRequest = () => {
    // otherhooks
    const searchSchema = {
        placeHolder: "Search"
    }

    const formSchema = {
        submitEnable: "true",
        formEditable: "true",
        schema: [
            {
                type: "dropdown",
                schema: {
                    header: "Filter",
                    options: ["Last 7 Days", "Last Month"],
                },
            },
        ],
    }

    // renderfunctions
    const customrender = () => {
        return (
            <TableAction />
        )
    }

    // schemas
    const tableSchema = {
        tHead: ["Sr No", "Name", "Request Date", "Start Date ", "End Date", "Duration (Days)", "Action"],
        tData: [
            {
                id: "1",
                items: ["1", "Pinal", "2019-08-14", "2019-08-09", "2019-08-09", "1", customrender()],
            },
            {
                id: "2",
                items: ["2", "Pinal", "2019-08-14", "2019-08-09", "2019-08-09", "2", customrender()],
            },
            {
                id: "3",
                items: ["3", "Pinal", "2019-08-14", "2019-08-09", "2019-08-09", "3", customrender()],
            },
            {
                id: "4",
                items: ["4", "Pinal", "2019-08-14", "2019-08-09", "2019-08-09", "4", customrender()],
            },
            {
                id: "5",
                items: ["5", "Pinal", "2019-08-14", "2019-08-09", "2019-08-09", "5", customrender()],
            },
        ],
    };
    return (
        <>
            <div className='LeaveWrapper pageBody'>
                <PageHeader pageheading="WFH Requests" />
                <div className='d-flex'>
                    <SearchBar schema={searchSchema} />
                    <div className='ms-5'><FormProcessor schema={formSchema} /></div>
                </div>
                <CollectionList schema={tableSchema} />
            </div>
        </>
    );
}

export default WfhRequest;