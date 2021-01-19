import React from 'react';

const withClass =(WrappedComponent, className) =>{
    return props =>(
        <div className={className}>
            <WrappedComponent {...props} className={className}/>
        </div>
    );
};

export default withClass;