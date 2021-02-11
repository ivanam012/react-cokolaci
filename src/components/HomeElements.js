import styled from 'styled-components';
import ImgKolac from '../images/coko-kolaci-logo2.png';


export const HomeContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgKolac});
  height: 90vh;
 width: 100%;
  background-position: center;
  background-size: cover;
`;