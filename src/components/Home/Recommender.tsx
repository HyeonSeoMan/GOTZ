import React, {useState} from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #f5fcff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 12px;
`;
const RecommenderTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 8px;
`;
const ScrollViewWrapper = styled.ScrollView`
  /* padding: 10px; */
`;
const ContentWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;
const ContentImg = styled.View`
  display: flex;
  flex-direction: column;
  width: 104px;
  height: 145px;
  border-radius: 12px;
  background: gray;
  margin: 0 10px 10px 0;
`;
const ContentTitle = styled.Text`
  /* font-family: 'Noto Sans KR'; */
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;
const ContentDesc = styled.Text`
  /* font-family: 'Noto Sans KR'; */
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #757575;
`;

function Recommender() {
  const [contents, setContents] = useState([
    {
      title: '다모토리혼 1',
      desc: '전통주와 분위기 좋은 요리주점',
      img: '',
      isLike: false,
      isWish: false,
    },
    {
      title: '다모토리혼 2',
      desc: '전통주와 분위기 좋은 요리주점',
      img: '',
      isLike: false,
      isWish: false,
    },
    {
      title: '다모토리혼 3',
      desc: '전통주와 분위기 좋은 요리주점',
      img: '',
      isLike: false,
      isWish: false,
    },
  ]);

  return (
    <Container>
      <RecommenderTxt>#성수동 관련 추천해드려요</RecommenderTxt>
      {
        contents ? (
          contents.length > 0 ? 
          (
            <ScrollViewWrapper horizontal={true}>
              {
                contents.map((e: any, idx: number) => (
                  <ContentWrapper key={idx}>
                    <ContentImg>
                      <Text>이미지</Text>
                      <Text>좋아요</Text>
                      <Text>픽</Text>
                    </ContentImg>
                    <ContentTitle>{e.title}</ContentTitle>
                    <ContentDesc>{e.desc}</ContentDesc>

                  </ContentWrapper>
                ))
              }
            </ScrollViewWrapper>
          )
          :
          (
            <Text>데이터 없음</Text>
          )
        )
        :
        (
          <Text>로딩중이에여</Text>
        )
      }
    </Container>
  );
}

export default Recommender;