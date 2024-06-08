import { StyleSheet, Text, View, FlatList,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useGetAllVehicleQuery } from '../../Apis/vehicleApi';
import{Picker} from'@react-native-picker/picker';
import { Title,Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function ListedVehicleScreen() {
  const {data,isLoading} = useGetAllVehicleQuery();
  const [selectedOption, setSelectedOption] = useState('');
  const navigation = useNavigation();

    const handleOptionChange = (value) => {
      setSelectedOption(value);
    };
  
    const renderVehicleList = () => {
      if (selectedOption === 'active') {
        return <ListedOfActiveVehicles />;
      } else if (selectedOption === 'rental') {
        return <ListedOfRentalVehicles />;
      }
      
    };
    const handleAdd=()=>{navigation.navigate('AddVehicle');};
    const handleRemove=()=>{navigation.navigate('RemoveVehicle');};

  
    return (
      <View>
        <Appbar.Header style={styles.appbar}>
          <Appbar.Content title="Araç Listeleme" />
          <Appbar.Action icon="car" onPress={()=>handleAdd(navigation)} />    
          <Appbar.Action icon="minus" onPress={()=>handleRemove(navigation)} />   
        </Appbar.Header>
        <Picker
          selectedValue={selectedOption}
          onValueChange={handleOptionChange}
        > 
          <Text>Listelemek istediğiniz araçların türünü seçiniz</Text>
          <Picker.Item label="Lütfen Seçiniz.." value="  " />
          <Picker.Item label="Aktif Araçları Görüntüle" value="active" />
          <Picker.Item label="Kiradaki Araçları Görüntüle" value="rental" />
        </Picker>
        {renderVehicleList()}
      </View>
    );



    function ListedOfActiveVehicles(){
    
      if (isLoading) {
        return <Title>İsLoading...</Title>;
      }
      return(
        <View>
          <Text>Aktif Araçları Listesi</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
            if (item.isActive) {
              return (
                <TouchableOpacity
                  style={styles.container}
                  
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
      )
    }
  
    function ListedOfRentalVehicles(){
      
      if (isLoading) {
        return <Title>İsLoading...</Title>;
      }
      return(
        <View>
          <Text>Kiradaki Araçların Listesi</Text>
          <FlatList
          data={data.vehicles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            if (!item.isActive) {
              return (
                <TouchableOpacity
                  style={styles.container}                 
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
      )
    }
  }
  


  const styles = StyleSheet.create({
    appbar: {
      backgroundColor:'#9b9b9b',
      height:90,
    },
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
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
      color: '#333',
  },
  textModel: {
      fontSize: 14,
      color: '#555',
  },
  textPrice: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#007BFF',
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
      borderColor: '#ddd',
      marginLeft: 10,
  },
  picker: {
      height: 50,
      width: '100%',
      borderColor: '#007BFF',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
  },
  });