import styled from 'styled-components';
import { isMobile } from "../../hooks/Media";

export const Wrapper = styled.div`
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
  transition: all 0.3s ease-in-out;
  ${isMobile}{
	font: var(--MenuTitle);
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 165px;
  transition: all 0.3s ease-in-out;

  ${isMobile}{
	gap: 53px;
  }
`;

export const OptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 184px;
  transition: all 0.3s ease-in-out;
  ${isMobile}{
	margin-bottom: 208px;
  }
`;

export const ImageBox = styled.img`
  width: 451px;
  height: 241px;
  background-color: #eaecff;
  padding-top: 11px;
  padding-bottom: 12px;
  border-radius: 4px;
  margin-bottom: 97px;
  transition: all 0.3s ease-in-out;
  ${isMobile}{
	width: 148px;
	height: 119px;
	margin-bottom: 34px;
  }
`;

export const EmptyTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-top: 303px;
  margin-bottom: 149px;
  font: var(--SectionTitle);
  color: var(--Headline);
  transition: all 0.3s ease-in-out;
  ${isMobile}{
	font: var(--MenuTitle);
	margin-top: 280px;
  }
`;

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
