import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

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
    <View>
      <Button onPress={handleManageVehicles}>Araçları Yönet</Button>
      <Button onPress={handleManageCategories}>Categorileri Yönet</Button>
      <Button onPress={handleAccounting}>Muhasebe</Button>
      <Button onPress={handleRentalRequests}>Kiralama İstekleri</Button>
      <Button onPress={handleMessageCustomers}>Müşteri Mesajları</Button>
      <Button onPress={handleManageRolesOfCustomer}>Kullanıcı Rollerini Yönet</Button>
      <Button onPress={handleListedVehicle}>Araçları Listele</Button>
    </View>
  )
}



const styles = StyleSheet.create({})