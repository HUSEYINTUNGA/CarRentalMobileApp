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
import CustomerSettingsScreen from './screens/CustomerScreenFiles/CustomerSettingsScreen';
import AccountingScreen from './screens/AdminScreenFiles/AccountingScreen';
import ManageCategoriesScreen from './screens/AdminScreenFiles/ManageCategoriesScreen';
import ManageVehiclesScreen from './screens/AdminScreenFiles/ManageVehiclesScreen';
import MessagesCustomersScreen from './screens/AdminScreenFiles/MessagesCustomersScreen';
import RentalRequestsScreen from './screens/AdminScreenFiles/RentalRequestsScreen';
import ManageRolesOfCustomersScreen from './screens/AdminScreenFiles/ManageRolesOfCustomersScreen';
import ListedVehicleScreen from './screens/AdminScreenFiles/ListedVehicleScreen';
import UpdateVehicleScreen from './screens/AdminScreenFiles/UpdateVehicleScreen';
import { Provider } from 'react-redux';
import { store } from './Storage/store';



const Stack = createNativeStackNavigator();

export default function App() {

  return (   
    <Provider store={store}>
    <NavigationContainer style={styles.container}>
      {/* <Stack.Navigator initialRouteName='AboutMe'> */}
    <Stack.Navigator initialRouteName="ManageVehicles">
      {/* <Stack.Navigator initialRouteName="EntryType"> */}
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
        <Stack.Screen name="CustomerSettings" component={CustomerSettingsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ManageVehicles" component={ManageVehiclesScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Accounting" component={AccountingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MessagesCustomers" component={MessagesCustomersScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RentalRequests" component={RentalRequestsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ManageRoles" component={ManageRolesOfCustomersScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ManageCategories" component={ManageCategoriesScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ListedVehicle" component={ListedVehicleScreen} options={{headerShown:false}}/>
        <Stack.Screen name="UpdateVehicle" component={UpdateVehicleScreen} options={{headerShown:false}}/>     
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
