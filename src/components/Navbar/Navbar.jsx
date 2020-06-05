import React from 'react';

//Styled Components
import styled from '@emotion/styled'

//Components
import Burger from './Burger'

/* STYLED COMPONENTS */

const Nav = styled.div`
    width:100%;
    height:65px;
    border-bottom: 2px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    background-color: #FF6969;
    

    .logo{
        padding: 15px 0 0 20px;
    }

    .venderButton {
        padding: 5px 10px;
        cursor: pointer;
        margin: 15px 50px 0 15px;
        justify-content: center;
        font-size: 20px;
        font-family: Play;
        font-weight: 900;
    }

    @media (max-width: 768px){
        .venderButton{
            display:none;
        }
    }
`;

/* /STYLED COMPONENTS */

const Navbar = () => {
    return ( 
        <Nav>
            <div className="logo">
                Logo
            </div>
            <Burger />
            <div className="venderButton">
                Vender
            </div>
        </Nav>
     );
}
 
export default Navbar;