import React from 'react';
import { Alert, FlatList, TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRemoveVehicleMutation, useGetAllVehicleQuery } from '../../Apis/vehicleApi';

export default function RemoveVehicleScreen() {
    const [removeVehicle] = useRemoveVehicleMutation();
    const { data, isLoading } = useGetAllVehicleQuery();
    const navigation = useNavigation();
    const handleUpdate =(id) => navigation.navigate('UpdateVehicle', {vehicleId: id})
    const handleRemove = async (id) => {
        Alert.alert(
            "Araç Silme",
            "Bu aracı silmek istediğinizden emin misiniz?",
            [
                {
                    text: "İptal",
                    onPress: () => console.log("Silme işlemi iptal edildi."),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: async () => {
                        try {
                            await removeVehicle(id);
                        } catch (error) {
                            console.error(error);
                        }
                    }
                }
            ]
        );
    }

    if (isLoading) {
        return <Text>Yükleniyor...</Text>;
    }

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.pictureUrl }} style={styles.img} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textBrand}>{item.brand}</Text>
                            <Text style={styles.textModel}>{item.model}</Text>
                            <Text style={styles.textPlate}>{item.numberPlate}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => handleRemove(item.id)}>
                                <Text>Sil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={()=>handleUpdate(item.id)}>
                                <Text>Güncelle</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    img: {
        width: 50,
        height: 50,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    textBrand: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textModel: {
        fontSize: 14,
    },
    textPlate: {
        fontSize: 12,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
    },
});
