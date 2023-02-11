import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import Ustyles from '../Styles';


// A component to display header of the screen

const Header = ({title, prev = ''}:{title:string, prev?:string }) => {
    return (
      <View style={{...Ustyles.header}}>
        {prev!='' &&
          <h2>
            <Button>Test</Button>
          </h2>
        }
        <Text style={Ustyles.headerTitle}>{title}</Text>
      </View>
    );
};
export default Header