import React from 'react';
import { View, Text,Button } from 'react-native';
import { useDispatch,useSelector } from "react-redux";
import { setName } from './redux/actions';

const NxtScreen=()=>{
    const dispatch=useDispatch();
    const a=()=>{
      dispatch(setName("sasi"));
    }
    const b=()=>{
      dispatch(setName(''));
    }
    const storeData = useSelector(state => state);
      const name=storeData.userReducer.name;
  
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
            <Text>
              {name}
            </Text>
            <View style={{marginTop:15,}}>
              <Button onPress={a} title="AddName">
              </Button>
            </View>
            <View style={{marginTop:15,}}>
              <Button onPress={b} title="RemoveName">
              </Button>
            </View>
        </View>
    )
}

export default NxtScreen;