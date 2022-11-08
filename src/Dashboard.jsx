import React from "react";
import Card from "./Card";
import { faDollar, faCalendar,faClipboard,faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function Dashboard(){
    const Cards =[
        {
            title:"EARNINGS (MONTHLY)",
            money:"$40,000",
            color: "primary",
            symbol:<FontAwesomeIcon icon={ faCalendar}/>
        },
        {
            title:"EARNINGS (ANNUAL)",
            money:"$215,000",
            color: "success",
            symbol:<FontAwesomeIcon icon={faDollar}/>
        },
        {
            title:"TASKS",
            money:"50%",
            color: "info",
            symbol: <FontAwesomeIcon icon={faClipboard}/>
        },
        {
            title:"PENDING REQUESTS",
            money:"18",
            color: "warning",
            symbol:<FontAwesomeIcon icon={faComment}/>
        }

    ]
    
    return(
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <Link to="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
                    </div>
                    <div className="row">
                    {
                        Cards.map((card)=>{
                            return <Card card={card}></Card>
                        })
                    
                    }
                     </div>
        </div>
    )
}

export default Dashboard;