import styled from "styled-components";
export const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  .background {
    .bg1 {
      position: absolute;
      top: -60%;
      left: -5%;
      z-index: -1;
    }
    .bg2 {
      position: absolute;
      right: 0;
      bottom: 5rem;
    }
  }
  .pricing__title {
    margin: 6rem 10rem;
    p {
      color: var(--secondary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
  .pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 10rem;
    &__plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      &:nth-child(2) {
        .pricing__plan__content {
          padding: 0 5rem;
          border-left: 0.2rem solid var(--primary-color);
          border-right: 0.2rem solid var(--primary-color);
        }
      }
      &__name {
        background-color: var(--primary-color);
        width: 15rem;
        height: 15rem;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: var(--secondary-color);
        h2 {
          font-size: 2rem;
          line-height: 1.3rem;
        }
        &__price {
          color: white;
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 1rem;
            left: -0.9rem;
            font-size: 1.3rem;
          }
          p {
            font-size: 4rem;
            font-weight: bold;
          }
        }
      }
      &__content {
        &__features {
          list-style-type: none;
          text-align: center;
          color: var(--primary-color);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          .line {
            text-decoration: line-through;
          }
          margin-bottom: 2rem;
        }

        &__actions {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--primary-color);
          gap: 0.5rem;
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    background-color: var(--secondary-color);
    .pricing__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.3rem;
      }
    }
    .background {
      display: none;
    }
    .pricing {
      grid-template-columns: 1fr;
      padding: 1rem;
      gap: 4rem;
      &__plan {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        &__name {
          height: 10rem;
          width: 10rem;
          h2 {
            font-size: 1.5rem;
          }
          &__price {
            p {
              font-size: 3rem;
            }
          }
        }
        &:nth-child(2) {
          .pricing__plan__content {
            padding: 0rem;
            border: none;
          }
        }
      }
    }
  }
`;
