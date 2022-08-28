import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface CalendarState {
  schedule: any;
}

const initialState: CalendarState = {
  schedule: {
    '2022-08-24': {
      'plans' : [
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
      ]
    },
    '2022-08-26': {
      'plans' : [
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
      ]
    },
    '2022-08-27': {
      'plans' : [
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
      ]
    },
    '2022-08-28': {
      'plans' : [
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
      ]
    },
    '2022-08-30': {
      'plans' : [
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: true,
        },
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
      ]
    },
    '2022-08-31': {
      'plans' : [
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: true,
        },
      ]
    },
    '2022-09-01': {
      'plans' : [
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
      ]
    },
    '2022-09-02': {
      'plans' : [
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:32',
          isAllDay: false,
        },
      ]
    },
    '2022-09-13': {
      'plans' : [
        {
          title: '일정',
          desc: '상세 설명',
          startAt: '10:15',
          endAt: '14:52',
          isAllDay: false,
        },
      ]
    },
  }
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    // authorize(state, action: PayloadAction<User>) {
    //   state.user = action.payload;
    // },
    // logout(state) {
    //   state.user = null;
    // },
  },
});

export default calendarSlice.reducer;
// export const {authorize, logout} = calendarSlice.actions;
export const {} = calendarSlice.actions;