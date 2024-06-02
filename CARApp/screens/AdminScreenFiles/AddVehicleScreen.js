import { StyleSheet, TextInput, View,Text,Button,Alert} from 'react-native'
import React, { useState ,useEffect} from 'react'
import {useGetAllCategoryQuery} from '../../Apis/categoryApi';
import {useCreateVehicleMutation} from '../../Apis/vehicleApi';
import {Picker} from '@react-native-picker/picker'
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function AddVehicleScreen() {
    const navigation = useNavigation();
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
    const {data,isLoading} = useGetAllCategoryQuery();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    }, [isLoading]);
    
    if (isLoading || loading) {
        return <Text>Loading...</Text>;
    }

    const handleSelectedCategory = (category) => {setCategoryId(category)}
    const handleAddVehicle = () => {
        createVehicle({ brand: brand,model:model,modelYear: modelYear,
            price: price,transmissionType: transmissionType,
            fuelType:fuelType,numberPlate: numberPlate,isActive:true,
            pictureUrl:pictureUrl,categoryId: categoryId,
        }).then((value) => {
            setVehicle(value);
            if (vehicle !== false)
            {
                Alert.alert("Araç başarıyla eklendi");
            }
            else
            {       
                Alert.alert('Kayıt Başarısız', 'Bir hata oluştu. Lütfen bilgi giriş türlerini kontrol ederek tekrar deneyiniz');
            }
        });
    }
    const handleManage=()=>{navigation.navigate('ManageVehicles');};
    const handleRemove=()=>{navigation.navigate('RemoveVehicle');};
    const handleListed=()=>{navigation.navigate('ListedVehicle');};

    return (
        <View>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Content title="Araç Listeleme" />
                <Appbar.Action icon="cog" onPress={()=>handleManage(navigation)} />    
                <Appbar.Action icon="archive" onPress={()=>handleListed(navigation)} />    
                <Appbar.Action icon="minus" onPress={()=>handleRemove(navigation)} />   
            </Appbar.Header>
            <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Araç Markasını giriniz' value={brand} onChangeText={(text)=>setBrand(text)}></TextInput>
            <TextInput style={styles.input} placeholder='Araç Modelini giriniz' value={model} onChangeText={(text)=>setModel(text)}></TextInput>
            <TextInput style={styles.input} placeholder='Aracın model yılını giriniz' value={modelYear} onChangeText={(text)=>setModelYear(text)}></TextInput>
            <TextInput style={styles.input} placeholder='Aracın günlük kiralama ücretini giriniz' value={price} onChangeText={(text)=>setPrice(text)}></TextInput>
            <TextInput style={styles.input} placeholder='Aracın şanzıman türünü giriniz' value={transmissionType} onChangeText={(text)=>setTransmissionType(text)}></TextInput>
            <TextInput style={styles.input} placeholder='Aracın Yakıt türünü giriniz' value={fuelType} onChangeText={(text)=>setFuelType(text)}></TextInput>
            <TextInput style={styles.input} placeholder='Araç Plakasını giriniz' value={numberPlate} onChangeText={(text)=>setNumberPlate(text)}></TextInput>
            <Text style={styles.text}>Aracın kategorisini seçiniz</Text>
            <Picker style={styles.picker} selectedValue={categoryId} onValueChange={handleSelectedCategory}>
                {data.map((item) => (
                    <Picker.Item key={item.id} label={item.categoryName} value={item.id}/>
                ))}
            </Picker>
            <TextInput style={styles.input} placeholder='Araç resminin Url Adresini giriniz' value={pictureUrl} onChangeText={(text)=>setPictureUrl(text)}></TextInput>
            <Button style={styles.button} title='Araç Ekle' onPress={handleAddVehicle}></Button>
            </View>
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
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        padding:5,
    },
    input: {
        height: 40,
        borderColor: '#007BFF',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
        padding: 10,
    },
    button: {
        width: '100%',
        color: '#007BFF',
    },
    picker: {
        height: 50,
        width: '100%',
        borderColor: '#007BFF',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    loading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007BFF',
    },
});

