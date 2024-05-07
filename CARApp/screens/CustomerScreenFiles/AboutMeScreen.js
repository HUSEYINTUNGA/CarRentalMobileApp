import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Title,Appbar} from 'react-native-paper';

export default function AboutMeScreen() {
    const navigation = useNavigation();
  const _handleCustomer = () => {navigation.navigate('Customer')};
  const _handleLogin = () => {navigation.navigate('Login')};
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
      <Appbar.Content title='Hakkımda'/>
      <Appbar.Action icon="car" onPress={() => _handleCustomer(navigation)} />
      <Appbar.Action icon="login" onPress={() => _handleLogin(navigation)} />
      </Appbar.Header>
      <Image source={require('../../assets/tunga.jpg')} style={styles.img}/>
      <Text>AboutMeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    appbar: {
        backgroundColor:'#9b9b9b',
        height:90,
      },
    img:{
      width:100,
      height:100,}
});