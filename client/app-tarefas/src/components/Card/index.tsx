import styled from "styled-components";

interface CardProps {
    justifyContent?: string;
    margintop?: string;
}

export const Card = styled.div<CardProps>`
    align-items: space-between;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: ${props => props.justifyContent || 'center'};
    width: 100%; 
    margin-top: ${(props) => props.margintop || '0'};
`