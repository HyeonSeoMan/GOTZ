import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import WeekCalendar from '../components/Home/WeekCalendar';
import WeekCarousel from '../components/Home/WeekCarousel';
import WeatherAlert from '../components/Home/WeatherAlert';
import Recommender from '../components/Home/Recommender';

const Container = styled.ScrollView`
  background-color: #f5fcff;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;
const HeaderWrap = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
`;
const HeaderTouchWrap = styled.TouchableOpacity`
  margin: auto auto auto 0;
`;
const HeaderTouchWrap2 = styled.TouchableOpacity`
  margin: auto 0 auto auto;
`;

function HomeScreen() {
  return (
    <Container>
      {/* Home Header */}
      <HeaderWrap>
        <HeaderTouchWrap onPress={()=> console.log('touch LOGO')}>
          <Image source={require('../assets/icons/ico_LOGO.png')} />
        </HeaderTouchWrap>
        <HeaderTouchWrap2 onPress={()=> console.log('touch Bell')}>
          <Image source={require('../assets/icons/ico_bell.png')} />
        </HeaderTouchWrap2>
      </HeaderWrap>
      
      {/* Week Calendar */}
      <WeekCalendar/>

      {/* Week Carousel */}
      <WeekCarousel/>

      {/* Weather Alert */}
      <WeatherAlert/>

      {/* Recommender */}
      <Recommender/>
      <Recommender/>
      <Recommender/>
    </Container>
  );
}

export default HomeScreen;