import { styled } from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const FooterText = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
    line-height: 1.4;
`;

function Footer() {
    return (
        <StyledFooter>
            <IconContainer>
                <li>
                    <a href="https://www.facebook.com/alexander.pardo.735?mibextid=kFxxJD">
                        <img src="/img/redes/facebook.svg" alt="" />
                    </a>
                </li>
            </IconContainer>
            <FooterText>
                Desarrollado por Alura.<br />
                Modificado por Cristian Alexander Tavera<br />
                01 de Junio de 20024

            </FooterText>
        </StyledFooter>
    );
}

export default Footer
