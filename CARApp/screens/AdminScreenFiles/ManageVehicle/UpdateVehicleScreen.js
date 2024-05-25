import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';
import { useGetVehiclesByVehicleIdQuery, useUpdateVehicleMutation } from '../../../Apis/vehicleApi';

export default function UpdateVehicleScreen({ route }) {
    const { vehicleId } = route.params;
    const { data, isLoading } = useGetVehiclesByVehicleIdQuery(vehicleId);
    const [updateVehicle] = useUpdateVehicleMutation();
    const [price, setPrice] = useState('');

    const handleUpdate = async () => {
        try {
            await updateVehicle({ ...data, price });
            Alert.alert('Başarılı', 'Araç başarıyla güncellendi.');
        } catch (error) {
            console.error(error);
            Alert.alert('Hata', 'Araç güncellenirken bir hata oluştu.');
        }
    };

    if (isLoading) {
        return <Text style={styles.loading}>Yükleniyor...</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: data.pictureUrl }} style={styles.image} />
            <Text style={styles.text}>{data.brand}</Text>
            <Text style={styles.text}>{data.model}</Text>
            <Text style={styles.text}>{data.modelYear}</Text>
            <Text style={styles.text}>{data.transmissionType}</Text>
            <Text style={styles.text}>{data.fuelType}</Text>
            <Text style={styles.text}>{data.numberPlate}</Text>
            <Text style={styles.text}>{data.isActive}</Text>
            <TextInput
                placeholder={data.price.toString()}
                value={price}
                onChangeText={setPrice}
                keyboardType='numeric'
                style={styles.input}
            />
            <Button title='Güncelle' onPress={handleUpdate} color='#007BFF' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
        padding: 10,
    },
    loading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
