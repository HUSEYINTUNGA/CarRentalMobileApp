import { StyleSheet, Text, View ,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryTypeScreen from './screens/EntryTypeScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import CustomerScreen from './screens/CustomerScreen';
import FeedBackScreen from './screens/FeedBackScreen';
import LoginScreen from './screens/LoginScreen';
import ManageScreen from './screens/ManageScreen';
import SingUpScreen from './screens/SingUpScreen';
import ListedVehicles from './screens/ListedVehicles';
import { Provider } from 'react-redux';
import { store } from './Storage/store';



const Stack = createNativeStackNavigator();

export default function App() {

  return (   
    <Provider store={store}>
    <NavigationContainer style={styles.container}>
    {/* <Stack.Navigator initialRouteName="Customer"> */}
      <Stack.Navigator initialRouteName="EntryType">
        <Stack.Screen name="EntryType" component={EntryTypeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Customer" component={CustomerScreen} options={{headerShown:false}}/>
        <Stack.Screen name="FeedBack" component={FeedBackScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Manage" component={ManageScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SingUp" component={SingUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ListedVehicles" component={ListedVehicles} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
