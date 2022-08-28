import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #f5fcff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const AlertWrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 112px;
  background: #F5F5F5;
  border-radius: 16px;
`;
const AlertTxtWrap = styled.View`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 8px;
`;
const AlertTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;
const TempInfoWrap = styled.View`
  display: flex;
  flex-direction: row;
  padding: 4px 10px;
`;
const TempBox = styled.View`
  display: flex;
  flex-direction: column;
`;
const TempTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;
const CompTxt = styled.Text`
  /* font-family: 'Noto Sans KR'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -1px;
  color: #000000;
`;
const LocaTxt = styled.Text`
  /* font-family: 'Noto Sans KR'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -1px;
  color: #757575;
  margin: auto 0 0 auto;
`;


function WeatherAlert() {
  return (
    <Container>
      <AlertWrapper>
        <AlertTxtWrap>
          <Image source={require('../../assets/icons/ico_weather_character.png')} />
          <AlertTxt>날씨가 더워요!무리하지 마세요</AlertTxt>
        </AlertTxtWrap>
        <TempInfoWrap>
          <TempBox>
            <TempTxt>33° 맑음</TempTxt>
            <CompTxt>어제보다 2 ° 높아요</CompTxt>
          </TempBox>
          <LocaTxt>동작구 신대방동</LocaTxt>
        </TempInfoWrap>
      </AlertWrapper>
    </Container>
  );
}

export default WeatherAlert;