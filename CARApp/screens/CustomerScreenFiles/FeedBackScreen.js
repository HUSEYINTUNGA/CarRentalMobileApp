import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function FeedBackScreen({route}) {
  const {userId}=route.params;
  const navigation = useNavigation();
  const handleLogin = () => {navigation.navigate('Login')};
  const handleAbout = () => {navigation.navigate('AboutMe',{userId: userId})};
  const handleSettings = () => {navigation.navigate('CustomerSettings',{userId: userId})};

  return (
    <View>
      <Appbar.Header style={styles.appbar}>
      <Appbar.Content title='Bize Ulaşın'/>
      <Appbar.Action icon="login" onPress={() => handleLogin(navigation)} />
      <Appbar.Action icon="cog" onPress={() => handleSettings(navigation)} />
      <Appbar.Action icon="information" onPress={() => handleAbout(navigation)} />
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