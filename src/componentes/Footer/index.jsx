import styled from "styled-components"

const FooterContainer = styled.footer`
    position: absolute;
    bottom: 100;
    left: 0;
    display: flex;
    width:100%;
    min-height: 50px;
    background-color:#04244F;
`
const Autor = styled.div`
    display: flex;
    width: 50%;
    padding: 10px;
    justify-content: flex-end;
`
const Texto = styled.h3`
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    padding-top: 4px;
`

const RedeSocial = styled.div`
    display: flex;
    width: 50%;
    gap: 15px;
    padding: 10px;
`

const Footer = () => {
    return(
        <FooterContainer>
            <RedeSocial>
                <a href="https://www.linkedin.com/in/gabrielgarcoarodrigues/" target="_blank">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" />
                </a>
                <a href="https://github.com/GabrielGarcoaRodrigues" target="_blank">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png"/>
                </a>
            </RedeSocial>
            <Autor>
                <Texto>Desenvolvido por <b>Gabriel Garçoa</b></Texto>
            </Autor>
        </FooterContainer>
    )
}


export default Footer