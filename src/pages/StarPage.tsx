import { useState } from 'react';
import * as S from '../styles/Home/StarPageStyle';
import LightButton from '../components/button/LightButton';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { postStarRate } from '../api/starRate';

const StarPage = () => {
  const location = useLocation();
  const mealType = location.state?.mealType || "default";

   const [stars, setStars] = useState<number[]>([0, 0, 0, 0, 0]); // 0: 빈 별, 1: 반 별, 2: 꽉 찬 별

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
        return <FaStarHalfAlt/>; // 반 별
      case 2:
        return <FaStar />; // 꽉 찬 별
      default:
        return <FaRegStar />; // 빈 별
    }
  };

  const fetchPostStarRating = async(mealType:string, star:number) => {
    try{
      await postStarRate(mealType, star);
    } catch(error){
      throw error;
    }
  }

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
         <LightButton
        text="확인"
        onClick={() => {
          const rating = (stars.reduce((sum, s) => sum + s, 0) / 2).toFixed(1);
          console.log("각 별 상태:", stars);
          fetchPostStarRating(mealType,Number(rating)); // 별점 값을 전달
        }}
      />

         {/* <p>선택한 별점: {(stars.reduce((sum, s) => sum + s, 0) / 2).toFixed(1)}점</p> */}
      </S.Wrapper>
  );
};

export default StarPage;
