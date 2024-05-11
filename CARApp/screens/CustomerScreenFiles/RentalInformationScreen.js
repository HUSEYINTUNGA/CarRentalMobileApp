import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useCreateHistoryMutation } from '../../Apis/rentalHistoryApi';
export default function RentalInformationScreen({ route }) {
  const { carId, userId } = route.params;
  const [startDateTime, setStartDateTime] = useState('');
  const [rentalDuration, setRentalDuration] = useState('');

  const handleSave = () => {
    useCreateHistoryMutation({customerId: userId,vehicleId:carId,rentalDate:setStartDateTime,rentalDuration:setRentalDuration})   
  };

  return (
    <View>
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

const styles = StyleSheet.create({});