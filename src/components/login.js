import react from "react";
import { useState } from "react";
import {signin} from "../helper/auth";
import { useHistory,Redirect } from "react-router-dom";

function Signin(props){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(null);
    const history=useHistory();
    const handelSubmit=async()=>{
        try{
           let user= await signin(email,password);
            history.push("/chat");
            localStorage.setItem("userInfo",user.user.email);
            //console.log("signin success",user.user,email);
        }
        catch(error){
            setError(error);
           
        }
    }
    if(localStorage.getItem("userInfo")){
       return <Redirect to="/chat"/>;
    }
    return(
        <div>
            <h4>{error?.message}</h4>
            <div>
                <label>Email</label>
                <input onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            
            <button onClick ={handelSubmit}>Signin</button>
        </div>
    );
}

export default Signin;