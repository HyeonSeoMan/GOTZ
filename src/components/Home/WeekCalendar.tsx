import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #f5fcff;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;
const CalendarWrap = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const DateWrap = styled.View`
  display: flex;
  flex: 1;
`;
const NameOfDay = styled.Text`
  /* font-family: 'Noto Sans KR'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -1px;
  color: #757575;
  margin-bottom: 6px;

  ${({ isToday } : any) => isToday && `
    font-weight: 700;
    color: #9842D2;
  `}
`;
const DateT = styled.Text`
  /* font-family: 'Montserrat'; */
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  margin-bottom: 6px;

  ${({ isToday } : any) => isToday && `
    font-weight: 800;
    color: #9842D2;
  `}
`;
const Dot = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 100;
  background: #000000;
  margin: 0 auto;

  ${({ isToday } : any) => isToday && `
    background: #9842D2;
  `}
`;

function WeekCalendar() {
  const [schedule, setSchedule] = useState();
  const [today, setToday] = useState();

  useEffect(()=> {
    setInitSchedule();
  }, [])

  const setInitSchedule = () => {
    const names = ['일', '월', '화', '수', '목', '금', '토'];
    let reData = [];
    let sunday = '';

    for(let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const day = d.getDay();
      if (day === 0) {
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const date = d.getDate();
        sunday = `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`;
        break;
      }
    }

    for(let i = 1; i < 8; i++) {
      const d = new Date(sunday);
      d.setDate(d.getDate() + i);
      const day = d.getDay();
      if(new Date().getDay() === day) setToday(i-1);
      const date = d.getDate();
      reData.push({ date: date, name: names[day], schedule: i === 1 ? [1] : [] });
    }

    setSchedule(reData);
  }

  return (
    <Container>
      {
        schedule ? (
          schedule.length > 0 ? 
          (
            <CalendarWrap>
              {
                schedule.map((e: any, idx: number) => (
                  <DateWrap>
                    <NameOfDay isToday={idx === today}>{e.name}</NameOfDay>
                    <DateT isToday={idx === today}>{e.date}</DateT>
                    { e.schedule.length > 0 ? <Dot isToday={idx === today}/> : null }
                  </DateWrap>
                ))
              }
            </CalendarWrap>
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

export default WeekCalendar;