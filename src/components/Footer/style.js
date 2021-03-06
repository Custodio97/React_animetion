import styled from "styled-components";

export const Foote = styled.footer`
background-color: var(--primary-color);
color: white;
display: flex;
justify-content:space-between;
align-items:center;
padding: 5rem 10rem;

.footer__social__icons{
    display: flex;
    gap: 2rem;

    svg{
        font-size: 1.4rem;
        cursor: pointer;
        transition:0.5s ease-in-out;
        &:hover{
            color: var(--secondary-color);
        }
    }
}
@media screen and (min-width: 280px) and (max-width:1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
}

`