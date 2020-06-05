import React from 'react';

//Styled Components
import styled from '@emotion/styled'

/*STYLED COMPONENTS */

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding: 0 10%;

    li {
        padding: 5px 10px;
        cursor: pointer;
        margin: 0 10px 0 10px;
        justify-content: center;
        font-size: 20px;
        font-family: Play;
        font-weight: 900;
    }

    #venderButton{

    }

    @media (max-width: 768px) {
        transform: ${({abrir}) => abrir ? 'translateX(0)': 'translateX(100%)'};
        flex-flow: column nowrap;
        position: fixed;
        background: linear-gradient(45deg, #F17C58, #E94584, #24AADB, #27DBB1, #FFDC18, #FF3706);
        background-size: 600% 100%;
        top: 0;
        right: 0;
        height: 100%;
        width: 50%;
        padding-top: 5vh;
        transition: transform 0.3s ease;
        animation: animate 10s linear infinite;
        animation-direction: alternate;
        opacity: .8;

        @keyframes animate {
            0%{
                background-position: 0%;
            }
            100%{
                background-position: 100%;
            }
        }

        li{
            padding: 10px 10px;
            margin: 10px 0 10px 0;
            justify-content: center;
            color:white;
        }
    }
`;


/*/STYLED COMPONENTS */
const RightNav = ({abrir}) => {
    return ( 
        <Ul abrir={abrir}>
            <li>PC Completas</li>
            <li>Componentes</li>
            <li>Periféricos</li>
            <li>Accesorios</li>
            <li>Redes</li>
            <li>Sillas</li>
            <li>Audio</li>
            <li>Foro</li>
        </Ul>
     );
}
 
export default RightNav;