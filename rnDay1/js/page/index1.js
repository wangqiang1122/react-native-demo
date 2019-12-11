import React from 'react';
import { View, Text, StyleSheet,Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
class page1 extends React.Component{
    render (){
        return (
            <View style={styles.fatherView}>
                <Text styles={styles.indexTitle}>我是index1</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    indexTitle: {
        fontSize: 30,
        color: 'red',
    },
  fatherView: {
        flex: 1, 
        justifyContent: 'center',
  }
})
