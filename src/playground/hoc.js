// Higher Order Component - a component(HOC) that renders another component
// Re-use code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};
// Require Authentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
            <p>Please login to view info</p>
            )}
        </div>
    );
};




const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info = 'Take these details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info = 'Heres the deets' />, document.getElementById('app'));
