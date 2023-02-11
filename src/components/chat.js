import React, { useEffect, useState }  from "react";
import { logout } from "../helper/auth";
import { useHistory } from "react-router-dom";
import { database } from "../firebase";
import ChatBox from "./chatbox";

function Chat(props){
    const [users, setUsers]=useState([]);
    const history=useHistory();
    const [showChatBox,setShowChatBox]=useState(false);
    const [msgs,setMsgs]=useState([]);
    const handelSignout=()=>{
        logout();     
        localStorage.removeItem("userInfo");   
    history.push("/");
   
    }
    const readAllUsers=()=>{
        database.ref("user").on("value",(snaps)=>{                  //on is the real time event listner and it listens everytime the vlue changes  
            let users=[];

            snaps.forEach((snap)=>{
                const user=snap.val();
                users.push({
                    name : user.name,
                    email : user.email,
                });
            });
            console.log("users",users);
            setUsers(users);
        });
    }

    const readAllMsgs=()=>{
        database.ref('msgs').on('value',(snapshot)=>{
            let messages=[];
            snapshot.forEach((snap)=>{
                let singlemsg=snap.val();
                messages.push(singlemsg);
            })
            console.log("messages are :",messages);
            setMsgs(messages);
        })
    }
    const readPersonalMsg=()=>{
        database.ref("pmsgs").on('value',(snapshot)=>{
            let messages=[];
            snapshot.forEach((snap)=>{
                messages.push(snap.val());
            });
            console.log("personal messages",messages);
            setMsgs(messages);
        })
    }
    useEffect(()=>{
       readAllUsers();
       readAllMsgs();
    },[]);
    const user=localStorage.getItem("userInfo");
    return(
        <div>
            <h4>Hey {user}lets chat</h4>
            <button onClick={handelSignout}>Signout</button>{" "}
            <button onClick={()=>setShowChatBox(true)}>Chat with user</button>
            <div style={{height:"200px",width:"80%"}}>
                {users.map((user) => (
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <li style={{margin:"20px"}}>{user.name}</li>{" "}
                        <button onClick={()=>{
                            setShowChatBox(true);
                            readPersonalMsg();
                        }}>Chat</button>
                    </div>
                ))}
            </div>
            <div>
                {showChatBox && <ChatBox msgs={msgs}/>}
            </div>
        </div>
    );
}

export default Chat;  