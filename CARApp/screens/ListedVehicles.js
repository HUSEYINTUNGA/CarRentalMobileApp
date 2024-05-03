import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Card, Title,Appbar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useGetVehiclesByCategoryIdQuery } from '../Apis/categoryApi';
export default function ListedVehicles({ route }) {
  const { id, name } = route.params;
  const navigation = useNavigation();
  const {data,isLoading} = useGetVehiclesByCategoryIdQuery({ categoryId: id });
  console.log(data);
    if (isLoading) {
      return <Title>İsLoading...</Title>;
    }
    
    const _goBack = () => navigation.navigate('Customer')
    const _handleFeedBack = () => {navigation.navigate('FeedBack')};
    const _handleLogin = () => {navigation.navigate('Login')};
  return (
    <View >
      <Appbar.Header style={styles.appbar}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={name}/>
      <Appbar.Action icon="email" onPress={() => _handleFeedBack(navigation)} />
      <Appbar.Action icon="login" onPress={() => _handleLogin(navigation)} />
      </Appbar.Header>
      {data && data.map((item, index) => (
        <Card style={styles.card} key={index} onPress={(null)}>
          <Card.Content>
            <Title>{item.vehicles.NumberPlate}</Title>
            <Text>{item.NumberPlate}</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  )
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

})
