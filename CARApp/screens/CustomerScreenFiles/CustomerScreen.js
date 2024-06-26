
import { StyleSheet, View,Text, FlatList } from 'react-native';
import React from 'react';
import { useGetAllCategoryQuery } from '../../Apis/categoryApi';
import { Card, Title,Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function CustomerScreen({route}) {
  const {userId}=route.params;
  const navigation = useNavigation();
  const { data, isLoading } = useGetAllCategoryQuery();
  
  if (isLoading) {
    return <Title>İsLoading...</Title>;
  }

  const handleFeedBack = () => {navigation.navigate('FeedBack',{userId: userId});};
  const handleLogin = () => {navigation.navigate('Login')};
  const handleAbout = () => {navigation.navigate('AboutMe',{userId: userId})};
  const handleSettings = () => {navigation.navigate('CustomerSettings',{userId: userId});};


  return (
    
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
      <Appbar.Content title="Kullanıcı Sayfası" />
      <Appbar.Action icon="email" onPress={()=>handleFeedBack(navigation)} />    
      <Appbar.Action icon="login" onPress={handleLogin} />  
      <Appbar.Action icon="cog" onPress={() => handleSettings(navigation)} />
      <Appbar.Action icon="information" onPress={() => handleAbout(navigation)} /> 
      </Appbar.Header>
      <Text>{userId}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => navigation.navigate('ListedVehicles',
            { categoryId: item.id , category:item.categoryName,userId:userId})}>
            <Card.Content>
              <Title style={styles.appbarTitle}>{item.categoryName}</Title>
              <Text style={styles.appbarText}>{item.categoryName} Kategorisindeki araçları görüntülemek için tıkla.</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    top: 20,
    padding: 10,
    borderRadius: 20,
    borderWidth:1,
    borderColor:'black',
    backgroundColor: '#cecece',
  },
  container: {
    flex: 1,
    backgroundColor:'#aaffff', 
  },
  appbar: {
    backgroundColor:'#9b9b9b',
    height:90,
  },
  appbarTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle:'italic',
    color: 'black',
  },
  appbarText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle:'italic',
    color: 'black',
  },
});
