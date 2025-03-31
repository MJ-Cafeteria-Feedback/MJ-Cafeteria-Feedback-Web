import * as S from '../styles/Home/HomePageComponentStyle';
import LightButton from '../components/button/LightButton';
import { useNavigate } from 'react-router-dom';
import AnonymityImg from '../assets/images/anonymity.svg';
import WithNameImg from '../assets/images/WithName.svg';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<S.Wrapper>
			<S.Title>어떠한 방식으로 리뷰를 남기시겠습니까?</S.Title>
			<S.OptionsWrapper>
				<S.OptionCard>
					<S.ImageBox src={AnonymityImg} alt="익명 이미지" />
					<LightButton
						text="익명 선택"
						onClick={() => navigate('/select-meal')}
					/>
				</S.OptionCard>

				<S.OptionCard>
					<S.ImageBox src={WithNameImg} alt="실명 이미지" />
					<LightButton
						text="실명 선택"
						onClick={() => console.log('로그인 페이지로 이동')}
					/>
				</S.OptionCard>
			</S.OptionsWrapper>
		</S.Wrapper>
	);
};

export default HomePage;
