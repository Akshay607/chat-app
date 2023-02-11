import react from "react";
import { useState } from "react";
import {signup} from "../helper/auth"
import { useHistory,Redirect } from "react-router-dom";
import {registerUserForChat} from "../helper/db";

function Signup(props){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [error,setError]=useState(null);
    const history=useHistory();

    const handelSubmit=async()=>{
        try{ let res=await signup(email,password);
            history.push("/signin");
            registerUserForChat(name,email);    
           
        }
        catch(error){
            setError(error);
            
        }
    }
   
    return(
        <div>
            <h4>{error?.message}</h4>
            <div>
                <label>Name</label>
                <input onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)}/>
            </div>            
            <button onClick={handelSubmit}>Signup</button>       
            </div>
    );
}

export default Signup;