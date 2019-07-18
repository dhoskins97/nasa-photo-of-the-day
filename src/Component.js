import React from 'react';
import styled from 'styled-components';

const AppContainerDiv = styled.div`
    border: solid 2px black;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    display: flex;
    background-color: gray;
`;

const ImgContainerDiv = styled.div`
    height: 100%;
`;

const ImgElement = styled.img`
    height: 500px;
    width: 750px;
    border: none;
`;

const TextContainerDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const TitleTextH2 = styled.h2`
    font-weight: bold;
`;

const ExpTextP = styled.p`
    padding: 0 20px;
    font-weight: bold;
    margin: 0;
`;


const Component = (props) => {

    return (
        <AppContainerDiv>
            <ImgContainerDiv>
                <ImgElement src={props.url}></ImgElement>
            </ImgContainerDiv>

            <TextContainerDiv>
                <TitleTextH2 >{props.title}</TitleTextH2>
                <ExpTextP >{props.explanation}</ExpTextP>
            </TextContainerDiv>
        </AppContainerDiv>
    )
}

export default Component;