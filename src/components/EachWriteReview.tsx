// EachWriteReview.tsx
import * as S from "../styles/Home/EachWriteReview";
import Star from "./Star";

interface Props {
  menu: string;
  rating: number;
  question: string;
  comment: string;
  onChangeRating: (rating: number) => void;
  onChangeComment: (comment: string) => void;
}

const EachWriteReview: React.FC<Props> = ({menu, rating, question, comment, onChangeRating, onChangeComment}) => {
  return (
    <S.EachReviewDiv>
      <S.DetailText>Q. {question}</S.DetailText>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <S.DetailText>{menu}</S.DetailText>
        <Star rating={rating} onChangeRating={onChangeRating}/>
      </div>
      <S.DetailReviewInput 
        placeholder={`${menu}에 대한 상세한 평가를 작성해주세요.`}
        value={comment}
        onChange={(e)=>{onChangeComment(e.target.value)}}
        />
    </S.EachReviewDiv>
  );
};

export default EachWriteReview;
