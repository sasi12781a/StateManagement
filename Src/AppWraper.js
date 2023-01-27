import React,{useState} from "react";
import {Text,View,Button} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEmail } from "./redux/actions";
import { store } from "./redux/store";
import { removeEmail } from "./redux/actions";

function AppWraper({navigation}) {
    const dispatch=useDispatch();
    const [ivalue,setIvalue]=useState(0);
    const storeData = useSelector(state => state);
    const email=storeData.userReducer.email;
    const mails=["s@gmail.com","k@gmail.com","m@gmail.com","c@gmail.com"]
  
    const addEmail=()=>{
      dispatch(setEmail(mails[ivalue]))
    
    }

    const index=()=>{
      if (ivalue<=mails.length){
          setIvalue(ivalue+1);
      }
    }
    
  
    const changeEmail=()=>{
      dispatch(setEmail("sasi.@gmail.com"))
    }

    const rEmail=()=>{
        dispatch(removeEmail())  
    }
    
    var state = store.getState();
    console.log(state);
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>
          {email}
        </Text>
        <View style={{marginTop:20}}>
            <Button  title="AddEmail" onPress={()=>{addEmail();index()}}>
            </Button>
        </View>
        <View style={{marginTop:20}}>
            <Button  title="ChangeEmail" onPress={changeEmail}>
            </Button>
        </View>

        <View style={{marginTop:20}}>
            <Button  title="Remove email" onPress={rEmail}>
            </Button>
        </View>
        <View style={{marginTop:20}} >
            <Button  title="NextPage" onPress={() => navigation.navigate('Nxt')}>
            </Button>
          </View>
      </View>
    );
}

export default AppWraper;