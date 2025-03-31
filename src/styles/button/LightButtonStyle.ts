import styled from 'styled-components';
import { isMobile } from "../../hooks/Media";

export const Button = styled.button`
  width: 180px;
  height: 60px;
  background-color: #4d6a95;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font: var(--MenuTitle); 
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #002a68;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
	${isMobile}{
	width: 119px;
    height: 58px;
  }
  }
 
`;
