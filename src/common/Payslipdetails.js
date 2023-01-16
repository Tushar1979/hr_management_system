import React from 'react'

const schema = {
  header: "january 22",
  durationFrom: "1 January",
  durationTo: '31 January',
  earningdetail: {
    Basic: "30000",
    LeaveEncashment: "2,980.00",
    HRA: "15,000.00",
    OtherAllowance: "10,000",
    SplAllowance: "15,000",
    Total: '0000.00',

  },
  deduction: {
    EmployeePfContribution: "30,000.00",
    IncomeTax: "1,000.00",
    Insurance: "1,5000.00",
    Total: "0000.00"
  }
}

const Payslipdetails = () => {

  const { header, durationFrom, durationTo, earningdetail,
    deduction } = schema;

  const renderHeader = () => {
    return <h2>{header}</h2>
  }
  const renderEarndetail = () => {
    return (
      <>
        <div className='title'>Earning Detail</div>
        <hr />
        {Object.keys(earningdetail).map((item, index) => {
          return (
            <div className='earnitem' item={index}>
              <div> 
            {item}: 
            </div>
            <div>
            {earningdetail[item]}
            </div>
            </div>
          );
        })}

      </>
    )
  }
  const renderDeductiondetail = () => {
    return (
      <>
        <div className='title'>Deduction detail</div>
        <hr />
        <div>
          {Object.keys(deduction).map((item, index) => {
            return (
              <div className='deductitem' item={index}>
               <div>
                {item}:
                </div>
                <div>
                 {deduction[item]}
              </div>
              </div>

            );
          })}
        </div>

      </>
    )

  }
  return (
    <>
      <div className='Payslipwrapper'>
       <div className='Payslipwrapper'>
        {renderHeader()}
        </div>
        <div className='bt'>
        <button className='btn btn-dark text-capitalize dayStatus-btn'>Download</button>
        <button className='btn btn-dark text-capitalize dayStatus-btn'>Raise Issue</button>
       
        </div>
       
        <div className='pay'>{`Duration: ${durationFrom} - ${durationTo}`}</div>
          <div className='pay'>Earning Details</div>
          <div className='container'>
        <div className='earning'>
          {renderEarndetail()}
        </div>
        <div className='duration'>
          {renderDeductiondetail()}
          </div>
        </div>
      </div>

    </>
  )
}

export default Payslipdetails
