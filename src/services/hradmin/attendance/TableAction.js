import React, { useState } from "react";

const TableAction = () => {
    // states
    const [approve, setApprove] = useState("Approve");
    // const [pending, setPending] = useState("Pending");
    const [reject, setReject] = useState("Reject");
    // handlefunctions
    const handleclick = () => {
        setApprove("Approved");
        setReject("Reject");
    }
    const handleonclick = () => {
        setReject("Rejected");
        setApprove("Approve");
    }
    return (
        <>
            <div className='action-btn'>
                <a href="#" className={approve === "Approved" ? 'approve' : 'approve-btn'} onClick={() => handleclick()}>{approve}</a>
                {/* <div className='pending-btn' onClick={() => handlepending()}>{pending}</div> */}
                <a href="#" className={reject === "Rejected" ? 'reject' : 'reject-btn'} onClick={() => handleonclick()}>{reject}</a>
            </div>
        </>
    )
}

export default TableAction;