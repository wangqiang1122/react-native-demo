import React, { PureComponent }from 'react';
import { View, Text, StyleSheet,Button, Alert, Image, FlatList,SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends PureComponent{
    constructor(props) {
       super(props);
       this.state = {
           data: ['1','2','4']
       }
       console.disableYellowBox = true;
    }
    _renderItem({item,index}) {
        return (
            <View style = {styles.listF}>
               <Text style={{fontSize:40}}>{item}</Text>
            </View>
        )
    }
    _ItemSeparatorComponent() {
        return (
            <View style={{height:10,}}/>
        )
    }
    render (){
      return(
          <SafeAreaView style={{flex:1}}>
            <View style={styles.content}>
             <FlatList 
             data={this.state.data} 
             renderItem= {this._renderItem}
             ItemSeparatorComponent={this._ItemSeparatorComponent}></FlatList>
          </View>
          </SafeAreaView>
      )
    }
}    

const styles = StyleSheet.create({
    content: {
        flex:1,
        backgroundColor:'green',
    },
    listF: {
        width:'100%',
        backgroundColor: 'red',
        height: 100, 
        justifyContent: 'center',
    }
})

export default App;