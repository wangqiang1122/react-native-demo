import React from 'react';
import { View, Text, StyleSheet,Button, Alert, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



class App extends React.Component{
    constructor(props) {
      super(props)
      this.setState = {
          name: 'hello'
      }
    }
    // 数据挂载
    componentDidMount() {
      console.log('数据挂载')
    }
    // 页面被销毁
    componentWillUnmount() {
        console.log('页面被销毁')
    }
    render() {
        function onPressLearnMore() {
            Alert.alert('Alert Title',
            'My Alert Msg',  [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false })
        }
       return (
           <View style={styles.h}>
                <Image source={require('../../images/kai.png')} style={{width:60,height:60}}></Image>
               <Image 
               style={{width:100,height:100}}
               source={{uri:'https://img.alicdn.com/simba/img/TB1vSgPo7T2gK0jSZPcSuwKkpXa.jpg'}}/>
               <Button onPress={ onPressLearnMore } title='点击我'/>
               {/* <View style={{flex:1,backgroundColor: 'green',marginLeft:5}}>
                  <Text>我是文本拉</Text>
               </View>
               <View style={{flex:1,backgroundColor: 'green',marginLeft:5,justifyContent:'center'}}>
                 <Text style={{textAlign: 'center'}}>我是文本拉</Text>
               </View>
               <View style={{flex:1,backgroundColor: 'green',marginLeft:5}}> 
                   <Text>我是文本拉</Text>
                   </View>
               <View style={{flex:1,backgroundColor: 'green',marginLeft:5}}>
               <Text>我是文本拉</Text>
               </View>
               <Test sex={'name'}></Test> */}
           </View>
       );
    }
}

class Test extends React.Component{
    constructor(props) {
       super(props) 
    }
    componentDidMount() {

    }

    render() {
        return (
            <View>
              <Text>{this.props.sex}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   h:{
    //    flexDirection: 'row',
    //    height: 200,
    //    backgroundColor: 'red',
    //    flex: 1,
    //    justifyContent: "space-between",
       justifyContent: 'center',
    //    alignItems: 'center',
       flex:1
   },
   t: {
    fontSize: 40,
    color: 'red',
   }
})

export default App;