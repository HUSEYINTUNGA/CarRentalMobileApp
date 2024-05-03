import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Title,Appbar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function FeedBackScreen() {
  const navigation = useNavigation();
  const _goBack = () =>{navigation.navigate('Customer')}
  const _handleCustomer = () => {navigation.navigate('Customer')};
  const _handleLogin = () => {navigation.navigate('Login')};
  return (
    <View>
      <Appbar.Header style={styles.appbar}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title='Bize Ulaşın'/>
      <Appbar.Action icon="car" onPress={() => _handleCustomer(navigation)} />
      <Appbar.Action icon="login" onPress={() => _handleLogin(navigation)} />
      </Appbar.Header>
    </View>
  )
}

const styles = StyleSheet.create({})