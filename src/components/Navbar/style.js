import styled from "styled-components";
import {motion} from 'framer-motion'
export const Nav = styled(motion.nav)`
display: flex;
justify-content: space-between;
margin: 0 12rem;
padding-top: 2rem;
color: white;
.brand__container{
    margin: 0 2rem;
    .brand{}
    .toggle{
        display: none;
    }
}
.links{
    ul{
        .active{
           a{
            border-bottom: 0.2rem solid var(--secondary-color);
        }
        }
        
        list-style: none;
        display: flex;
        gap: 3rem;
        li{
            a{
                color: white;
                text-decoration: none;
                font-weight: bold;
                font-size: 1.1rem;
            }
        }
    }
}
@media screen and (min-width:280px) and (max-width:1080px){
    margin: 0;
    position: relative;
    .brand__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .brand{}
        .toggle{
            padding-right: 1rem;
            display: block;
            z-index: 1;
        }
    }
    .show{
        opacity: 1 !important;
        visibility: visible !important;
    }
    .links{
        position: absolute;
        overflow-x: hidden;
        top: 0;
        right: 0;
        width: ${({ state }) => (state ? "60%" : "0%")};
        height: 100vh;
        background-color: var(--secondary-color);
        opacity: 0;
        visibility: hidden;
        transition: 0.4s ease-in-out;
        ul{
            flex-direction: column;
            text-align: center;
            height: 100%;
            justify-content:center;
        }
    }
}
`