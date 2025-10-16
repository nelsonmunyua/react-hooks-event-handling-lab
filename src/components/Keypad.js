// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <div>
            <lable>Password</lable>
            <input onChange={(e) => console.log('Entering password...')} type="password" value="password" placeholder="Enter your password"/>
        </div>
    )
}

export default Keypad;