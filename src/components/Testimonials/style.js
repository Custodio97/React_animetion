import styled from "styled-components";

export const Section = styled.section`
overflow: hidden;
.background{
    position: relative;
    .desigin1{
        position: absolute;
        left: 0rem;
        height: 35rem;
        top: 10rem;
    }
    .design2{
        position: absolute;
        right: 0;
    }
}
.container{
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .testimonials{
        display: flex;
        gap: 1rem;
        text-align: center;
        justify-content: center;
        width: 30%;
        .testimonial{
            display: flex;
            flex-direction: column;
            align-items: center;
            align-items:center;
            gap: 1rem;
            .image{
                position: relative;
                .circle1{
                    position: absolute;
                    left: -0.7rem;
                    top:-0.7rem;
                    height: 10rem;
                    width: 10rem;
                    border: 0.2rem solid white;
                    border-radius: 10rem;
                }
                .circle2{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 10rem;
                    width: 10rem;
                    border-radius: 10rem;
                    background-color: #8860e60b;
                }
            }
        }
       .hidden {
        display: none;
      }
      color: white;
      .designation {
        color: var(--secondary-color);
      }
      .description {
        height: 8rem;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border: 0.1rem solid var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;
      .testimonials {
        width: 80%;
        .testimonial {
          .description {
            height: 18rem;
          }
        }
      }
    }
  }
`;
