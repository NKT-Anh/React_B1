import { StyleSheet, Text, TouchableOpacity, View ,TouchableWithoutFeedback} from 'react-native'
import React, { useState } from 'react'
import { useNavigation  } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const menuItem = [
  { key: '1', name: 'ProfileScreen', icon: 'person' },
  { key: '2', name: 'HomeScreen', icon: 'home' },
  { key: '3', name: 'LogOut', icon: 'log-out' },
];
const DrawerScreen = () => {
  const [selectedMenu, setSelectedMenu] = useState('1');
  const [sidebar,setSidebar] = useState(true);
  const navigation = useNavigation();

  const renderItem  = () =>
  {
    switch(selectedMenu){
      case '1': 
        return <ProfileScreen/>
      case '2':
        return <HomeScreen/>
    }
  }
  const getTitle = () =>{
    switch(selectedMenu){
      case '1':
        return 'Profile';
      case '2':
        return 'Home'
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea} >
        <View style={styles.topNav}>
          {!sidebar && (
            <TouchableOpacity style={styles.openBtn} onPress={()=> setSidebar(true)}>
               <Ionicons name="menu" size={28} color="white" />
            </TouchableOpacity>
          )}
          <Text style={styles.navTitle}>
            {getTitle()}
          </Text>
        </View>
        <View style={styles.container}>
          {sidebar && 
          <TouchableWithoutFeedback onPress={() => setSidebar(false)}>
              <View style={styles.overPlay}></View>
          </TouchableWithoutFeedback>
          }
          {sidebar && (
            <View style={styles.sidebar}>
                 <View style={styles.navMenu}>
                <Text  style={styles.navTitle}>Admin</Text>
                <TouchableOpacity onPress={() => setSidebar(false)} style={styles.closeBtn} >
                <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
            </View>
            {menuItem.map((item => (
              <TouchableOpacity
              key={item.key}
              style={[
                styles.menuItem,
                selectedMenu == item.key && styles.menuItemActive
                
            ]}
            onPress={() =>{
              if(item.key == '5'){
                navigation.goBack();
              }
              setSelectedMenu(item.key)
            }}
              >
                <Ionicons name={item.icon} size={20} color="white" style={styles.icon} />
                <Text style={styles.menuText}>
                 {item.name}
                </Text>
              </TouchableOpacity>
            )))}
            </View>
          )}
          <View style={styles.content}>
          <View style={styles.titleText}>
              {renderItem()}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DrawerScreen

const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection:'row',
  },
  sidebar:{
      width:'60%',
      backgroundColor: '#007BFF',
      paddingHorizontal:10,
      position: 'absolute',
      zIndex: 10,
      left: 0,
      top: 0,
      bottom: 0
  },
  menuItem:{
      paddingHorizontal:10,
      borderRadius:5,
      marginBottom:10,
      paddingVertical:5,
      flexDirection: 'row',
      alignItems: 'center'
  },
  menuItemActive:{
      backgroundColor: '#0056b3',
  },
  menuText:{
      color:'white',
      fontWeight:'600',
      fontSize:15,
  },
  navTitle:{
      color:'white',
      fontWeight:'600',
      fontSize:22,
      alignItems:'center',
      justifyContent:'center',
      marginBottom: 20,
      paddingHorizontal:10,
  },
  navMenu:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  closeBtn:{
      margin:5,
  },
  openBtn:{
      padding:11,
  },
  content: {
      flex: 1,
      backgroundColor: '#fff',
      position: 'relative',
  },
  contentText:{
      fontSize: 18,
      fontWeight: '600',
      
  },
  titleText:{
      marginTop: 10,
      marginLeft: 10,
      flex: 1,
      
  },    
  safeArea: {
      backgroundColor: '#007BFF',
      flex: 1,
  },
  topNav: {
      height: 50,
      marginLeft:10,
      flexDirection:'row'
  },
  overPlay:{
      position: 'absolute',
      zIndex:1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(145, 145, 145, 0.1)',

  },
  icon: {
    marginRight: 10,
  },
})