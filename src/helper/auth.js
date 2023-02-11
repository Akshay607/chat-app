import {auth} from "../firebase"

export async function signup(email,password){
    return auth.createUserWithEmailAndPassword(email,password);
}

export function signin(email,password){
    console.log("sigin here",email,password,auth);
    return auth.signInWithEmailAndPassword(email,password);
}

export function logout(){
    auth.signOut();
    
}

