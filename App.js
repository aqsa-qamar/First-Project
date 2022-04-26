import React, { useState } from 'react';
import { Text, StyleSheet , View , Button } from 'react-native';

const App = props=>{
    let[counter,SetCounter]=useState(0);
    let[status,setStatus]=useState(false);
    let[reset,setReset] = useState(false);
    let check = null ;
    if (status){
        check = setTimeout(()=>{
            SetCounter(counter + 1);
        },500)
    }else{
        clearTimeout(check)
    }
return(
    <View Style={styles.container}>
        <Text style={styles.Text}>{counter}</Text>
        <View style={styles.btnContainer}>
        <Button disabled={status} title="start" onPress={() => {setStatus(true)}}></Button>
        <Button disabled={!status} title="stop" onPress={() => {setStatus(false) , setReset(true)}}></Button>
        <Button disabled={!reset} title="reset" onPress={() => {SetCounter(0), setReset(false)}}></Button>
        </View>

    </View>
)

}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Text:{
        fontSize:22,
        textAlign:'center',
        marginTop:290,
    },
    btnContainer:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:30,
        padding:9,
    }
})
export default App ;