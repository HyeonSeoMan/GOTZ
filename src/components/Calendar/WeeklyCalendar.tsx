import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['ko'] = {
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "오늘"
};
LocaleConfig.defaultLocale = 'ko';

const Container = styled.View`
  background-color: #f5fcff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 12px;
  height: 100%;
`;
const CalendarWrap = styled(Calendar)`
  height: 600px;
`;
const DayComponentWrap = styled.View`
  height: 12%;
`;
const DayTextWrap = styled.Text`
  min-height: 18px;
`;
const ScheduleTextWrap = styled.Text`
  min-height: 18px;
  background-color: #EEEEEE;
  padding: 0 8px;
  margin-bottom: 2px;
`;
const OpenCalendar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 40px;
  borderBottomLeftRadius: 40;
  borderBottomRightRadius: 40;
  background-color: white;
`;
const OpenIcoPlus = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #BDBDBD;
  margin: auto 6px auto 0;
`;
const OpenCalendarTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #BDBDBD;
  margin: auto 0;
`;

function WeeklyCalendar({onPr}: any) {
  const schedule = useSelector((state: any) => state.calendar.schedule)
  return (
    <Container>
      <CalendarWrap
        monthFormat={'yyyy년 MM월'}
        dayComponent={({date, state}: any) => {
          return (
            <DayComponentWrap>
              <DayTextWrap style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</DayTextWrap>
              {
                (schedule && schedule[date.dateString]) && (
                  <>
                    {schedule[date.dateString].plans.map((e, idx): any => (
                      <ScheduleTextWrap key={date.dateString + idx}>{e.title}</ScheduleTextWrap>
                    ))}
                  </>
                )
              }
            </DayComponentWrap>
          );
        }}
      />
      <TouchableOpacity onPress={() => onPr()}>
        <OpenCalendar>
          <OpenIcoPlus>-</OpenIcoPlus>
          <OpenCalendarTxt>접어보기</OpenCalendarTxt>
        </OpenCalendar>
      </TouchableOpacity>
    </Container>
  );
}

export default WeeklyCalendar;