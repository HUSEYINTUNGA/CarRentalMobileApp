import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Title,Appbar} from 'react-native-paper';

export default function AboutMeScreen({route}) {
  const {userId} = route.params;
  const navigation = useNavigation();
  const handleLogin = () => {navigation.navigate('Login')};
  const handleSettings = () => {navigation.navigate('CustomerSettings', {userId: userId});};
  const handleFeedBack = () => {navigation.navigate('FeedBack',{userId: userId})};
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
      <Appbar.Content title='Hakkımda'/>
      <Appbar.Action icon="login" onPress={() => handleLogin(navigation)} />
      <Appbar.Action icon="cog" onPress={() => handleSettings(navigation)} />
      <Appbar.Action icon="email" onPress={handleFeedBack} />
      </Appbar.Header>
      <Image source={require('../../assets/tunga.jpg')} style={styles.img}/>
      <Text>Araç Kiralama Mobil Uygulaması; Hüseyin TUNGA tarafından oluşturuldu.</Text>

      <Text>Projenin ilk geliştirim tarihi , 26.02.2024-07.07.2024 tarihleri arasıdır.</Text>
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