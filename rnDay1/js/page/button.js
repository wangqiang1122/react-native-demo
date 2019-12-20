import React from 'react';
import { View, Text, StyleSheet,Button, Alert, Image,SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'

class App extends React.Component{
    constructor(props ) {
        super(props);
        console.disableYellowBox = true;
    }
    render() {
        function onPressLearnMore() {
           alert('222')
        }
        return(
            <SafeAreaView style={{flex:1,backgroundColor: 'green'}}>
                <View style={{backgroundColor: "red"}}>
                    <Button
                        onPress={onPressLearnMore}
                        title="Learn More"
                        color="black"
                        accessibilityLabel="Learn more about this purple button"/>
                </View>
            </SafeAreaView>
        )
    }
}

export default App