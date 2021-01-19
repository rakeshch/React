import React , { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './User.module.css';

  let inputElement= null;
class User extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidUpdate(){
        this.inputElementRef.current.focus();
    }

   render(){
        console.log('[User.js] rendering..');
        return (
            <Aux>
                  {/* <div className={classes.User}> */}
                <p onClick={this.props.click}>Hello, My name is {this.props.name}, age {this.props.age}</p>
                <p key='i2'>{this.props.children}</p>
                <input type='text' 
                key='i3'
                //ref = {(inputEl) => (this.inputElement = inputEl)}
                ref = {this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name}/>
            {/* </div> */}
            </Aux>
          
        );
        }
}

User.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(User, classes.User);