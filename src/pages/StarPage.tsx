import { useState } from 'react';
import * as S from '../styles/Home/StarPageStyle';
import LightButton from '../components/button/LightButton';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { postStarRate } from '../api/starRate'
import AskReview from '../components/modal/AskReview';

const StarPage = () => {
	const location = useLocation();
	const mealType = location.state?.mealType || "default";

	const [stars, setStars] = useState<number[]>([0, 0, 0, 0, 0]); // 0: 빈 별, 1: 반 별, 2: 꽉 찬 별
	const [showModal, setShowModal] = useState(false);

	const handleClick = (index: number) => {
		setStars((prev) =>
			prev.map((value, i) => {
				if (i < index) return 2; // index 이전의 별은 모두 꽉 찬 별(2)
				if (i === index) return value === 1 ? 2 : 1; // 현재 클릭한 별은  1 → 2 순환
				return 0; // 이후 별은 빈 별
			})
		);
	};

	const renderIcon = (state: number) => {
		switch (state) {
			case 1:
				return <FaStarHalfAlt />; // 반 별
			case 2:
				return <FaStar />; // 꽉 찬 별
			default:
				return <FaRegStar />; // 빈 별
		}
	};

	const fetchPostStarRating = async (mealType: string, star: number) => {
		try {
			await postStarRate(mealType, star);
			console.log('별점 POST 성공');
		} catch (error) {
			console.error('별점 POST 실패:', error);
		}
	};

	const handleLightButtonClick = () => {
		setShowModal(true);
	};
	const handleModalConfirm = () => {
		const rating = (stars.reduce((sum, s) => sum + s, 0) / 2).toFixed(1);
		console.log("각 별 상태:", stars, "별점:", rating);
		fetchPostStarRating(mealType, Number(rating));
		setShowModal(false);
	};

	return (
		<S.Wrapper>
			<S.Title>오늘 학식의 만족도를 평가해주세요!</S.Title>
			<S.StarsWrapper>
				{stars.map((state, index) => (
					<S.StarButton
						key={index}
						onClick={() => handleClick(index)}
					>
						{renderIcon(state)}
					</S.StarButton>
				))}
			</S.StarsWrapper>
			<S.ButtonWrapper>
				<LightButton text="확인" onClick={handleLightButtonClick} /></S.ButtonWrapper>

			{showModal && (
				<AskReview
					onClose={() => setShowModal(false)}
					onConfirm={handleModalConfirm}
				/>
			)}
			{/* <p>선택한 별점: {(stars.reduce((sum, s) => sum + s, 0) / 2).toFixed(1)}점</p> */}
		</S.Wrapper>
	);
};

export default StarPage;
