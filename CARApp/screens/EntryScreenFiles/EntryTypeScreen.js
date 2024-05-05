import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function EntryTypeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../../assets/login.jpeg')} style={styles.image}>
      <View style={styles.container}>
        
        <View style={styles.box}>
          <Text style={styles.text}>Admin Girişi</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdminLogin')}>
            <Text style={styles.buttonText}>Admin Girişi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.box}>
          <Text style={styles.text}>Kullanıcı Girişi</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SingUp')}>
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: { 
    color: '#ff0000',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle:'italic',
    textAlign:'center',
    margin:50,
    width:'79%',
  },
  button: {
    backgroundColor: "#e0a000",
    borderColor: '#e0a000',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ff0000',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle:'italic',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  box: {
    borderColor: '#e0a000',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
});
