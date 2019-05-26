import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h2>Info</h2>
        <p> this is info : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.auth ?(<WrappedComponent {...props}/>):
            (<p>This is private info!</p>)
            }
        </div>
    );
};
const Authenticated = (authCheck) => {
   return (props) => (
       <div>
            {props.isAdmin && <WrappedComponent {...props} />}
            <p>This is private info!</p>
            <WrappedComponent {...props} />
       </div>
   );
};

const AdminInfo = withAdminWarning(Info);
const RequredAuth = withAdminWarning(Info);

ReactDom.render(<RequredAuth info='hello' auth={true  } />,document.getElementById('root'));