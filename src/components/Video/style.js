import styled from "styled-components";

export const Section = styled.section`
background-color: #662d91aa;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow:hidden;
.video{
    z-index: 10;
}
.background{
.design1{
    position: absolute;
    left: 0;
    bottom: -8rem;
    width: 18rem;
}
.design2{
    position: absolute;
    right: 5rem;
    top: 3rem;
}
}
@media screen and (min-width: 280px)  and (max-width:1080px){
    .background{
        display: none;
    }
    height: 100%;
    padding: 6rem 2rem;
    .video{
        iframe{
            height: 10rem;
            width: 80vw;
            margin: auto;
        }
    }
}

`