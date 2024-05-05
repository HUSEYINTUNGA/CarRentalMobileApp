import { KeyboardAvoidingView, StyleSheet, Text, View , TextInput, TouchableOpacity, ImageBackground, Alert} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function AdminLoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin2024@gmail.com' && password === '2024admin') {
      navigation.navigate('Manage');
    } else {
      Alert.alert('Hata!', 'Geçersiz e-posta veya şifre');
    }
  };

  return (
    <ImageBackground source={require('../../assets/AdminLogin.jpeg')} style={styles.image}>
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
    <View style={styles.containerInput}>
      <TextInput style={styles.input} placeholder='E-mail:' value={email}
      onChangeText={text=>setEmail(text)}
      />
      <TextInput style={styles.input} placeholder='Şifre:' value={password} secureTextEntry
      onChangeText={sifre=>setPassword(sifre)}
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
