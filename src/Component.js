import React from 'react';


const Component = (props) => {

    return (
        <div className="appContainer">
            <div className="imgContainer">
                <img src={props.url}></img>
            </div>

            <div className="textContainer">
                <h2 className="titleText">{props.title}</h2>
                <p className="expText">{props.explanation}</p>
            </div>
        </div>
    )
}

export default Component;