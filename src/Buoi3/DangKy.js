import React, { useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, Image, TouchableOpacity, 
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Fontisto,Feather} from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

const DangKy = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword , setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword , setShowConfirmPassword] = useState(false);
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>

    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topNav}>
        <Text style={styles.navTitle}>Đăng ký</Text>
      </View>
      <View style={styles.container}>
        <View style={{ flex: 1,alignItems:'center' }}>
            <View style={styles.viewInput}>
            <Fontisto style={styles.icon} name="email" size={24} color="#ffa500" />
            <TextInput 
                style={styles.input}
                placeholder="Nhập Email"
                placeholderTextColor="#FFCC99"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            </View>

            <View style={styles.viewInput}>
            <MaterialIcons style={styles.icon} name="lock-outline" size={24} color="#FF8C00" />
            <TextInput 
                style={styles.input}
                placeholder="Nhập mật khẩu"
                placeholderTextColor="#FFCC99"
                autoCapitalize="none"
                value={password}
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
            />
            <Feather
                style={[styles.icon , {marginLeft:-10}]}
                name = {showPassword == false ? "eye-off" : "eye"} size = {24} color="#9E9E9E"
                onPress={() => setShowPassword(!showPassword)}
            />
            </View>

            <View style={styles.viewInput}>
            <MaterialIcons style={styles.icon} name="lock-outline" size={24} color="#FF8C00" />
            <TextInput 
                style={styles.input}
                placeholder="Nhập lại mật khẩu"
                placeholderTextColor="#FFCC99"
                autoCapitalize="none"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Feather
                style={[styles.icon , {marginLeft:-10}]}
                name ={showConfirmPassword == false ? "eye-off" : "eye"}  size={24} color="#9E9E9E"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />  
            </View>

            <TouchableOpacity style={styles.dangkyBtn}>
            <Text style={styles.dangkyTxt}>Đăng ký</Text>
            </TouchableOpacity>

            <View style={{width:'100%', borderWidth:0.5, marginTop:10}}></View>
            <TouchableOpacity style={{right:0}}
            onPress={()=> navigation.navigate('DangNhap')}
            >
            <Text style={styles.boldText}>Đã có tài khoản ? Đăng nhập</Text>
            </TouchableOpacity>
            
        </View>
        
        </View>
    </SafeAreaView>
   
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFC107',
    flex: 1,
  },
  topNav: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  
  navTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 20,
    paddingTop:60,
    justifyContent: 'center',
  },
  icon:{
    marginVertical:12,
  },
  innerContainer: {
    marginVertical:"10%",
    alignItems: 'center',
    flex:1,
  },

  inputContainer:{
    height: 50,
    width:'90%',
    marginVertical:10,
    borderRadius: 30,
    backgroundColor:'#F0F8FF',
    paddingHorizontal: 10,
    marginBottom: 15,
    flexDirection:'row',
    //alignSelf:'center',
    elevation:10,
    borderColor:'black',
    borderWidth:0.12,
  },
  input: {
    width:'80%',
    fontSize: 17,
    marginLeft:10,
    marginVertical:3,
    color:'#FFA726',
    
  },
  dangkyBtn: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFB347',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    alignSelf:'center',
    borderColor:'black',
    borderWidth:1,
  },
  dangkyTxt:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    textShadowColor:'black',
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },


  safeArea: {
    backgroundColor: '#FFC107',
    flex: 1,
  },
  topNav: {
    height: 50,
    marginLeft:10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navTitle:{
    fontSize:23,
    fontWeight:'bold',
    color:'white',
    textShadowColor: 'red',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginTop:10,
  },
  viewInput:{
    width:'90%',
    flexDirection:'row',
    height:50,
    backgroundColor:'#F0F8FF',
    paddingHorizontal:10,
    borderWidth:0.5,
    borderRadius:50,
    marginVertical:10,
    elevation:10,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'red',
    textDecorationLine: 'underline',
    marginVertical:20,
    marginTop:50,
  },
});

export default DangKy;
