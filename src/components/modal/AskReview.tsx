import React from 'react';
import * as S from '../../styles/modal/AskReviewStyle';
import CancelButton from '../button/CancelButton';
import LightButton from '../button/LightButton';

interface AskReviewProps {
	onClose: () => void;
	onConfirm: () => void;
}

const AskReview = ({ onClose, onConfirm }: AskReviewProps) => {
	return (
		<S.Overlay>
			<S.ModalWrapper>
				<S.Message>메뉴에 대한 리뷰도 작성하시겠습니까?</S.Message>
				<S.ButtonGroup>
					<CancelButton text="취소" onClick={onClose} />
					<LightButton text="확인" onClick={onConfirm} />
				</S.ButtonGroup>
			</S.ModalWrapper>
		</S.Overlay>
	);
};

export default AskReview;
