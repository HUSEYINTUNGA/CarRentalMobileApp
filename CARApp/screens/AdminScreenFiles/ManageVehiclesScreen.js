import { FlatList, StyleSheet, Text, View,TextInput, Button,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import {useCreateVehicleMutation, useGetAllVehicleQuery, useRemoveVehicleMutation}from '../../Apis/vehicleApi';
import{Picker} from'@react-native-picker/picker';
import { useGetAllCategoryQuery } from '../../Apis/categoryApi';
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ManageVehiclesScreen() {
    const [selectedOption, setSelectedOption] = useState('active');
    const renderVehicleList = () => {
      if (selectedOption === 'add') {
        return <AddVehicle />;
      }
      else if (selectedOption === 'remove') {
        return <RemoveVehicle/>;
      }
      else if (selectedOption === 'update') {
        return <UpdateVehicle/>;
      }
      
    };
  
  return(
    <View>

      <Picker
        selectedValue={selectedOption}
        onValueChange={handleOptionChange}
      >
          <Picker.Item label="Araç Ekle" value="add" />
          <Picker.Item label="Araç Sil" value="remove" />
          <Picker.Item label="Araç Bilgilerini Güncelle" value="update"/>
      </Picker>
      {renderVehicleList()}
    </View>
    
  )
  }


  function AddVehicle(){
    const {data,isLoading}=useGetAllCategoryQuery();
    const {vehicle,setVehicle}=useState('');

    if(isLoading){
      return <Title>İsLoading...</Title>;
    }

    const[inputVehicleModel]=useCreateVehicleMutation();

    const [model,setModel]=useState({
      brand:'',
      model:'',
      modelYear:'',
      price:'',
      transmissionType:'',
      fuelType:'',
      numberPlate:'',
      isActive:true,
      pictureUrl:'',
      categoryId:''
    });

    function setVehicleInformation(inputIdentifier,enteredValue){
      setModel((currentInputValue)=>{
        return{
         ...currentInputValue,
          [inputIdentifier]:enteredValue
        }
      })
    };

    const handleAddVehicle= async ()=>{
      inputVehicleModel({brand:model.brand,model:model.model,modelYear:model.modelYear,
        price:model.price,transmissionType:model.transmissionType,fuelType:model.fuelType,
        numberPlate:model.numberPlate,isActive:model.isActive,pictureUrl:model.pictureUrl,
        categoryId:model.categoryId}).then((value)=>setVehicle(value));
      if(!vehicle) {
        Alert.alert("Araç kaydedilemedi bilgileri doğru formatta girdiğinizden emin olun")
      }
      else{
        Alert.alert("Kayıt Başarılı")
      }
      return(
        <View>
          <TouchableOpacity style={styles.container}>
                <Image source={{ uri: vehicle.pictureUrl }} style={styles.img} />
                <View style={styles.textContainer}>
                  <Text style={styles.textBrand}>{vehicle.brand}</Text>
                  <Text style={styles.textModel}>{vehicle.model} {vehicle.modelYear}</Text>
                  <Text style={styles.textPrice}>{vehicle.price} TL</Text>
                  <Text style={styles.textPlate}>{vehicle.numberPlate}</Text>
                </View>
          </TouchableOpacity>
        </View>)
    }

    return(
     
      <View>
        <TextInput placeholder='Araç markasını giriniz: ' onChangeText={setVehicleInformation.bind(this,'brand')}/>
        <TextInput placeholder='Araç modelini giriniz: ' onChangeText={setVehicleInformation.bind(this,'brand')}/>
        <TextInput placeholder='Araç model yılını giriniz: ' onChangeText={setVehicleInformation.bind(this,'brand')}/>
        <TextInput placeholder='Aracın günlük kiralama ücretini giriniz: ' onChangeText={setVehicleInformation.bind(this,'brand')}/>
        <Text>Aracın Şanzıman türünü seçiniz</Text>
        <Picker onChangeValue={setVehicleInformation.bind(this,'transmissionType')}>
          <Picker.Item label='Lütfen Seçiniz..' value=' '/>
          <Picker.Item label='Otomatik' value='Otomatik'/>
          <Picker.Item label='Manuel' value='Manuel'/>
        </Picker>
        <Text>Aracın yakıt türünü seçiniz</Text>
        <Picker onChangeValue={setVehicleInformation.bind(this,'fuelType')}>
          <Picker.Item label='Lütfen Seçiniz..' value=' '/>
          <Picker.Item label='Benzin' value='Benzin'/>
          <Picker.Item label='Dizel' value='Dizel'/>
          <Picker.Item label='LPG' value='LPG'/>
          <Picker.Item label='Elektrikli' value='Elektrikli'/>
          <Picker.Item label='Hibrit' value='Hibrit'/>
        </Picker>
        <TextInput placeholder='Aracın plakasını giriniz: ' onChangeText={setVehicleInformation.bind(this,'numberPlate')}/>
        <TextInput placeholder='Aracın resminin Url adresini giriniz: ' onChange={setVehicleInformation.bind(this,'pictureUrl')}/>
        <Text>Araç hangi kategoride?</Text>
        <Picker selectedValue={setVehicleInformation.bind(this,'categoryId')}>
          <FlatList>
            data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
              <Picker.Item label={item.name} value={item.id}/>
            )}        
          </FlatList>
        </Picker>
        <Button title='Araç Ekle' onPress={handleAddVehicle}/>
       {handleAddVehicle()}
      </View>
    )
  }

  function RemoveVehicle(){
    const {data,isLoading} = useGetAllVehicleQuery();
    const handleRemove=(vehicleId)=>{
      useRemoveVehicleMutation(vehicleId)
    }
    if (isLoading) {
      return <Title>İsLoading...</Title>;
    }
    return(
      <View>
        <FlatList
        data={data.vehicles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          <TouchableOpacity
            style={styles.container}
          >
            <Image source={{ uri: item.pictureUrl }} style={styles.img} />
            <View style={styles.textContainer}>
            <Text style={styles.textBrand}>{item.brand}</Text>
            <Text style={styles.textModel}>{item.model}</Text>
            <Text style={styles.textPlate}>{item.numberPlate}</Text>
            <Button style={styles.button} onPress={handleRemove(item.id)}>Sil</Button>
            </View>
          </TouchableOpacity>
      }}/>
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
        data={data.vehicles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          <TouchableOpacity
            style={styles.container}
          >
            <Image source={{ uri: item.pictureUrl }} style={styles.img} />
            <View style={styles.textContainer}>
            <Text style={styles.textBrand}>{item.brand}</Text>
            <Text style={styles.textModel}>{item.model}</Text>
            <Text style={styles.textPlate}>{item.numberPlate}</Text>
            <Button style={styles.button} onPress={handleUpdate(item.id)}>Güncelle</Button>
            </View>
          </TouchableOpacity>
      }}/>
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
    backgroundColor:'red',
    width: 30,
    height: 30,
  }
})