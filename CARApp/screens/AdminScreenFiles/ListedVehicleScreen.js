import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useGetAllVehicleQuery } from '../../Apis/vehicleApi';

export default function ListedVehicleScreen() {
  const {data,isLoading} = useGetAllVehicleQuery();
  const [selectedOption, setSelectedOption] = useState('active');
  
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
  
    return (
      <View>
        <Picker
          selectedValue={selectedOption}
          onValueChange={handleOptionChange}
        >
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
          data={data.vehicles}
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
          <Text>Aktif Araçları Listesi</Text>
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
  






const styles = StyleSheet.create({})