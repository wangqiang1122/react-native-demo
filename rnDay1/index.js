/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/page/app';
import FlatList from './js/page/faltList';
import index3 from './js/page/input'
import webView from './js/page/webview'
import button from './js/page/button'
import swaperList from './js/page/swapeflatList'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FlatList);
