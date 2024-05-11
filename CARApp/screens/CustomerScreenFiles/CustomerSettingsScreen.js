import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomerSettingsScreen({route}) {
  const {userId}=route.params;
  return (
    <View>
      <Text>Bu sayfa fonksiyonları henüz oluşturulmadı! 
        En kısa zamanda bu hizmeti sizlere sunacağız.
        Sabrınız için teşekkürler.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({})