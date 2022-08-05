import styled from "styled-components";
import itemCarrousel from '../../image/imageItemCarroussel.jpg';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-image: url(${itemCarrousel});
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;