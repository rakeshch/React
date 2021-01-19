import React, { useEffect , useRef } from 'react';
// import { render } from 'react-dom';

import classes from '../Cockpit/Cockpit.module.css';



const Cockpit = (props)=>{

    const toggleBtnRef = useRef(null);

    useEffect(()=>{
        console.log('[useEffect] executed');

    //http requests can be made here..
    // setTimeout(()=>{
    //     alert('Data saved successully');
    //     }, 1000);
        toggleBtnRef.current.click();
        return () =>{
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(()=>{
        console.log('[useEffect] 2nd executed');
        return () =>{
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    let classesLst = [];
    let btnClass='';

    if(props.showUsers){
        btnClass = classes.Red;
    }
 

    if(props.usersLength <=2)
        classesLst.push(classes.red);
    if(props.usersLength <=1)
        classesLst.push(classes.bold);
    return(
        <div className={classes.Cockpit}>
        <h1>Hi, this is my first react app.</h1>
        <p className={classesLst.join(' ')}>This is working!!</p>
        <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}> Toggle Users </button>
    </div>
    );

    
        //dynamically pushing class names into an array and joining them in the time of applying(p tag below for example using join(' '))
    
}

export default React.memo(Cockpit);