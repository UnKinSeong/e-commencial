import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Header from '../Components/Header';
import Ustyles from '../Styles';

export const UserLoginScreen = () => {
    return (
        <SafeAreaView style={{...Ustyles.container}}>
            <Header title={"User"}/>
            <Text>Login In!</Text>
        </SafeAreaView>
    );
};