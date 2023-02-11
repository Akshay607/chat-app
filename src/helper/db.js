import {database} from '../firebase';

export function registerUserForChat(name,email){
    database.ref("user").push({name,email, Friends:{frnd:"",
    id:0}});         //whenever adding any data to database we use push method
    
}

export function writeMsg(content,email ){
    database.ref("msgs").push({
        content,
        timestamp:Date.now(),
        userInfo : email
    });
}

export function pwriteMsg(id,user1,user2){
    database.ref("pmsgs").child("m").push({
        id:id,
        user1:user1,
        user2:user2
    })
}
 