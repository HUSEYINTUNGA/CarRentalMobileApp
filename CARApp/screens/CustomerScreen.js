
import { StyleSheet, View,Text } from 'react-native';
import React, { useState } from 'react';
import { useGetAllCategoryQuery } from '../Apis/categoryApi';
import { Card, Title,Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function CustomerScreen() {
  // const {email}=route.params;
  const navigation = useNavigation();
  const { data, isLoading } = useGetAllCategoryQuery();
  
  if (isLoading) {
    return <Title>İsLoading...</Title>;
  }
  const _goBack = () => navigation.navigate('Login')
  const _handleFeedBack = () => {navigation.navigate('FeedBack')};




  return (
    
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Kullanıcı Sayfası" />
      <Appbar.Action icon="email" onPress={()=>_handleFeedBack(navigation)} />      
      </Appbar.Header>
      {data && data.map((item, index) => (
        <Card style={styles.card} key={index} onPress={() => navigation.navigate('ListedVehicles', { id: item.id , name:item.categoryName})}>
          <Card.Content>
            <Title>{item.categoryName}</Title>
            <Text>{item.categoryName} Kategorisindeki araçları görüntülemek için tıkla.</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    margin: 10,
    top: 20,
    padding: 10,
    borderRadius: 20,
    borderWidth:1,
    borderColor:'black',
    backgroundColor: '#20dbd5',
  },
  container: {
    flex: 1,
    backgroundColor:'#cecece',
  },
  appbar: {
    backgroundColor:'#9b9b9b',
    height:90,
  },
});
