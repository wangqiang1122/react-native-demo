import React, { PureComponent }from 'react';
import {View, Text, StyleSheet, Button, Alert, Image, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends PureComponent{
    constructor(props) {
       super(props);
       this.state = {
           data: ['0','1','2','3','4','5','6','7','8','9'],
           isLoading: false
       }
       console.disableYellowBox = true;
    }
    _onPress= ()=>{
        alert('222')
    }
    _renderItem = ({item,index})=>{
        return (
            <View style = {styles.listF}  onPress={()=>{alert('2222')}}>
               <Text style={{fontSize:40,textAlign: 'center'}}>{item}</Text>
            </View>
        )
    }
    _ItemSeparatorComponent() {
        return (
            <View style={{height:10,}}/>
        )
    }
    _ListEmptyComponent() {
        return (
            <View style={{alignItems: 'center',marginTop: 30}}>
                <Text style={{fontSize: 20, color: Colors.dark}}>我是空的</Text>
            </View>
        )
    }
    _ListFooterComponent() {
        return(
            <View style={{alignItems: 'center',marginTop: 20,}}>
                <Text  style={{fontSize: 20, color: Colors.dark}}>没有数据了</Text>
            </View>
        )
    }
    _ListHeaderComponent() {
        return (
            <View style={{alignItems: 'center',marginTop: 20,}}>
                <Text  style={{fontSize: 20, color: Colors.dark}}>头部组件</Text>
            </View>
        )
    }
    _onRefresh() {
      alert('222')
    }
    // 下来刷新
    _onEndReached = ()=>{
        console.log('处罚')
         var arr = this.state.data;
         var newArr = arr.concat(this.state.data);
         console.log(newArr);
         this.setState({
             data:  newArr,
         })
    };
    // 下拉刷新
    genIndicator() {
        return (
            <View style={styles.indicatorContainer}>
                <ActivityIndicator
                    style={styles.indicator}
                    size="large"
                    animating={true}
                />
                <Text>正在加载更多</Text>
            </View>
        );
    }
    render (){
      return(
          <SafeAreaView style={{flex:1}}>
            <View style={styles.content}>
             <FlatList 
             data={this.state.data}
             refreshing = { this.state.isLoading }
             ListEmptyComponent = {this._ListEmptyComponent} 
             renderItem= {this._renderItem}
             onRefresh = { this._onRefresh }
             ListFooterComponent = { this.genIndicator}
             ListHeaderComponent = { this._ListHeaderComponent}
             ItemSeparatorComponent={this._ItemSeparatorComponent}
             onEndReachedThreshold = {0.1}
             onEndReached={ this._onEndReached}
             >

             </FlatList>
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
        height: 150,
        justifyContent: 'center',
    },
    indicatorContainer: {
        alignItems: "center"
    },
    indicator: {
        color: "red",
        margin: 10
    },
})

export default App;