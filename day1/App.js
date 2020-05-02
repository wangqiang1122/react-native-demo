/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SwipeableFlatList,ScrollView, SafeAreaView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state={
        name: "袋子 i",
    }
  }
  bianhua=() => {
    // this.setState({
    //     name: '我变了'
    // })
      this.state.name='变了'
  }
    onScrollEndDrag = (e)=>{
      console.log(e)
    }
  render() {
    this.bianhua();
    let TimeArr = [];
      for (let a = 0;a<24;a++) {
          if (a>10) {
              TimeArr.push(`${a}:00`)

          } else{
              TimeArr.push(`0${a}:00`)
          }
      }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

            <View style={styles.container}>
                <ScrollView
                    onScrollEndDrag={this.onScrollEndDrag}
                    horizontal = {true}
                >
                    <View style={styles.view1}>
                        <Text>{this.state.name}</Text>

                    </View>
                    <View style={styles.view1}>
                        <Text>dada</Text>

                    </View>
                    <View style={styles.view1}>
                        <Text>dada</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text>dada</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text>dada</Text>

                    </View>
                    <View style={styles.view1}>
                        <Text>dada</Text>

                    </View>
                </ScrollView>
                <Text style={styles.welcome}>Welcome to React Native!S</Text>
                <Text style={styles.instructions}>To get started, edit App.js发发</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text>{ JSON.stringify(TimeArr)}</Text>
            </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   view1: {
       width:200,
       height: 200,
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       color: 'blue',
       borderColor: 'red',
       borderWidth: 1
  },
});
