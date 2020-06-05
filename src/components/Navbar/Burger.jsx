import React, {useState} from 'react';

//Styled Components
import styled from '@emotion/styled'

//Components
import RightNav from './RightNav';

const StyledBurger = styled.div`
    width:2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    z-index: 20;
    display: none;

    @media (max-width: 768px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: .25rem;
        background-color: ${({abrir}) => abrir ? '#ccc': '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all .3s linear;

        &:nth-child(1) {
            transform: ${({abrir}) => abrir ? 'rotate(45deg)': 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({abrir}) => abrir ? 'translateX(100%)': 'translateX(0)'};
            opacity: ${({abrir}) => abrir ? 0: 1};
        }

        &:nth-child(3) {
            transform: ${({abrir}) => abrir ? 'rotate(-45deg)': 'rotate(0)'};
        }
    }
`;

const Burger = () => {

    const [abrir, setAbrir] = useState(false)

    return ( 
        <>
            <StyledBurger abrir={abrir} onClick={() => setAbrir(!abrir)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav abrir={abrir} />
        </>
     );
}
 
export default Burger;