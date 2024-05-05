import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function FeedBackScreen() {
  const navigation = useNavigation();
  const _handleCustomer = () => {navigation.navigate('Customer')};
  const _handleLogin = () => {navigation.navigate('Login')};
  const _handleAbout = () => {navigation.navigate('AboutMe')};
  const _handleSettings = () => {navigation.navigate('Login')};

  return (
    <View>
      <Appbar.Header style={styles.appbar}>
      <Appbar.Content title='Bize Ulaşın'/>
      <Appbar.Action icon="car" onPress={() => _handleCustomer(navigation)} />
      <Appbar.Action icon="login" onPress={() => _handleLogin(navigation)} />
      <Appbar.Action icon="cog" onPress={() => _handleSettings(navigation)} />
      <Appbar.Action icon="information" onPress={() => _handleAbout(navigation)} />
      </Appbar.Header>
    </View>
  )
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor:'#9b9b9b',
    height:90,
  },
})