import React, {useState} from "react";
import { Link } from "react-router-dom";

function NavBar(prpos){
    const [name,setName]=useState("");
    const [count,setCount]=useState(0);
   
    return(
        <div>
            <div className="container">
                <Link to="/"><h3>Chat App</h3></Link>
                <div>
                    <div>
                        {" "}
                        <h4>{name}</h4>
                        <button onClick={()=>setName("Akshay")}>Update Name</button>
                    </div>
                </div>
                <img src={prpos.profilePicture} alt="profil-pic"/>
            </div>

        </div>
    )
}
export default NavBar;