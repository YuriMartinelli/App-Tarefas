import styled from "styled-components"

export const Botao = styled.button`
    padding: 10px;
    background-color: ${props => props.backgroundColor || "#28a745"};
    color: ${props => props.color || "#28a745"};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: ${props => props.justifycontent || "center"};
`