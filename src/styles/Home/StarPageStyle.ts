import styled from 'styled-components';
import { isMobile } from "../../hooks/Media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-top: 153px;
  margin-bottom: 140px;
  font: var(--SectionTitle);
  color: var(--Headline);
  transition: all 0.3s ease-in-out;
${isMobile}{
  font: var(--MenuTitle);
  margin-bottom: 90px
}
`;

export const StarsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 97px;
`;

export const StarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 80px;
  margin-bottom: 100px;
  color:#ffca28;
  transition: transform 0.3s ease;
  ${isMobile} {
  font-size: 35px;
  margin-bottom: 30px;
}

  &:hover {
    transform: scale(1.1);
    color: #ffca28;
  }

  svg {
    pointer-events: none;
    transition: color 0.2s;
  }
  
`;
export const ButtonWrapper = styled.div`
  margin-bottom: 200px;
`;

