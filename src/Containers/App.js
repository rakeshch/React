import React, { Component } from 'react';
// import styled from 'styled-components';
import classes from '../Containers/App.module.css';
// import Radium , { StyleRoot } from 'radium';
import User from '../Components/Users/User/User';
import Users from '../Components/Users/Users';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
// import { ThemeConsumer } from 'styled-components';

// import UserOutput from './User/UserOutput';
// import UserInput from './User/UserInput';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Constructor');
  }

state = {
  users:[
    { id:'dydyd', name:'Rick', age:36 },
    { id:'aasd',name:'Madhu', age:31 },
    { id:'dfdff',name:'Stavyah', age:0.5}
  ],
  usernames:[
    {username: 'rchittineni'},
    {username: 'rakesh'}
  ],
  showCockpit: true,
  changeCounter: 0
}

static getDerivedStateFromProps(props,state){
  console.log('[App.js] getDerivedStateFromProps');
  return state;
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[Users.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate(){
  console.log('[Users.js] componentDidUpdate');
}

componentDidMount(){
  console.log('[Users.js] componentDidMount');
}

componentWillUnmount(){
  console.log('[Users.js] ComponentWillUnmount');
}



SubmitHandler =(newName)=>{
  
  //console.log('Button clicked. make sure to use C as uppercase in onClick');
  //DO NOT DO THIS//this.state.users[0] = 'Rakesh';
  this.setState({
    users:[
      { name:newName, age:36 },
    { name:'Madhu', age:31 },
    { name:'Stavyah', age:'6 months'}
    ],
    showUsers: false,
    userInput:''
  })
}

NameChangedHandler =(event, id)=>{
  //get the element using index in the object and make changes to that specific element only. Always make copies and work on that.
   const userIndex = this.state.users.findIndex(p=> {
     return p.id === id;
   })

   //find the element in the object using the index and make a copy of the object using spread
   const user = {
    ...this.state.users[userIndex]
   }
   user.name = event.target.value;

   //get the users object and update the element. work on the copy, not the original list
   const users = [...this.state.users];
   users[userIndex] = user;

  this.setState((prevState, props) => {
     return {
       users:users,
       changeCounter: prevState.changeCounter + 1
     };
    });
}

UserNameNameChangeHandler=(event)=>{
  this.setState({ usernames:[
    {username: event.target.value},
    {username: 'rakesh'}
  ]
  })
}

deleteUserhandler=(userIndex)=>{
  const users = [...this.state.users];
  users.splice(userIndex, 1);
  this.setState({ users: users});
}

togglehandler =()=>{
  const doesShow = this.state.showUsers;
  this.setState({
    showUsers : !doesShow
  })
}


textChangedHandler =(event)=>{
  const val = event.target.value;
  const txtlngth = val.length;

  this.setState({userInput: event.target.value})
}



render() {
  console.log('[App.js] render')
  let users = null;

  if(this.state.showUsers){
    users=<Users
        users={this.state.users}
        clicked={this.deleteUserhandler} 
        changed={this.NameChangedHandler}/>
  }

  return (
    <Aux>
        <button onClick={() => {this.setState({showCockpit: !this.state.showCockpit})}}> Remove cockpit</button>
        { 
        (this.state.showCockpit? <Cockpit usersLength={this.state.users.length} clicked={this.togglehandler} showUsers={this.state.showUsers}/>: 
          null)

        }
        
        {users}    
      </Aux>
  );
}
}

export default withClass(App, classes.App);
