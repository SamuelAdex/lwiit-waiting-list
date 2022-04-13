import React, {useState} from 'react';
import { db } from '../config/firebase.config';
import {
  collection,
  addDoc
} from 'firebase/firestore';
import "notyf/notyf.min.css";

import { Notyf } from 'notyf';

const WaitlistForm = () => {
  const [email, setEmail] = useState("");

  const notyf = new Notyf();

  const waitlistCollectionRef = collection(db, "waitlist");


  const joinWaitList = (e) =>{
    e.preventDefault();
    if(!email){
     return notyf.error({
        message: "Email Field can't be empty",
        dismissible: true,        
        position: {
          x: 'right',
          y: 'bottom'
        },
        duration: 3000,
        icon: true
      });   
    } else {
      addDoc(waitlistCollectionRef, {email});
      setEmail("");
      notyf.success({
        message: "Email Submitted Successfully",        
        dismissible: true,        
        position: {
          x: 'right',
          y: 'bottom'
        },
        duration: 3000,
        icon: true
      }); 
    }

    
  }



  return (
    <div className="waitlist-form">
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" />
          <button onClick={joinWaitList}>Join Waitlist</button>
    </div>
  )
}

export default WaitlistForm