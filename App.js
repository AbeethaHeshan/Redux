import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import  {store}  from '../ReduxOne/redux/reducers'
import Main from './screens/Main';

export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}
