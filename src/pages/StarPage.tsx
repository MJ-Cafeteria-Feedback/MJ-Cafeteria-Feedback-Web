import { useState } from 'react';
import * as S from '../styles/Home/StarPageStyle';
import LightButton from '../components/button/LightButton';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarPage = () => {
	const [stars, setStars] = useState<number[]>([0, 0, 0, 0, 0]); // 0: empty, 1: half, 2: full

	const handleClick = (index: number) => {
		setStars((prev) =>
			prev.map((value, i) => (i === index ? (value + 1) % 3 : value))
		);
	};

	const renderIcon = (state: number) => {
		switch (state) {
			case 1:
				return <FaStarHalfAlt />;
			case 2:
				return <FaStar />;
			default:
				return <FaRegStar />;
		}
	};

	return (
		<S.Wrapper>
			<S.Title>오늘 학식의 만족도를 평가해주세요!</S.Title>
			<S.StarsWrapper>
				{stars.map((state, index) => (
					<S.StarButton key={index} onClick={() => handleClick(index)}>
						{renderIcon(state)}
					</S.StarButton>
				))}
			</S.StarsWrapper>
			<LightButton
				text="확인"
				onClick={() => console.log('각 별 상태:', stars)}
			/>
		</S.Wrapper>
	);
};

export default StarPage;
