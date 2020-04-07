import React from 'react';
import "./Wrapper.css"

function Wrapper(props) {
    return (
        <div>{props.children}</div>
    )
}

export default Wrapper;