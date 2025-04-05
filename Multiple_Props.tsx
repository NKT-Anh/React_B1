import React from 'react'
import { Text, View,StyleSheet} from 'react-native'

interface NameCat{
  name:string;
}
const Cat = (props:NameCat) =>  {
    return(
        <View>
            <Text style={style.Text}> Hello, I am {props.name}!</Text>
        </View>
    );
} 

const Multiple_Props = () => {
  return (
    <View style ={{flex:1, justifyContent:'center',alignItems:'center', margin:10}}>
        <Cat name = "Maru"/>
        <Cat name = "Spot"/>
        <Cat name = "Aru"/>

       
    </View>
  )
}
const style = StyleSheet.create({
  Text:{
    fontSize:18,
    margin:10,
  }

})



export default Multiple_Props