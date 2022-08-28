import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import CalendarListThumb from './CalendarListThumb';

const Container = styled.ScrollView`
  background-color: #f5fcff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 12px;
  height: 100%;
`;

function CalendarList() {
  const [maxDate, setMaxDate] = useState();
  const schedule = useSelector((state: any) => state.calendar.schedule)

  useEffect(() => {
    let reMaxDate = null;
    for (const [key, value] of Object.entries(schedule)) {
      if (reMaxDate === null) reMaxDate = key
      else if (new Date(key).getTime() > new Date(reMaxDate).getTime()) reMaxDate = key
    }
    setMaxDate(reMaxDate);
  }, [])

  const getDateRangeData = (maxDate) => {
    var res_day = [];
     var ss_day = new Date();
       var ee_day = new Date(maxDate);    	
        while(ss_day.getTime() <= ee_day.getTime()){
          var _mon_ = (ss_day.getMonth()+1);
          _mon_ = _mon_ < 10 ? '0'+_mon_ : _mon_;
          var _day_ = ss_day.getDate();
          _day_ = _day_ < 10 ? '0'+_day_ : _day_;
           res_day.push(ss_day.getFullYear() + '-' + _mon_ + '-' +  _day_);
           ss_day.setDate(ss_day.getDate() + 1);
       }
       return [...res_day, maxDate];
  }

  return (
    <Container>
      {
        maxDate ?
        (
          <>
            {
              // 이거를 플랫리스트로해도 괜찮을 듯
              getDateRangeData(maxDate).map((e, idx): any => (
                <>
                  {schedule[e] && <CalendarListThumb date={e} data={schedule[e].plans} />}
                </>
              ))
            }
          </>
        )
        :
        (
          <Text>일정이 없습니다</Text>
        )
      }
    </Container>
  );
}

export default CalendarList;