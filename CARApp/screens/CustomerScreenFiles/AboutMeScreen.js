import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
export default function AboutMeScreen() {
    const navigation = useNavigation();
  const _handleCustomer = () => {navigation.navigate('Customer')};
  const _handleLogin = () => {navigation.navigate('Login')};
  return (
    <View>
      <Appbar.Header style={styles.appbar}>
      <Appbar.Content title='Hakkımda'/>
      <Appbar.Action icon="car" onPress={() => _handleCustomer(navigation)} />
      <Appbar.Action icon="login" onPress={() => _handleLogin(navigation)} />
      </Appbar.Header>
        <Image source={'../../assets/tunga.jpg'}/>
      <Text>AboutMeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    appbar: {
        backgroundColor:'#9b9b9b',
        height:90,
      },
})