import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ProductDetail from '../screens/products/ProductDetail';
import FilterScreen from '../screens/home/FilterScreen';
import ResultScreen from '../screens/home/ResultScreen';
import ProductScreen from '../screens/products/ProductScreen';
import BSCTDetail from '../screens/bsct/BSCTDetail';
import { BSCTScreen, ProfilesScreen } from '../screens';
import ProductsNewScreen from '../screens/products/ProductsNewScreen';
import DrawerNavigator from './DrawerNavigator';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        {/* <Stack.Screen name='RatingScreen' component={RatingScreen}/>
        <Stack.Screen name='CartScreen' component={CartScreen}/> */}
        <Stack.Screen name='FilterScreen' component={FilterScreen}/>
        <Stack.Screen name='ResultScreen' component={ResultScreen}/>
        <Stack.Screen name='ProductsScreen' component={ProductScreen}/>
        <Stack.Screen name='ProductsNew' component={ProductsNewScreen} />
        <Stack.Screen name='BSCTDetail' component={BSCTDetail} />
        <Stack.Screen name='BSCTScreen' component={BSCTScreen} />
        <Stack.Screen name='ProfilesScreen' component={ProfilesScreen}/>
    </Stack.Navigator>
  )
}

export default MainNavigator