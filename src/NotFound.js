import React from 'react';

const NotFound = (props) =>{
    return (
        <div>
            <h1>404 NotFound!</h1>
            <button onClick={ () => {
                props.history.goBack();
            } }>Back</button>
        </div>
    );
};

export default NotFound;