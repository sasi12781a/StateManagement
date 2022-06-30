import React from "react";
import {Text,View,Button} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEmail } from "./redux/actions";


function AppWraper() {
    const dispatch=useDispatch();
    const storeData = useSelector(state => state);
    const email=storeData.userReducer.email;
  
    const addEmail=()=>{
      dispatch(setEmail("s@gmail.com"))
    }
  
    const removeEmail=()=>{
      dispatch(setEmail(""))
    }
  
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>
          {email}
        </Text>
        <View style={{marginTop:20}}>
            <Button  title="AddEmail" onPress={addEmail}>
            </Button>
        </View>
        <View style={{marginTop:20}}>
            <Button  title="RemoveEmail" onPress={removeEmail}>
            </Button>
        </View>
      </View>
    );
  }

export default AppWraper;