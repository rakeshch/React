import React , { Component } from 'react';

import User from './User/User'

// const users = (props)=> {
class Users extends Component{

    // static getDerivedStateFromProps(props,state){
    //     console.log('[User.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Users.js] shouldComponentUpdate');
        if(nextProps.users !== this.props.users)
        {
            
            return true;
        }
        else
            return false;

    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Users.js] getSnapshotbeforeUpdate');
        return {message : 'snaoshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Users.js] componentDidUpdate');
        console.log(snapshot);
    }
    

    render(){
        console.log('[Users.js] rendering..');
        return this.props.users.map((user, index) => {
        return <User 
                click={()=> this.props.clicked(index)}
                name={user.name} 
                age={user.age} 
                key = {user.id}
                changed={(event)=>this.props.changed(event, user.id)}/>
        });
    }
}


export default Users;