import React, { useState } from "react";
import { writeMsg } from "../helper/db";
import { pwriteMsg } from "../helper/db";
function ChatBox(props){
    const {msgs}=props;
    const [msg,setMsg]=useState("");
    const email=localStorage.getItem("userInfo");
    const handelOnSubmit=(e)=>{
        e.preventDefault(); 
        pwriteMsg(1,msg,email);
        setMsg("");                            //basic nature of form submit is to rerender. to stop that we do this.
    };
    return(
        <div className="chatbox">
            {msgs  && msgs.map((msg)=>(
                <div className={msg.userInfo!=email?'right':'left'}>
                    <p style={{margin:'0px'}}>{msg.content}</p>
                </div>
            ))}
            <form onSubmit={handelOnSubmit }>
                <input value ={msg} onChange={(e)=>setMsg(e.target.value)}/>
                <button style={{margin:'10px', padding:'0px'}}type="submit">Send</button>
            </form>
        </div>
    );
}




export default ChatBox;