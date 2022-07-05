import React, { useState } from 'react';
import { View, Text,Button,ScrollView} from 'react-native';
import { useDispatch,useSelector } from "react-redux";
import { setName } from './redux/actions';
import { removeName } from './redux/actions';



const persons = [
    {
      id: "1",
      name: "Earnest Green",
    },
    {
      id: "2",
      name: "Winston Orn",
    },
    {
      id: "3",
      name: "Carlton Collins",
    },
    {
      id: "4",
      name: "Malcolm Labadie",
    },
    {
      id: "5",
      name: "Michelle Dare",
    },
    {
      id: "6",
      name: "Carlton Zieme",
    },
    {
      id: "7",
      name: "Jessie Dickinson",
    },
    {
      id: "8",
      name: "Julian Gulgowski",
    },
    {
      id: "9",
      name: "Ellen Veum",
    },
    {
      id: "10",
      name: "Lorena Rice",
    },
  
    {
      id: "11",
      name: "Carlton Zieme",
    },
    {
      id: "12",
      name: "Jessie Dickinson",
    },
    {
      id: "13",
      name: "Julian Gulgowski",
    },
    {
      id: "14",
      name: "Ellen Veum",
    },
    {
      id: "15",
      name: "Lorena Rice",
    },
];

const NxtScreen=()=>{
    const [ivalue,setIvalue]=useState(0);
    const dispatch=useDispatch();
    const a=()=>{
        dispatch(setName(persons[ivalue].name));
    }
    const b=()=>{
      dispatch(removeName());
    }
    const c=()=>{
        if (ivalue<=persons.length){
            setIvalue(ivalue+1);
        }
        
    }

    const storeData = useSelector(state => state);
      const names=storeData.userReducer.name;
      console.log(ivalue)
    return(  
      <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
          <Text >
              {names[ivalue]}
          </Text>
          <View style={{marginTop:15,}}>
          <Button onPress={()=>{a();c()}} title="AddName">
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