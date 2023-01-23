import React, { useState } from "react";
import { AgGridReact } from 'ag-grid-react';


//  ag Grid css for creating ui

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CustomTable = ({ rowData,columnData }) => {


    return (
        <>
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnData}
                />
            </div>
        </>
    )
}

export default CustomTable;