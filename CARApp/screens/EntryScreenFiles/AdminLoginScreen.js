import { KeyboardAvoidingView, StyleSheet, Text, View , TextInput, TouchableOpacity, ImageBackground, Alert} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useLoginAdminMutation } from '../../Apis/CustomerApi';
export default function AdminLoginScreen() {
  const navigation = useNavigation();
  const [data,setData]=useState(false);
  const [model, setModel] = useState({
    email: '',
    password: '',
  });
  const[userLogin]=useLoginAdminMutation();
  

  function SetLoginInformation(inputIdentifier,enteredValue){
    setModel((currentInputValue)=>{
      return{
       ...currentInputValue,
        [inputIdentifier]:enteredValue
      }
    })
  };
  const handleLogin = async () => {
    userLogin({email:model.email,password:model.password}).then((value)=>setData(value));   
    if(!data) {
      Alert.alert("Giriş bilgileri hatalı. Lütfen bilgilerinizi kontrol edin ve tekrar deneyin.")
    }
    else{
      Alert.alert("Giriş Başarılı. Hoşgeldiniz Sayın "+data.customerName)
      navigation.navigate('Manage');
    }
  }

  return (
    <ImageBackground source={require('../../assets/AdminLogin.jpeg')} style={styles.image}>
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
    <View style={styles.containerInput}>
      <TextInput style={styles.input} placeholder='E-mail:' 
      onChangeText={SetLoginInformation.bind(this,'email')}
      />
      <TextInput style={styles.input} placeholder='Şifre:'  secureTextEntry
      onChangeText={SetLoginInformation.bind(this,'email')}
      />
    </View>
    <View style={styles.containerButton}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
   </KeyboardAvoidingView>
   </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    backgroundColor:'transparent',
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#36a334',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle:'italic',
    
  },
  containerButton: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'black',
    borderColor: '#36a334',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 200,
    alignItems: 'center',
  },
  textButton: {
    color: '#36a334',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle:'italic',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
