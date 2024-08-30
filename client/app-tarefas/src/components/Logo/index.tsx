import styled from "styled-components"
import logo from "../../assets/logo.svg"

const LogoContainer = styled.div`
    display: flex;
    font-size: 20px;
    margin-right: 10px;
`;

const LogoImage = styled.img`
    margin-bottom: 20px;
`;

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="Logo" />
            <p><strong>Gerenciamento de tarefas</strong></p>

        </LogoContainer>
    )
}