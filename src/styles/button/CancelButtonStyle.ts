import styled from 'styled-components';
import { isMobile } from "../../hooks/Media";

export const Button = styled.button`
  width: 180px;
  height: 60px;
  background-color: #ffffff;
  color: #4d6a95;
  border: 1px solid #4d6a95;
  border-radius: 4px; 
  font: var(--MenuTitle); 
  cursor: pointer;
  transition: all 0.2s;
  ${isMobile} {
    width: 119px;
    height: 42px;
  }

  &:hover {
    background-color: #ffffff; 
    color: #ff0000; 
    border: 1px solid #ff0000; 
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
`;
