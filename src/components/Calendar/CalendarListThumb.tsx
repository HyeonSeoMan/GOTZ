import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 8px;
`;
const DateTitleWrap = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;
const DateTxt = styled.Text`
  /* font-family: 'Montserrat'; */
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: #000000;
  margin: auto 8px 0 0;
`;
const DateFormatTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  margin: auto 8px 0 0;
`;
const DayTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin: auto 0 0 0;
`;
const ScheduleList = styled.View`
  display: flex;
  flex-direction: column;
`;
const ScheduleWrap = styled.View`
  display: flex;
  flex-direction: column;
  height: 80px;
`;
const ScheduleTitleTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #000000;
  margin-bottom: 8px;
`;
const ScheduleTimeTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #9E9E9E;
`;

function CalendarListThumb({date, data} : any) {
  const getDay = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return days[new Date(date).getDay()];
  }

  const getTimes = (se, ee): any => {
    return `${tConvert(se)} - ${tConvert(ee)}`;
  }

  const tConvert =  (time: any) => {
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    let part = null;
    if (time.length > 1) {
      time = time.slice (1);
      part = time[0] < 12 ? '오전' : '오후';
      time[0] = +time[0] % 12 || 12;
    }
    return [part, ' ', ...time].join ('');
  }

  return (
    <Container>
      <DateTitleWrap>
        <DateTxt>{date}</DateTxt>
        <DateFormatTxt>일</DateFormatTxt>
        <DayTxt>({getDay()})</DayTxt>
      </DateTitleWrap>
      <ScheduleList>
        {data.map((e, idx) : any => (
          <ScheduleWrap>
            <ScheduleTitleTxt>{e.title}</ScheduleTitleTxt>
            {
              e.isAllDay ?
              (
                <ScheduleTimeTxt>하루종일</ScheduleTimeTxt>
              )
              :
              (
                <ScheduleTimeTxt>{getTimes(e.startAt, e.endAt)}</ScheduleTimeTxt>
              )
            }
          </ScheduleWrap>
        ))}
      </ScheduleList>
    </Container>
  );
}

export default CalendarListThumb;