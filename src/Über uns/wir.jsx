import React from "react";

const user = () => {
    return(
        <div>
            <ul>
                {["Anna", "Dejana", "Andrea"].map((use,idx) => {
                    return <li key={idx}>{user}</li>
                })}
            </ul>
        </div>
    );
}

export default user;