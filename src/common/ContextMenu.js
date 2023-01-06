/*
use like this
const contextData = [
  {
      item:"view all",
      path: 'view',
      icon: Notification,
  },
  {
      item:"view all",
      path: 'view',
      icon: Notification,
  },
  {
      item:"view all",
      path: 'view',
      icon: Notification,
  },
  {
      item:"view all",
      path: 'view',
      icon: Notification,
  },
]

<ContextMenu contextData={contextData}/>
*/

import React, { useState } from "react"
import { Link } from "react-router-dom"
import Dots from "../assets/images/dots.svg"
import OutsideClickHandler from './OutsideClickHandler'
// import No
export const ContextMenu = ({contextData}) => {
    const [contextShow, setContextShow] = useState(false)

    const renderContextItem = (data ) => {
        return(
            <>
                 <li>
                    <Link to={data.path}>
                        <img src={data.icon}/>
                        <span>{data.item}</span>
                    </Link>
                 </li>
            </>
        )
    }

    const renderContextMenu = () => {
        return(
            <>
                <ul className="context-list">
                    {
                        contextData.map((data, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        {renderContextItem(data)}
                                    </div>
                                </>
                            )
                        })
                    }
                </ul>  
            </>
        )
    }

    const handleContext = () => {
        if(!contextShow) return null;
            return renderContextMenu()
    }

    return(
        <>
          <div className="ContextMenu">
             <OutsideClickHandler callbackFunction={()=>{setContextShow(false)}}>
                <img  src={Dots} className="dotIcon" onClick={() => setContextShow(!contextShow)}/>
                {handleContext()}
            </OutsideClickHandler>
          </div>  
        </>
    )
}


