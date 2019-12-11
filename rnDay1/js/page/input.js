import React from 'react';
import { View, Text, StyleSheet,Button, Alert, Image, SafeAreaView, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            showText: ''
        }
    }
    render (){
        function changetext(val) {
            console.log(val);
            this.setState({
                showText: val
            })
         }
      return(
          <View style={styles.content}>
              <SafeAreaView style={{flex: 1, borderColor: '#fff',borderWidth: 2}}>
                <View style={{ flex: 1, 
                    backgroundColor: 'red',
                    justifyContent: 'center',
                  }}>
                    <Text  style={{  fontSize: 30 }}  ellipsizeMode={"middle"}  numberOfLines={1}>Hello World!Hello World!Hello World!
                        Hello World!Hello World!Hello World!Hello World!</Text>
                </View>
               <View style={{flex: 1}}>
                <TextInput
                keyboardType={'numeric'}
                onChangeText={changetext.bind(this)} 
                autoCapitalize={'words'}
                style={{ borderWidth:1,borderColor: 'blue', flex: 1,fontSize:40 }} />
               </View>
               <View style={{height:30,flex:1}}>
                  <Text>{this.state.showText}</Text>
               </View>
             </SafeAreaView>
          </View>
      )
    }
}    

const styles = StyleSheet.create({
    content: {
        flex:1,
        backgroundColor:'green',

    }
})

export default App;