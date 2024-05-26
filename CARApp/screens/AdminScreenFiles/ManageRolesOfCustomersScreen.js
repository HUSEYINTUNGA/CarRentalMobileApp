import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSetRolesOfCustomerMutation,useGetAllCustomerQuery} from'../../Apis/CustomerApi';
export default function ManageRolesOfCustomersScreen() {
  const{data,isLoading} =useGetAllCustomerQuery();
  if(isLoading) {
    return(
      <Text>Loading...</Text>
  )}
  const handleChange=(customer)=>{
    const [Customer]=useSetRolesOfCustomerMutation(customer.id)
    Customer({role:"Admin"})
  }
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (item.role==="Customer") {
            return (
              <View>
                <Text>{item.id}</Text>
                <Text>{item.customerName}</Text>
                <Text>{item.customerPhone}</Text>
                <Text>{item.role}</Text>                
                <TouchableOpacity onPress={() => handleChange(item)}>
                  <Text>Onayla</Text>
                </TouchableOpacity>
              </View>
            );
          }
          else{
            return(
              <View>
                <Text>Kullanıcı Yok</Text>
              </View>
            )
          }
        }}
      />
    </View>

  
  )
}

const styles = StyleSheet.create({})