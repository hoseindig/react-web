import React from 'react';
import ReactDOM from 'react-dom';
import MySiteApp from './MySiteApp'
const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.content}
            <p>footer</p>
        </div>
    )
};

const template = (
    <div>
        <hr></hr>
        <h1>My Page title</h1>
        <h3>My page body</h3>
        <hr></hr>

    </div>
)
      

const renderMyForm = () => {
    ReactDOM.render(<p>this is my rouye text</p>, document.getElementById("app"));
    // ReactDOM.render(<Layout content={template} />, document.getElementById("app"));
}

export default renderMyForm;