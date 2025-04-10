import React, { useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, Image, TouchableOpacity, 
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

const DangNhap = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword , setShowPassword] = useState(false);

  return (
    <View style={{ flex: 1 }}>

    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topNav}>
        <Text style={styles.navTitle}>Đăng nhập</Text>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "android" ? "padding" : "height"} 
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={styles.innerContainer}>

            <Image source={require('./assets/images/logoC.png')} style={styles.logo} />

            <Text style={styles.title}>Đăng Nhập</Text>
            <View style={styles.inputContainer}>
            <AntDesign style={styles.icon} name="user" size={24} color="#ffa500" />
            
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
            <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="lock-outline" size={24} color="#FF8C00" />
            <TextInput
              style={styles.input}
              placeholder="Nhập Mật khẩu"
              placeholderTextColor="#FFCC99"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <Feather
            style={[styles.icon, {marginLeft:-10} ]}
            name= {showPassword == false ?"eye-off" : 'eye' }   size={24} color="#9E9E9E"
            onPress={() => setShowPassword(!showPassword)}
            />
            </View>
            
            <TouchableOpacity>
            <View >
              <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={()=> 
              {Alert.alert(
                "Thông tin đăng nhập",
                `Email: ${email}\nMật khẩu: ${password}`,
                [{ text: "OK" }]
              );}}
            style={styles.loginButton}>
              <Text style={styles.loginText}>Đăng nhập</Text>
            </TouchableOpacity>
            <Text style={{ color: '#FFA726' }}>Khác</Text>


            <View style={styles.iconLoginLayout}>

            <TouchableOpacity style ={styles.iconLogin}>
            <AntDesign name="google" size={24} color="red" />
            </TouchableOpacity>
            
            <TouchableOpacity style ={styles.iconLogin}>
            {/* <FontAwesome name="facebook" size={24} color="blue" /> */}
            <AntDesign name="facebook-square" size={24} color="blue" />
            </TouchableOpacity>
            </View>
          </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
    //backgroundColor: '#339CFF',
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
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color:'#FFA500' ,
    marginBottom: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
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
  forgotPasswordLayout:{
      alignItems:'flex-end',
  },
  forgotPassword: {
    color: '#FF6F61',
    fontSize: 14,
    marginBottom: 20,
    
  },
  loginButton: {
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
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  registerText: {
    fontSize: 14,
    color: '#fec003',
  },
  boldText: {
    fontWeight: 'bold',
    color: 'red',
    textDecorationLine: 'underline'
  },
  iconLoginLayout:{
    flexDirection:'row',
    
  },
  iconLogin:{
    elevation:10,
    alignItems:'center',
    padding :10,
    borderRadius:10,
    margin:10,
    backgroundColor:'white'
  },
  safeArea: {
    backgroundColor: '#FFC107',
    flex: 1,
  },
  topNav: {
    //backgroundColor: '#339CFF',
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color:'#FFA500' ,
    marginBottom: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    alignContent:'center',
    justifyContent:'center',
    marginTop:20,
  },
});

export default DangNhap;
