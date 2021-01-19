import React, { useState } from 'react';
import './App.module.css';
import User from '../Components/Users/User/User';


const app = props => {

  const [userState, setUserState] = useState({
    users:[
      { name:'Rick', age:36 },
      { name:'Madhu', age:31 },
      { name:'Stavyah', age:0.5}
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState:'someother value'
  });

  const SubmitHandler =()=>{
  
    //console.log('Button clicked. make sure to use C as uppercase in onClick');
    //DO NOT DO THIS//this.state.users[0] = 'Rakesh';
    setUserState({
      users:[
        { name:'Rakesh', age:36 },
      { name:'Madhu', age:31 },
      { name:'Stavyah', age:'6 months'}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, this is my first react app.</h1>
      <p>This is working!!</p>
      <button onClick={SubmitHandler}> Submit </button>
      <User name={userState.users[0].name} age={userState.users[0].age}>My Hobbies: Reading</User>
      <User name={userState.users[1].name} age={userState.users[1].age}/>
      <User name={userState.users[2].name} age={userState.users[2].age}/>
    </div>
  );
}

export default app;




