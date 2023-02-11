import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CartScreen } from './ScreenViews/SettingsScreen';
import HomeScreen from './ScreenViews/Home';
import { UserLoginScreen } from './ScreenViews/UserLoginScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch(route.name){
              case 'Home':
                return <Ionicons 
                  name={focused?'home':'home-outline'}
                  size={size}
                  color={color}
                />;
              case 'Cart':
                return <Ionicons 
                  name={focused?'ios-cart':'ios-cart-outline'}
                  size={size}
                  color={color}
                />;
              case 'Login':
                return <Ionicons 
                  name={focused?'ios-person-circle':'ios-person-circle-outline'}
                  size={size}
                  color={color}
                />;
              default:
                {
                  return <Ionicons
                    name={focused?'ios-information-circle':'ios-add-circle-outline'}
                    size={size}
                    color={color}
                  />;
                }
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name='Login' component={UserLoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
