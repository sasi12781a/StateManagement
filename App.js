import React from "react";
import {Text,View,Button} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEmail } from "./Src/redux/actions";
import { Store } from "./Src/redux/store";
import { Provider } from "react-redux";

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
      <Button title="AddEmail" onPress={addEmail}>
      </Button>
      <Button  title="RemoveEmail" onPress={removeEmail}>
      </Button>
    </View>
  );
}

const App=()=>{
  return(
    <Provider store={Store}>
      <AppWraper/>
    </Provider>
  )
}
export default App;