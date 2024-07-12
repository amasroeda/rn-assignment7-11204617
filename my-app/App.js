import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/homescreen';
import CartScreen from './components/checkout';
import CustomHeader from './components/header';
import CustomDrawerContent from './components/drawernavigator';
import ProductDetailScreen from './components/productdetail'; 

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Store" component={HomeScreen} />
      <Drawer.Screen name="Locations" component={CartScreen} />
      <Drawer.Screen name="Blog" component={CartScreen} />
      <Drawer.Screen name="Jewelery" component={CartScreen} />
      <Drawer.Screen name="Electronic" component={CartScreen} />
      <Drawer.Screen name="Clothing" component={CartScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
