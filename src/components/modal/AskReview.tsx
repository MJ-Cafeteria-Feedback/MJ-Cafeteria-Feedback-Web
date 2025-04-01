import { postStarRate } from '../../api/starRate';
import * as S from '../../styles/modal/AskReviewStyle';
import CancelButton from '../button/CancelButton';
import LightButton from '../button/LightButton';
import { useNavigate } from 'react-router-dom';

interface AskReviewProps {
	mealType: string;
	rating: number;
}

const AskReview = ({ mealType, rating }: AskReviewProps) => {
	const navigate = useNavigate();
	
	const fetchPostStarRating = async (mealType: string, star: number) => {
		try {
			await postStarRate(mealType, star);
			console.log('별점 POST 성공');
		} catch (error) {
			console.error('별점 POST 실패:', error);
		}
	};
	return (
		<S.Overlay>
			<S.ModalWrapper>
				<S.Message>메뉴에 대한 리뷰도 작성하시겠습니까?</S.Message>
				<S.ButtonGroup>
					<CancelButton text="취소" onClick={()=>{fetchPostStarRating(mealType, rating); navigate('/review')}} />
					<LightButton text="확인" onClick={()=>{fetchPostStarRating(mealType, rating);; navigate('/select-review-menu')}} />
				</S.ButtonGroup>
			</S.ModalWrapper>
		</S.Overlay>
	);
};

export default AskReview;
