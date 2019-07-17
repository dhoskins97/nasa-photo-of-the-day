import React from 'react';


const Component = (props) => {

    return (
        <div>
            <iframe src={props.url}></iframe>
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
        </div>
    )
}

export default Component;