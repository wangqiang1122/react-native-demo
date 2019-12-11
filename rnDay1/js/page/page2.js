import React from 'react';
import { View, Text, StyleSheet,Button, Alert } from 'react-native';
class App extends React.Component{
    render (){
        return (
            <View style={styles.fatherView}>
                <Text styles={styles.indexTitle}>我是index2</Text>
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