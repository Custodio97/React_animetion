import styled from "styled-components";

export const Section = styled.section`
height:100vh;
background-color: var(--primary-color);
padding: 0 10rem;
position: relative;
overflow: hidden;
.background{
    position:absolute;
    left: 0;
    bottom: -30%;
     img{
        z-index: 2;
        height: 43rem;
     }
}
.milestones{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    color: white;
    align-items: center;
    height: 100%;
    .milestone{
        z-index: 20;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        p{
            font-size: 5rem;
            font-weight: bolder;
            line-height: 3rem;
        }
        span{
            text-transform: uppercase;
            color: #ffffc7;
        }
        img{
            height: 6rem;
        }
    }
}
@media screen and (min-width: 280px) and (max-width:1080px) {
    padding: 5rem 2rem;
    min-height: 100vh;
    height: 100%;
    .background{
        display: none;
    }
    .milestones{
        grid-template-columns: 1fr;
        gap: 5rem;
    }
}
`