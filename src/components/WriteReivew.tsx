import { useState } from "react";
import * as S from "../styles/Home/WriteReviewComponentStyle";
import EachWriteReview from "./EachWriteReview";
import {dummy} from "../api/dummyData";

type MealType = "조식" | "중식" | "석식";

interface ReviewData {
    menu: string;
    rating: number;
    comment: string;
  }

const WriteReview = () => {
    const [mealType, setMealType] = useState<MealType>("조식");
    const [wholeReview, setWholeReview] = useState<string>("");
    const [freeReview, setFreeReview] = useState<string>("");

    //선택한 meal type에 따라 dummy에서 식단 받아옴
    const selectedMeal = dummy.meals.find((meal)=>meal.mealType==mealType);

    //식단에 대한 별점과 comment 저장할 것임으로 받아온 식단들을 list 형태로 묶어서 저장
    const [reviewData, setReviewData] = useState<ReviewData[]>(
        selectedMeal?.meals.map((menu)=>({
            menu, rating:0, comment:""
        }))||[]
    )

    //mealtype이 바뀔 때마다 식단 list 초기화
    const handleMealTypeChange = (type: MealType) => {
        setMealType(type);
        const newMeal = dummy.meals.find((meal) => meal.mealType === type);
        setReviewData(
          newMeal?.meals.map((menu) => ({
            menu,
            rating: 0,
            comment: "",
          })) || []
        );
        setWholeReview("");
        setFreeReview("");
    }

    const handleSubmitClick = () => {
        const allRating = reviewData.every((item)=>item.rating!==0);
        if(allRating){
            alert('리뷰가 성공적으로 저장되었습니다.');
            //서버로 정보 넘기는 코드
        }else alert('모든 메뉴에 별점을 남겨주세요!');
    }

    return(
        <>
        <S.ReviewDiv>
            <S.BigText>학식 종류 선택</S.BigText>
            <S.MealTypeDiv>
                <S.MealTypeLabel>
                    <input type="radio" name="mealType" value="조식" checked={mealType === "조식"} onChange={()=>handleMealTypeChange("조식")} style={{marginRight:"15px"}}/>
                    <span>조식</span>
                </S.MealTypeLabel>
                <S.MealTypeLabel>
                    <input type="radio" name="mealType" value="중식" onChange={()=>handleMealTypeChange("중식")} style={{marginRight:"15px"}} />
                    <span>중식</span>
                </S.MealTypeLabel>
                <S.MealTypeLabel>
                    <input type="radio" name="mealType" value="석식" onChange={()=>handleMealTypeChange("석식")} style={{marginRight:"15px"}} />
                    <span>석식</span>
                </S.MealTypeLabel>
            </S.MealTypeDiv>

            <S.BigText>오늘의 메뉴 리뷰</S.BigText>
            <div>
                <S.Text>전체 메뉴 평가</S.Text>
                <S.WholeReviewInput placeholder="전체적인 메뉴에 대한 의견을 작성해주세요." value={wholeReview} onChange={(e)=>setWholeReview(e.target.value)}/>
            </div>

            <S.BigText style={{fontSize:"23px"}}>개별 메뉴 평가</S.BigText>
            {reviewData.map((menu, index) => (
                <EachWriteReview 
                    key={index} 
                    menu={menu.menu} 
                    rating={menu.rating} 
                    comment={menu.comment} 
                    onChangeRating={(newRating) => {
                      const updated = [...reviewData];
                      updated[index].rating = newRating;
                      setReviewData(updated);
                    }}
                    onChangeComment={(newComment) => {
                      const updated = [...reviewData];
                      updated[index].comment = newComment;
                      setReviewData(updated);
                    }}
                />
            ))}
            
            <div>
                <S.Text>자유 의견</S.Text>
                <S.WholeReviewInput placeholder="추가 의견을 자유롭게 작성해주세요." value={freeReview} onChange={(e)=>{setFreeReview(e.target.value)}}/>
            </div>

        </S.ReviewDiv>
        <S.SubmitBtn onClick={()=>handleSubmitClick()}>제출하기</S.SubmitBtn>
        </>
    );
}

export default WriteReview;