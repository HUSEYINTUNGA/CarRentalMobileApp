import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Title, Appbar } from 'react-native-paper';
import { useGetVehiclesByVehicleIdQuery } from '../../Apis/vehicleApi';
import { useNavigation } from '@react-navigation/native';

export default function VehicleDetails({ route }) {
  const { carId,userId } = route.params;
  const navigation = useNavigation();
  const { data, isLoading } = useGetVehiclesByVehicleIdQuery(carId);
 
  if (isLoading) {
    return <Title>Loading...</Title>;
  }

 
  const handleFeedBack = () => navigation.navigate('FeedBack');
  const handleLogin = () => navigation.navigate('Login');
  const handleSettings = () => navigation.navigate('Customer');
  const handleAbout = () => navigation.navigate('AboutMe');

  const handleRent = () => {
    navigation.navigate('RentalInformation', { carId: carId, userId: userId });
  };
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}> 
                  
        <Appbar.Content title="Araç Detay" />
        <Appbar.Action icon="email" onPress={handleFeedBack} />
        <Appbar.Action icon="login" onPress={handleLogin} />
        <Appbar.Action icon="cog" onPress={handleSettings} />
        <Appbar.Action icon="information" onPress={() => handleAbout(navigation)} />
      </Appbar.Header>

      <Image style={styles.img} source={{ uri: data.pictureUrl }} />
      <View style={styles.infoContainer}>
        <Text style={styles.brand}>{data.brand}</Text>
        <Text style={styles.model}>{data.model} {data.modelYear}</Text>
        <Text style={styles.plate}>Plaka: {data.numberPlate}</Text>
        <Text style={styles.transmission}>Vites Türü: {data.transmissionType}</Text>
        <Text style={styles.fuel}>Yakıt Türü: {data.fuelType}</Text>
        <Text style={styles.price}>Günlük Ücret: {data.price} TL</Text>
      </View>

      <TouchableOpacity style={styles.rentButton} onPress={handleRent}>
        <Text style={styles.rentButtonText}>Kirala</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaffff',
    
  },
  appbar: {
    backgroundColor: '#9b9b9b',
    height: 90,
  },
  img: {
    width: '96%',
    height: '35%',
    borderRadius: 10,
    marginVertical: 10,
    marginLeft: 8,
    
  },
  infoContainer: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#3affff',
    width: '96%',
    marginLeft: 8,
    height:'40%',
    
  },
  brand: {
    fontWeight: 'bold',
    fontSize: 40,
    fontStyle:'italic'
  },
  model: {
    fontSize: 28,
    color: 'black',
    fontStyle:'italic'
  },
  plate: {
    fontSize: 25,
    color: 'black',
    marginTop: 10,
  },
  transmission: {
    fontSize: 25,
    color: 'black',
    marginTop: 10,
  },
  fuel: {
    fontSize: 25,
    color: 'black',
    marginTop: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'red',
    marginTop: 10,
  },
  rentButton: {
    backgroundColor: '#1c1c1c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',   
    width: '96%',
    height: 70,
    marginBottom: 20,
    marginLeft: 8,
   
  },
  rentButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    fontStyle:'italic',

  },

});
