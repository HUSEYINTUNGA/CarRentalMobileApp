import { KeyboardAvoidingView, StyleSheet, Text, View , TextInput, TouchableOpacity,
  ImageBackground, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';


export default function SingUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSingUp = () => {
    auth.createUserWithEmailAndPassword(email, password).
    then(userCredentials => {
      const user = userCredentials.user;
      Alert.alert("Kayıt başarılı. Hoşgeldiniz: " + user.email);
      navigation.navigate('EntryType');
    })
    .catch(error => Alert.alert(error.message));
    
  };

  return (
    <ImageBackground source={require('../assets/Register.jpeg')} style={styles.image}>
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
      <TouchableOpacity style={styles.button} onPress={handleSingUp}>
        <Text style={styles.textButton}>Kayıt Ol</Text>
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
    borderColor: '#48545b',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#c1c1c1',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle:'italic',
    
  },
  containerButton: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#c1c1c1',
    borderColor: '#48545b',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 200,
    alignItems: 'center',
  },
  textButton: {
    color: '#48545b',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle:'italic',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }

});