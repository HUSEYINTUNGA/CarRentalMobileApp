import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ManageCategoriesScreen() {
  const [category, setCategory] = useState();
  const [createCategory]=useCreateCategoryMutation();
  const[data,setData]=useState();

  const handleAddCategory=()=>{
    createCategory({ categoryName:category}).then((value)=>{setData(value)});
    if (category !== false)
      {
        Alert.alert("Kategori başarıyla eklendi");
      }
    else
      {       
        Alert.alert('Kayıt Başarısız', 'Bir hata oluştu. Daha sonra tekrar deneyiniz');
      }
  }
  return (
    <View>
      <TextInput placeholder='Kategori ismini giriniz ' onChangeText={(text)=>setCategory(text)}></TextInput>
      <Button onClick={handleAddCategory}>Ekle</Button>
    </View>
  )
}

const styles = StyleSheet.create({})