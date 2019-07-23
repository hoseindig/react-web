import React from 'react';


const Header = (props) => (
    <div className="header">
        <h1>{props.title}</h1>
        <h4> {props.SubTitle}  </h4>
    </div>
);

Header.defaultProps = {
    title: "متن پیش فرض",
    SubTitle: "عنوان پیش فرض  "
}

export default Header;