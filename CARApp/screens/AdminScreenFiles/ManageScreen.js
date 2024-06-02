import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

export default function ManageScreen() {
  const navigation = useNavigation();

  const handleAccounting=()=>{navigation.navigate('Accounting');}
  const handleManageVehicles=()=>{navigation.navigate('ManageVehicles');}
  const handleManageCategories=()=>{navigation.navigate('ManageCategories');}
  const handleRentalRequests=()=>{navigation.navigate('RentalRequests');}
  const handleMessageCustomers=()=>{navigation.navigate('MessagesCustomers');}
  const handleManageRolesOfCustomer=()=>{navigation.navigate('ManageRoles');}
  const handleListedVehicle=()=>{navigation.navigate('ListedVehicle');}

  return (
    <View style={styles.container}>
        <Appbar.Header style={styles.appbar}>
          <Appbar.Content title="Yönetim Ekranı" /> 
        </Appbar.Header>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonVehicle} onPress={handleManageVehicles}><Text style={styles.buttonText}>Araçları Yönet</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonCategory} onPress={handleManageCategories}><Text style={styles.buttonText}>Kategorileri Yönet</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonAccount} onPress={handleAccounting}><Text style={styles.buttonText}>Muhasebe</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonRental} onPress={handleRentalRequests}><Text style={styles.buttonText}>Kiralama İstekleri</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonCustomer} onPress={handleMessageCustomers}><Text style={styles.buttonText}>Müşteri Mesajları</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonRoles} onPress={handleManageRolesOfCustomer}><Text style={styles.buttonText}>Kullanıcı Rollerini Yönet</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonListed} onPress={handleListedVehicle}><Text style={styles.buttonText}>Araçları Listele</Text></TouchableOpacity>
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
    
  },
  buttonContainer: {
    padding:10,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonVehicle: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonCategory: {
    backgroundColor: '#28a745',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonAccount: {
    backgroundColor: '#ffc107',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonRental: {
    backgroundColor: '#dc3545',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonCustomer: {
    backgroundColor: '#17a2b8',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonRoles: {
    backgroundColor: '#6610f2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonListed: {
    backgroundColor: '#6f42c1',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
