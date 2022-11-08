import React from "react"
import { faDollar, faCalendar,faClipboard,faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({card}){
    return(
      
             <div className="col-xl-3 col-md-6 mb-4">
                            <div className={`card border-left-${card.color} shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${card.color} text-uppercase mb-1`}>
                                                {card.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{card.money}</div>
                                        </div>
                                        <div className="col-auto">
                                            <span className="fa-li">
                                            {card.symbol}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                       
    )
}

export default Card;