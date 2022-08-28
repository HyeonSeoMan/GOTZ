import React, {useState} from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import WeeklyCalendar from '../components/Calendar/WeeklyCalendar';
import CalendarList from '../components/Calendar/CalendarList';
import MiniCalendar from '../components/Calendar/MiniCalendar';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #F5F5F5;
  position: relative;
  height: 100%;
`;
const AddSchedule = styled.View`
  display: flex;
  position: absolute;
  /* z-index: 99; */
  bottom: 32px;
  right: 22px;
  width: 56px;
  height: 56px;
  background: #000000;
  border-radius: 100;
`;
const IcoPlus = styled.Image`
  width: 30px;
  height: 30px;
  margin: auto;
`;

function CalendarScreen({navigation}: any) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <Container>
      {
        isCalendarOpen ?
        <WeeklyCalendar onPr={() => setIsCalendarOpen(false)}/>
        :
        <MiniCalendar onPr={() => setIsCalendarOpen(true)}/>
      }
      <CalendarList />
      <TouchableOpacity onPress={() => navigation.navigate('EditSchedule')}>
        <AddSchedule>
          <IcoPlus source={require('../assets/icons/ico_plus.png')} />
        </AddSchedule>
      </TouchableOpacity>
    </Container>
  );
}

export default CalendarScreen;