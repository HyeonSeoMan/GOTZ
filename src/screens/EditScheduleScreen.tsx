import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
const HeaderWraper = styled.View`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 50px;
`;
const HeaderTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  margin: auto 20px;
`;
const SaveTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #9442FE;
  margin: auto 20px auto auto;
`;
const Wraper = styled.View`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 16px;
`;
const ScheduleTitleTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-bottom: 10px;
`;
const ScheduleTitleInput = styled.TextInput`
  flex: 1;
  height: 55px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  padding: 0 8px;
`;
const WraperRow = styled.View`
  display: flex;
  flex-direction: row;
  height: 60px;
`;
const Icon = styled.Image`
  margin: auto 12px auto 0;
  width: 18px;
  height: 18px;
`;
const TxtCenter = styled.Text`
  margin: auto 0;
`;
const ScheduleDescInput = styled.TextInput`
  width: 100%;
  height: 300px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  padding: 0 8px;
`;

function EditScheduleScreen() {
  const [isAllDay, setIsAllDay] = useState(false);

  return (
    <Container>
      <HeaderWraper>
        <HeaderTxt>{'< 일정 추가'}</HeaderTxt>
        <SaveTxt>저장</SaveTxt>
      </HeaderWraper>

      <Wraper>
        <ScheduleTitleTxt>어떤 일정인가요?</ScheduleTitleTxt>
        <ScheduleTitleInput />
      </Wraper>

      <Wraper>
        <WraperRow>
          <Icon source={require('../assets/icons/ico_flag.png')} />
          <TxtCenter>하루종일</TxtCenter>
          <TouchableOpacity onPress={() => setIsAllDay(!isAllDay)}>
            <TxtCenter>{isAllDay ? 'On' : 'Off'}</TxtCenter>
          </TouchableOpacity>
        </WraperRow>
        <WraperRow>
          <Icon source={require('../assets/icons/ico_calendar.png')} />
          <ScheduleTitleInput />
        </WraperRow>
        {
          isAllDay && (
            <WraperRow>
              <Icon source={require('../assets/icons/ico_clock.png')} />
              <TxtCenter>시간 선택</TxtCenter>
            </WraperRow>
          )
        }
      </Wraper>
      
      <Wraper>
        <ScheduleTitleTxt>일정 설명</ScheduleTitleTxt>
        <ScheduleDescInput />
      </Wraper>
    </Container>
  );
}

export default EditScheduleScreen;