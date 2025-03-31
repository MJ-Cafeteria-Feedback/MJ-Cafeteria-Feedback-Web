import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-top: 148px;
  margin-bottom: 149px;
  font: var(--SectionTitle);
  color: var(--Headline);
`;
export const EmptyTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-top: 303px;
  margin-bottom: 149px;
  font: var(--SectionTitle);
  color: var(--Headline);
`;

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 165px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px; /* 모바일에서는 너무 넓지 않게 조정 */
  }
`;

export const OptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 184px;
`;

export const ImageBox = styled.img`
  width: 451px;
  height: 241px;
  background-color: #eaecff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 97px;
`;
