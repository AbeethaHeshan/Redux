import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import {counterSlice,incremented} from '../redux/reducers'


export default function Main() {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.value)

  return (
      <View style={{flex:1}}>
         <Text> {count} </Text>
          <Button onPress={()=> dispatch(incremented())}  title={'Inctement'} />
      </View>
  );
}
