import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ManageVehiclesScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Araç İşlemleri</Text>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => navigation.navigate('AddVehicle')}>
                <Text style={styles.buttonText}>Araç Ekle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRemove} onPress={() => navigation.navigate('RemoveVehicle')}>
                <Text style={styles.buttonText}>Araç Sil/Güncelle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonListed} onPress={() => navigation.navigate('ListedVehicle')}>
                <Text style={styles.buttonText}>Araç Listele</Text>
            </TouchableOpacity>
        </View>
    )
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonAdd: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        marginBottom: 10,
    },
    buttonRemove: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        marginBottom: 10,
    },
    buttonListed: {
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});