import "./App.css"
import  {BrowserRouter as Router,Route,Switch, Redirect} from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Signin from "./components/login";
import F04 from "./components/404"
import NavBar from "./components/navbar";
import Chat from "./components/chat";
import { useEffect,useState } from "react";
import { auth } from "./firebase";


function App() {
  const [currentUser, setCurrentUser]=useState({});
  useEffect(()=>{
     setCurrentUser(auth.currentUser);
  })
  const userEmail=localStorage.getItem("userInfo");
  console.log("user info",currentUser,userEmail);

  function PrivateRoute({Component,props,path}){
    return(<Route path={path} render={(props)=>userEmail? < Component {...props} />:<Redirect to="/signin"/>}/> );
  }
  return (
    <div className="App">
      <h1>Hellow</h1>
      
      <Router>
        <NavBar/> 
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/signin"   component={Signin} />
          <Route exact path="/signup"  component={Signup} />
          <PrivateRoute exact path="/chat" Component={Chat} />
          <Route component={F04}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
