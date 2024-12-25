"use client"
import axios from "axios"
import { useState } from "react"
export default function signup(){
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    function signupHandler(){

    }
    return(
        <div className="flex justify-center items-center w-screen h-screen flex-col">
            <div className="flex flex-col justify-center items-center ">
                Sign up
                <input onChange={e=>{setUsername(e.target.value)}} className="m-2 p-2 rounded-md text-black" type="text" placeholder="username"></input>
                <input onChange={e=>{setPassword(e.target.value)}} className="m-2 p-2 rounded-md text-black" type="text" placeholder="password"></input>
                <button className="border rounded-md m-2 px-5" onClick={()=>{
                    axios.post("http://localhost:3000/api/v1/signup",{
                        username,
                        password
                    })
                }}>Sign up</button>
            </div>
        </div>
    )
}