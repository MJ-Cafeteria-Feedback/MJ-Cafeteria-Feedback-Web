import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-top: 148px;
  margin-bottom: 97px;
  font: var(--SectionTitle);
  color: var(--Headline);
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
  font-size: 60px;
  color:#ffca28;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
    color: #ffca28;
  }

  svg {
    pointer-events: none;
    transition: color 0.2s;
  }
`;
