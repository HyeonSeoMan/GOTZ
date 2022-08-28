import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #f5fcff;
  display: flex;
  flex-direction: column;
`;
const ScrollViewWrapper = styled.ScrollView`
  padding: 10px;
`;
const ContentWrapper = styled.View`
  margin-right: 16px;
  width: 128px;
  height: 144px;
  border-radius: 12px;
  background: #FAFAFA;
  padding: 10px;

  ${({ isFirst } : any) => isFirst && `
    border: 1px solid #9944D3;
    border-radius: 4px;
  `}
`;
const DateWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin: 4px 0 20px 0;
`;
const DateTxt = styled.Text`
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-right: 8px;

  ${({ isFirst } : any) => isFirst && `
    font-weight: 700;
    color: #9440CC;
  `}
`;
const DayTxt = styled.Text`
  /* font-family: 'Noto Sans KR'; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  ${({ isFirst } : any) => isFirst && `
    font-weight: 500;
    color: #9440CC;
  `}
`;
const ScheduleWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;
const ScheduleItem = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;
const ScheduleDot = styled.View`
  width: 2px;
  height: 2px;
  background: #9E9E9E;
  border-radius: 100px;
  margin: auto 8px auto 0;
`;
const ScheduleTxt = styled.Text`
  /* font-family: 'Noto Sans KR'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #424242;
  margin: auto 0;

  ${({ isFirst } : any) => isFirst && `
    color: #9440CC;
  `}
`;

function WeekCarousel() {
  const [schedule, setSchedule] = useState();

  useEffect(()=> {
    setInitSchedule();
  }, [])

  const setInitSchedule = () => {
    const names = ['일', '월', '화', '수', '목', '금', '토'];
    let reData = [];

    for(let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const day = d.getDay();
      const date = d.getDate();

      reData.push({ name: names[day], date, schedule: ['위클리 미팅', '성수동', '야작' ] });
    }

    setSchedule(reData);
  }

  return (
    <Container>
      {
        schedule ? (
          schedule.length > 0 ? 
          (
            <ScrollViewWrapper horizontal={true}>
              {
                schedule.map((e: any, idx: number) => (
                  <ContentWrapper isFirst={idx===0}>
                    <DateWrapper>
                      <DateTxt isFirst={idx===0}>{e.date}</DateTxt>
                      <DayTxt isFirst={idx===0}>{e.name + '요일'}</DayTxt>
                    </DateWrapper>
                    <ScheduleWrapper>
                      {
                        e.schedule.map((ele: any) => (
                          <ScheduleItem>
                            <ScheduleDot/>
                            <ScheduleTxt isFirst={idx===0}>{ele}</ScheduleTxt>
                          </ScheduleItem>
                        ))
                      }
                    </ScheduleWrapper>
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

export default WeekCarousel;