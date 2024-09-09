import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../contants/colors';
import HomeNavigator from './HomeNavigator';
import { Bag2, Global, Home2, Profile } from 'iconsax-react-native';
import ProductNavigator from './ProductNavigator';
import NotificationNavigator from './NotificationNavigator';
import ProfileNavigator from './ProfileNavigator';
import DrawerNavigator from './DrawerNavigator';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      safeAreaInsets={{
        bottom: 0,
      }}
      screenOptions={({route}) => ({
        headerShown : false,
        tabBarShowLabel:false,
        tabBarStyle: [
          styles.tabContainer,
          Platform.OS === 'ios' && {
            shadowOffset: { height: -2, width: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 20,
          },
        ],
        tabBarItemStyle: {
          marginBottom: 7,
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#0071ff',
    })}
    >
      <Tab.Screen name="HomeTab" component={HomeNavigator}
          options={{
          tabBarIcon: ({ focused }) => (
            <Home2
              variant= {focused ? 'Bold' : 'Outline'}
              size={35}
              color={focused ? 'white' : colors.gray200}
            />
          ),
        }}
      >
      </Tab.Screen>
      <Tab.Screen name="ProductTab" component={ProductNavigator} 
          options={{
          tabBarIcon: ({ focused }) => (
            <Bag2
              variant= {focused ? 'Bold' : 'Outline'}
              size={35}
              color={focused ? 'white' : colors.gray200}
            />
          ),
        }}/>
      <Tab.Screen name="NotificationTab" component={NotificationNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <Global
              variant= {focused ? 'Bold' : 'Outline'}
              size={35}
              color={focused ? 'white' : colors.gray200}
            />
          ),
        }}/>
      <Tab.Screen name="ProfileTab" component={ProfileNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <Profile
              variant= {focused ? 'Bold' : 'Outline'}
              size={35}
              color={focused ? 'white' : colors.gray200}
            />
          ),
        }}/>

    </Tab.Navigator>
  )
}

export default TabNavigator

function getWidth() {
    let width = Dimensions.get("window").width
  
    // Horizontal Padding = 20...
    width = width - 80
  
    // Total five Tabs...
    return width / 5
  }
const styles = StyleSheet.create({
    iconContainer : {
        width : 30,
        height : 30,
        backgroundColor : colors.blue600,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 100
    },
    tabContainer: {
      position: 'absolute',
      width: '90%',
      borderRadius: 12,
      left: '5%',
      bottom: 20,
      backgroundColor: colors.blue600,
      height: 70,
    },
    label: {
      textTransform: 'capitalize',
      fontSize: 12,
    },
})