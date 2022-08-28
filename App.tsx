import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons"

import HomeScreen from './src/screens/HomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import SettingScreen from './src/screens/SettingScreen';
import EditScheduleScreen from './src/screens/EditScheduleScreen';
import { Text } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/redux/slices';

const store = createStore(rootReducer);
const Tab = createBottomTabNavigator();
const HomeScreenStack = createStackNavigator();
const CalendarScreenStack = createStackNavigator();
const SettingScreenStack = createStackNavigator();

const HomeScreenNavigator = () => (
  <HomeScreenStack.Navigator>
    <HomeScreenStack.Screen name="홈" component={HomeScreen}
    options={{
    headerTitleStyle: {
      fontSize: 18,
      textAlign: 'center', // 안드로이드 디폴트는 좌측정렬이기 때문에
    },
  }}/>
  </HomeScreenStack.Navigator>
);
const CalendarScreenNavigator = () => (
  <CalendarScreenStack.Navigator>
    <CalendarScreenStack.Screen name="캘린더" component={CalendarScreen} navigation={CalendarScreenStack}/>
    <CalendarScreenStack.Screen
      name="EditSchedule"
      component={EditScheduleScreen}
      options={{headerShown: false}}
    />
  </CalendarScreenStack.Navigator>
);
const SettingScreenNavigator = () => (
  <SettingScreenStack.Navigator>
    <SettingScreenStack.Screen name="설정" component={SettingScreen} />
  </SettingScreenStack.Navigator>
);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route} : any) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size} : any) => {
              let iconName;
              // focused: bool, 클릭했는지 여부

              switch (route.name) {
                case 'Search':
                  iconName = 'magnify';
                  break;
                case 'Community':
                  iconName = 'forum-outline';
                  break;
                case 'News':
                  iconName = 'view-dashboard-outline';
                  break;
                case 'Profile':
                  iconName = 'account-circle-outline';
                  break;
                default:
                  iconName = 'star-outline';
              }
              return (
                <Text>{route.name}</Text>
                // <MaterialCommunityIcons
                //   size={size}
                //   name={iconName}
                //   color={color}
                // />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#1B2228', // 활성화 되었을 때 색
            inactiveTintColor: '#C7CDD3', // 비활성화 색
            showLabel: false, // 텍스트 숨기기
          }}
          >
          <Tab.Screen name="홈" component={HomeScreenNavigator} />
          <Tab.Screen name="캘린더" component={CalendarScreenNavigator} />
          <Tab.Screen name="설정" component={SettingScreenNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;