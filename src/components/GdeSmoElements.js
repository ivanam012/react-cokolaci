import styled from 'styled-components';
import ImgGdeSmo from '../images/sweetshop1.jpg';


export const GdeSmoContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgGdeSmo});
  height: 90vh;
 width: 100%;
  background-position: center;
  background-size: cover;
`;


export const GdeSmoP = styled.p`
  font-size: clamp(3rem, 2.5vw, 3rem);
  margin-bottom: 3rem;
  margin-left: 22rem;
`;