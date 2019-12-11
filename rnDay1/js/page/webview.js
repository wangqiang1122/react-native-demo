import React from 'react';
import { View, Text, StyleSheet,Button, Alert, Image,SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'

class App extends React.Component{
    constructor(props ) {
       super(props);
       console.disableYellowBox = true;
    }
    render() {
        return(
            <SafeAreaView style={{flex:1,backgroundColor: 'green'}}>
             <View style={{flex:1}}>
                 
                {/* <WebView source={{uri: 'https://www.baidu.com/'}}/> */}
                <WebView
                injectedJavaScript = {`alert(111111)`} 
                source={require('../../html/index.html')}/>
            </View>
            </SafeAreaView>
        )
    }
}

export default App