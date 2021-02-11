
import styled from 'styled-components';
import ImgKolac from '../images/cookie9.jpg';

export const KolaciContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgKolac});
  height: 90vh;
 width: 100%;
  background-position: center;
  background-size: cover;
`;

export const KolaciContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const KolaciH1 = styled.h1`
  font-size: clamp(1.5rem, 7vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;


export const KolaciP = styled.p`
  font-size: clamp(1rem, 1.5vw, 2rem);
  margin-bottom: 1rem;
`;


export const KolaciItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  height: 100vh;
  max-height: 100%;
  padding: 0 3rem;
  width: 650px;
  color: #0B0501;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;