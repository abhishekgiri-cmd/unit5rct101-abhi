import React from "react";

import "./Mobile.css"
export const Mobile = () => {
    const mob = ["Android", "Blackberry", "iphone", "Windows Phone"];
    const operator = "Mobile Operating System"
    const manu = "Mobile Manufacturers"
    const service = ["samsung", "Htc", "Micromax", "Apple"]

    return (
        <div>
            <div className="listTag">
                <h1>{operator}</h1>
                {mob.map((e) => <li className="list">{e}</li>)}
            </div>
            <div className="listTag">
                <h1>{manu}</h1>
                {service.map((e) => <li className="list">{e}</li>)}
            </div>

        </div>




    )



}