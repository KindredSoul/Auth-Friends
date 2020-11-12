import React from 'react';

const Friend = ({friend}) =>{
    return(
        <div style={{border: "1px solid black", borderRadius: "15px"}} >
            <h2>{friend.name}</h2>
            <h3>Age:{friend.age} </h3>
            <h3>Email:{friend.email} </h3>
        </div>
    )
}

export default Friend