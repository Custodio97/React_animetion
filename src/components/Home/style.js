import styled from "styled-components";
import home from '../../assets/home.png'

export const Section = styled.section`
background-image: url(${home});
background-size: cover;
min-height: 100vh;
background-repeat: no-repeat;
background-position: center;
position: relative;

.home{
    height: 100%;
    .content{
        height: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.2rem;
        padding-left:18rem;
        margin-top: 8rem;
        width: 60%;
        .title{
            h1{
                font-size: 5rem;
                line-height: 5.3rem;
            }
        }
        .subTitle{
            p{
                width: 70%;
                margin-bottom: 3rem;
            }
        }
    }
}
.info{
    position: absolute;
    bottom: -11rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap:4rem;
        color: white;
    }
}
@media screen and (min-width: 280px) and (max-width:1080px) {
    .home{
        .content{
            padding-left: 2rem;
            width: 100%;
            margin-bottom: 2rem;
            .title{
                h1{
                    font-size: 4rem;
                    line-height: 4rem;
                }
            }
        }
    }
    .info{
        position: initial;
        .grid{
            grid-template-columns: 1fr;
        }
    }
}
`
