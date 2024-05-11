import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ManageScreen() {
  const handleAccounting=()=>{navigation.navigate('Accounting');}
  const handleManageVehicles=()=>{navigation.navigate('ManageVehicles');}
  const handleManageCategories=()=>{navigation.navigate('ManageCategories');}
  const handleRentalRequests=()=>{navigation.navigate('RentalRequests');}
  const handleMessageCustomers=()=>{navigation.navigate('MessagesCustomers');}
  const handleManageRolesOfCustomer=()=>{navigation.navigate('ManageRoles');}
  return (
    <View>
      <Button onPress={handleManageVehicles}>Araçları Yönet</Button>
      <Button onPress={handleManageCategories}>Categorileri Yönet</Button>
      <Button onPress={handleAccounting}>Muhasebe</Button>
      <Button onPress={handleRentalRequests}>Kiralama İstekleri</Button>
      <Button onPress={handleMessageCustomers}>Müşteri Mesajları</Button>
      <Button onPress={handleManageRolesOfCustomer}>Kullanıcı Rollerini Yönet</Button>
    </View>
  )
}



const styles = StyleSheet.create({})