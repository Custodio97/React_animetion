import styled from "styled-components";

export const Section = styled.section`
min-height: 100vh;
position: relative;
.decoration{
    position: absolute;
    height: 20rem;
    width: 70vw;
    border:0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem;
}
.blogs{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 3rem;
    margin: 5rem 20rem;
    .blog{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .image{
            height: 22rem;
            background-color: #a686f0af;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .title{
            h3{
                color: var(--secondary-color);
                font-size:2rem;
            }
        }
        .type{
            color: var(--primary-color);
            font-weight: bolder;
            text-transform: uppercase;
        }
        .description{
            height: 9rem;
            color:var(--primary-color)
        }
        .more{
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
            span{
                letter-spacing: 0.1rem;
                text-transform: uppercase;
                color: var(--primary-color);
            }
        }
    }
}
@media screen and (min-width: 280px) and (max-width:1080px) {
    margin:  2rem 0;
    .decoration{
        display: none;
    }
    .blogs{
        padding: 0 2rem;
        grid-template-columns: 1fr;
        margin: 0 1rem;
    }
}
`