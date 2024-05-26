import { StyleSheet, TextInput, View,Text,Button } from 'react-native'
import React, { useState } from 'react'
import {useGetAllCategoryQuery} from '../../Apis/categoryApi';
import {useCreateVehicleMutation} from '../../Apis/vehicleApi';
import {Picker} from '@react-native-picker/picker'
export default function AddVehicleScreen() {
    const {data,isLoading} = useGetAllCategoryQuery();
    const [createVehicle] = useCreateVehicleMutation();
    const [brand,setBrand] = useState('');
    const [model,setModel] = useState('');
    const [modelYear,setModelYear] = useState('');
    const [price,setPrice] = useState('');
    const [transmissionType,setTransmissionType] = useState('');
    const [fuelType,setFuelType] = useState('');
    const [numberPlate,setNumberPlate] = useState('');
    const [categoryId,setCategoryId] = useState('');
    const [pictureUrl,setPictureUrl] = useState('');
    const [vehicle,setVehicle] = useState('');
    if (isLoading) {
        return <Title>İsLoading...</Title>;
    }

    const handleAddVehicle = () => {
        createVehicle({ brand: brand,model:model,modelYear: modelYear,
            price: price,transmissionType: transmissionType,
            fuelType:fuelType,numberPlate: numberPlate,isActive:true,
            pictureUrl:pictureUrl,categoryId: categoryId,
        }).then((value) => {setVehicle(value)});
        if (vehicle !== false)
            {
                Alert.alert("Araç başarıyla eklendi");
            }
        else
            {       
                Alert.alert('Kayıt Başarısız', 'Bir hata oluştu. Lütfen bilgi giriş türlerini kontrol ederek tekrar deneyiniz');
            }
    }

    return (
        <View>
            <TextInput placeholder='Araç Markasını giriniz' value={brand} onChangeText={(text)=>setBrand(text)}></TextInput>
            <TextInput placeholder='Araç Modelini giriniz' value={model} onChangeText={(text)=>setModel(text)}></TextInput>
            <TextInput placeholder='Aracın model yılını giriniz' value={modelYear} onChangeText={(text)=>setModelYear(text)}></TextInput>
            <TextInput placeholder='Aracın günlük kiralama ücretini giriniz' value={price} onChangeText={(text)=>setPrice(text)}></TextInput>
            <Text>Aracın şanzıman türünü seçiniz</Text>
            <Picker selectedValue={transmissionType}
                onSelectedValue={(value)=>setTransmissionType(value)}
            >
                <Picker.Item label='Lütfen seçiniz'></Picker.Item>
                <Picker.Item label='Manuel'></Picker.Item>
                <Picker.Item label='Otomatik'></Picker.Item>
                <Picker.Item label='Yarı Otomatik'></Picker.Item>
            </Picker>
            <Text>Aracın Yakıt türünü seçiniz</Text>
            <Picker selectedValue={fuelType}
                onSelectedValue={(value)=>setFuelType(value)}
            >
                <Picker.Item label='Lütfen seçiniz'></Picker.Item>
                <Picker.Item label='Dizel'></Picker.Item>
                <Picker.Item label='Benzinli'></Picker.Item>
                <Picker.Item label='LPG'></Picker.Item>
                <Picker.Item label='Elektrikli'></Picker.Item>
                <Picker.Item label='Hibrit'></Picker.Item>
            </Picker>
            <TextInput placeholder='Araç Plakasını giriniz' value={numberPlate} onChangeText={(text)=>setNumberPlate(text)}></TextInput>
            <Text>Aracın kategorisini seçiniz</Text>
            <Picker selectedValue={categoryId}
                onSelectedValue={(value)=>setCategoryId(value)}
            >
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Picker.Item label={item.categoryName} value={item.categoryId}/>
                    )}>
                </FlatList>
            </Picker>
            <TextInput placeholder='Araç resminin Url Adresini giriniz' value={pictureUrl} onChangeText={(text)=>setPictureUrl(text)}></TextInput>
            <Button title='Araç Ekle' onPress={handleAddVehicle}></Button>
        </View>
    )
}

const styles = StyleSheet.create({})