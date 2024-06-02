import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import {useGetAllHistoryQuery} from '../../Apis/rentalHistoryApi'
export default function RentalRequestsScreen() {
  const {data,isLoading} =useGetAllHistoryQuery();
  
  if(isLoading) {
    return(
      <Text>İsLoading...</Text>
    )}
    const handleConfirm=(item) => {
      const [history]=useConfirmingHistoryRecordMutation(item.id);
      history({isActive:true})
    }
  return (
    <View>
      <Text>RentalRequestsScreen</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (!item.isActive) {
            return (
              <View>
                <Text>{item.customerId}</Text>
                <Text>{item.vehicleId}</Text>
                <Text>{item.rentalDate}</Text>
                <Text>{item.rentalDuration}</Text>                
                <TouchableOpacity onPress={() => handleConfirm(item)}>
                  <Text>Onayla</Text>
                </TouchableOpacity>
              </View>
            );
          }
          else{
            return(
              <View>
                <Text>İstek yok</Text>
              </View>
            )
          }
        }}
      />
    </View>
    

  )
}

const styles = StyleSheet.create({})