import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useCreateHistoryMutation } from '../../Apis/rentalHistoryApi';
export default function RentalInformationScreen({ route }) {
  const { carId, userId } = route.params;
  const [startDateTime, setStartDateTime] = useState('');
  const [rentalDuration, setRentalDuration] = useState('');
  const handleFeedBack = () => {navigation.navigate('FeedBack',{userId: userId})};
  const handleLogin = () => {navigation.navigate('Login')};
  const handleAbout = () => {navigation.navigate('AboutMe',{userId: userId})};
  const handleSettings = () => {navigation.navigate('CustomSettings',{userId: userId})};

  
  const handleSave = () => {
    useCreateHistoryMutation({customerId: userId,vehicleId:carId,rentalDate:setStartDateTime,rentalDuration:setRentalDuration})   
  };

  return (
    <View>
      <Appbar.Header style={styles.appbar}>    
      <Appbar.Content title={category}/>
      <Appbar.Action icon="email" onPress={() => handleFeedBack(navigation)} />
      <Appbar.Action icon="login" onPress={() => handleLogin(navigation)} />
      <Appbar.Action icon="cog" onPress={() => handleSettings(navigation)} />
      <Appbar.Action icon="information" onPress={() => handleAbout(navigation)} />
      </Appbar.Header>

      <Text>Kiralama Bilgileri</Text>
      <TextInput
        placeholder="Başlangıç Zamanı: Örnek, 2024-05-15 10:00"
        value={startDateTime}
        onChangeText={setStartDateTime}
      />
      <TextInput
        placeholder="Kiralama Süresi (gün): Örnek, 3"
        value={rentalDuration}
        onChangeText={setRentalDuration}
        keyboardType="numeric"
      />
      <Button title="İstek At" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
   appbar: {
    backgroundColor:'#9b9b9b',
    height:90,
  },
  container: {
    flex: 1,
    backgroundColor: '#cecece',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin:6,
    
  },
  button:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  textInput:{
    backgroundColor:'transparent',
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  }

});