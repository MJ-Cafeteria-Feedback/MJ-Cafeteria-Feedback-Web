import * as S from '../styles/Home/SelectMealPageStyle';
import LightButton from '../components/button/LightButton';
import { useNavigate } from 'react-router-dom';
import LunchImg from '../assets/images/Lunch.svg';
import DinnerImg from '../assets/images/Dinner.svg';

const SelectMealPage = () => {
	const navigate = useNavigate();
	const today = new Date();
	const day = today.getDay(); // 0: 일요일, 6: 토요일

	const isWeekend = day === 0 || day === 6;

	// const fakeDay = 6; // 강제로 토요일 (0: 일, 6: 토)

	// const isWeekend = fakeDay === 0 || fakeDay === 6;

	if (isWeekend) {
		return (
			<S.EmptyWrapper>
				<S.EmptyTitle>오늘의 학식이 존재하지 않아요!</S.EmptyTitle>
				<LightButton text="홈으로 가기" onClick={() => navigate('/review')} />

			</S.EmptyWrapper>
		);
	}

	return (
		<S.Wrapper>
			<S.Title>별점을 남길 학식을 선택해주세요!</S.Title>
			<S.OptionsWrapper>
				<S.OptionCard>
					<S.ImageBox src={LunchImg} alt="중식 이미지" />
					<LightButton
						text="중식 선택"
						onClick={() => navigate('/star')}
					/>
				</S.OptionCard>

				<S.OptionCard>
					<S.ImageBox src={DinnerImg} alt="석식 이미지" />
					<LightButton
						text="석식 선택"
						onClick={() => navigate('/star')}
					/>
				</S.OptionCard>
			</S.OptionsWrapper>
		</S.Wrapper>
	);
};

export default SelectMealPage;
