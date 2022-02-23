import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {DrawerActions, NavigationConatiner} from '@react-navigation/native'
import Options from './componenets/option';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App () {

  return(
    <NavigationConatiner>
      
      <Drawer.NavigationConatiner drawerContent={(props)=><Options {...props}/>}>
        <Drawer.Screen name="Home" Component={HomeScreen}/>
        <Drawer.Screen name="Details" Component={DetailsScreen}/>
      </Drawer.NavigationConatiner>

    </NavigationConatiner>
  )
 
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  
});
