import styled from "styled-components"
import OpcoesHeader from "./Opcoes"
import Logo from "../Logo"

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
    color: black;
    margin-top: 10px;
`

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
        </HeaderContainer>
    )

}