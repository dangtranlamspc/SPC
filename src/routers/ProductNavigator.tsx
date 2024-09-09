import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductScreen } from '../screens';
import TabNavigator from './TabNavigator';

const ProductNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='ProductsScreen' component={ProductScreen} />
    </Stack.Navigator>
  )
}

export default ProductNavigator