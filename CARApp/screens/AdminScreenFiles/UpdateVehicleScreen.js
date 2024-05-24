import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { useGetVehiclesByVehicleIdQuery,useUpdateVehicleMutation } from '../../Apis/vehicleApi';
export default function UpdateVehicleScreen({route}) {
  const {vehicleId}=route.params;
  const { data, isLoading } = useGetVehiclesByVehicleIdQuery(vehicleId);
  if (isLoading) {
    return <Title>Loading...</Title>;
  }
  return (
    <View>
      <TextInput placeholder={data.brand}></TextInput>
      <TextInput placeholder={data.brand}></TextInput>
      <TextInput placeholder={data.brand}></TextInput>
      <TextInput placeholder={data.brand}></TextInput>
      <TextInput placeholder={data.brand}></TextInput>
      <TextInput placeholder={data.brand}></TextInput>
      <TextInput placeholder={data.brand}></TextInput>
      <TextInput placeholder={data.brand}></TextInput>
      <TextInput placeholder={data.brand}></TextInput>
      <TextInput placeholder={data.brand}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({})