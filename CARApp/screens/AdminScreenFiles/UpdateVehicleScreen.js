import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetVehiclesByVehicleIdQuery,useUpdateVehicleMutation } from '../../Apis/vehicleApi';
export default function UpdateVehicleScreen({route}) {
  const {vehicleId}=route.params;
  return (
    <View>
      
    </View>
  )
}

const styles = StyleSheet.create({})