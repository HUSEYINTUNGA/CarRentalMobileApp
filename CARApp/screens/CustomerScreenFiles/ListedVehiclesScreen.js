import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react';
import { Title,Appbar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useGetVehiclesByCategoryIdQuery } from '../../Apis/categoryApi';
export default function ListedVehicles({ route }) {
  const  {categoryId, category, userId } = route.params;
  const navigation = useNavigation();
  const {data,isLoading} = useGetVehiclesByCategoryIdQuery(categoryId);

    if (isLoading) {
      return <Title>İsLoading...</Title>;
    }
    
    const handleFeedBack = () => {navigation.navigate('FeedBack',{userId: userId})};
    const handleLogin = () => {navigation.navigate('Login')};
    const handleAbout = () => {navigation.navigate('AboutMe',{userId: userId})};
    const handleSettings = () => {navigation.navigate('CustomerSettings',{userId: userId})};
    const handleDetails = (id) => {navigation.navigate('VehicleDetails',{carId:id,userId:userId});}; 
    
  return (
    <View style={{backgroundColor: '#aaffff'}}>

      <Appbar.Header style={styles.appbar}>    
      <Appbar.Content title={category}/>
      <Appbar.Action icon="email" onPress={() => handleFeedBack(navigation)} />
      <Appbar.Action icon="login" onPress={() => handleLogin(navigation)} />
      <Appbar.Action icon="cog" onPress={() => handleSettings(navigation)} />
      <Appbar.Action icon="information" onPress={() => handleAbout(navigation)} />
      </Appbar.Header>
      
      <FlatList
        data={data.vehicles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (item.isActive) {
            return (
              <TouchableOpacity
                style={styles.container}
                onPress={() => handleDetails(item.id)}
              >
                <Image source={{ uri: item.pictureUrl }} style={styles.img} />
                <View style={styles.textContainer}>
                  <Text style={styles.textBrand}>{item.brand}</Text>
                  <Text style={styles.textModel}>
                    {item.model} {item.modelYear}
                  </Text>
                  <Text style={styles.textPrice}>{item.price} TL</Text>
                  <Text style={styles.textPlate}>{item.numberPlate}</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return null; 
          }
      }}/>
    </View>
  );
};

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
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  textBrand: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textModel: {
    fontSize: 14,
    color: '#555',
  },
  textPrice: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
  textPlate: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  img: {
    width: 150,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 10,
  },
});