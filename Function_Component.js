import React, { Component, useState } from 'react'
import { View , Text, Button,StyleSheet } from 'react-native';
const Cat =  props =>{
    const [isHungry , setIsHungry] = useState(true);
    
    return(
        <View >
            <Text style= {styles.Text}>
                I am {props.name} , and I am {isHungry ? "Hungry":"Full"}
            </Text>
            <Button
            onPress={ () => {
                setIsHungry(false);

            }}
            disabled={!isHungry}
            title={isHungry ?"Pour me some milk , please" :"Thank You !"}
            />
        </View>
    );
} 
class Function_Component extends Component{
    render() {
    return(
        <>
        <View style={styles.container}>
            <Cat name = "cat 1 "/>
            <Cat name = "cat 2 "/>
        </View>
        </>
    );
    }
}
const styles = StyleSheet.create({
    Text:{
      fontSize:18,
      margin:10,
    },
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
  
  })

export default Function_Component