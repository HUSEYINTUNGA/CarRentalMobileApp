import { StyleSheet, Text, View ,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryTypeScreen from './screens/EntryScreenFiles/EntryTypeScreen';
import AdminLoginScreen from './screens/EntryScreenFiles/AdminLoginScreen';
import CustomerScreen from './screens/CustomerScreenFiles/CustomerScreen';
import FeedBackScreen from './screens/CustomerScreenFiles/FeedBackScreen';
import LoginScreen from './screens/EntryScreenFiles/LoginScreen';
import ManageScreen from './screens/AdminScreenFiles/ManageScreen';
import SingUpScreen from './screens/EntryScreenFiles/SingUpScreen';
import ListedVehiclesScreen from './screens/CustomerScreenFiles/ListedVehiclesScreen';
import VehicleDetailsScreen from './screens/CustomerScreenFiles/VehicleDetailsScreen';
import RentalInformationScreen from './screens/CustomerScreenFiles/RentalInformationScreen';
import AboutMeScreen from './screens/CustomerScreenFiles/AboutMeScreen';
import { Provider } from 'react-redux';
import { store } from './Storage/store';



const Stack = createNativeStackNavigator();

export default function App() {

  return (   
    <Provider store={store}>
    <NavigationContainer style={styles.container}>
      {/* <Stack.Navigator initialRouteName='AboutMe'> */}
    {/* <Stack.Navigator initialRouteName="Customer"> */}
      <Stack.Navigator initialRouteName="EntryType">
        <Stack.Screen name="EntryType" component={EntryTypeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Customer" component={CustomerScreen} options={{headerShown:false}}/>
        <Stack.Screen name="FeedBack" component={FeedBackScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Manage" component={ManageScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SingUp" component={SingUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ListedVehicles" component={ListedVehiclesScreen} options={{headerShown:false}} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RentalInformation" component={RentalInformationScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AboutMe" component={AboutMeScreen} options={{headerShown:false}}/>
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
