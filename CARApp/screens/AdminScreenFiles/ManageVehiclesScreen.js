import { FlatList, StyleSheet, Text, View,TextInput, Button,TouchableOpacity,Image, Alert } from 'react-native'
import React, { useState } from 'react'
import {useCreateVehicleMutation, useGetAllVehicleQuery, useRemoveVehicleMutation}from '../../Apis/vehicleApi';
import{Picker} from'@react-native-picker/picker';
import { useGetAllCategoryQuery } from '../../Apis/categoryApi';
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ManageVehiclesScreen() {
    const [selectedOption, setSelectedOption] = useState('');
    
    const handleOptionChange = (value) => {
      setSelectedOption(value);
    };
    const renderVehicleList = () => {
      if (selectedOption === 'remove') {
        return <RemoveVehicle/>;
      }
      else if (selectedOption === 'update') {
        return <UpdateVehicle/>;
      }
      
    };
  
  return(


// Buraya ekleme işlemi yapılacak


    <View>
      <Text>Başka bir işlem mi yapmak istiyorsunuz</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={handleOptionChange}
      >
          <Picker.Item label="Lütfen Seçiniz.." value="  " />
          <Picker.Item label="Araç Sil" value="remove" />
          <Picker.Item label="Araç Bilgilerini Güncelle" value="update" />
      </Picker>
      {renderVehicleList()}
      
    </View>
    
  )
  }

  function RemoveVehicle(){
    const [removeVehicle] = useRemoveVehicleMutation();
    const {data,isLoading} = useGetAllVehicleQuery();
    const handleRemove = async (vehicleId) => {
      Alert.alert(
        "Araç Silme", 
        "Bu aracı silmek istediğinizden emin misiniz?", 
        [
          {
            text: "İptal",
            onPress: () => console.log("Silme işlemi iptal edildi."),
            style: "cancel"
          },
          { text: "OK", onPress: async () => {
              try {
                await removeVehicle(vehicleId);
              } catch (error) {
                console.error(error);
              }
            } 
          }
        ]
      );
    }
  
    if (isLoading) {
      return <Title>İsLoading...</Title>;
    }
  
    return(
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.container} onPress={() => handleRemove(item.id)}>
              <Image source={{ uri: item.pictureUrl }} style={styles.img} />
              <View style={styles.textContainer}>
                <Text style={styles.textBrand}>{item.brand}</Text>
                <Text style={styles.textModel}>{item.model}</Text>
                <Text style={styles.textPlate}>{item.numberPlate}</Text>
                
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }

  function UpdateVehicle(){
    const {data,isLoading} = useGetAllVehicleQuery();
    const navigation= useNavigation();
    const handleUpdate=(vehicleId)=>{
      navigation.navigate('UpdateVehicle',{vehicleId:vehicleId})
    }
    if (isLoading) {
      return <Title>İsLoading...</Title>;
    }
    return(
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.container} onPress={() => handleUpdate(item.id)}>
              <Image source={{ uri: item.pictureUrl }} style={styles.img} />
              <View style={styles.textContainer}>
                <Text style={styles.textBrand}>{item.brand}</Text>
                <Text style={styles.textModel}>{item.model}</Text>
                <Text style={styles.textPlate}>{item.numberPlate}</Text>   
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  
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
  button:{
    color: 'red',
    width: 30,
    height: 30,
  }
})