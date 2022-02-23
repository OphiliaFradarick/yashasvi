import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { DrawerItem } from '@react-navigation/drawer';
import reactDom from 'react-dom';
import *as ImagePicker from 'expo-image-picker'

export default class Options extends Component{

    constructor(){
        super();
        this.state={
            uriImage:""
        }
    }
    render(){
        return(
            <View>
                <Avatar
                containerStyle={{alignSelf:'center',}}
                size={100}
                source={{uri:this.state.uriImage}}
                onPress={()=>{
                    this.uploadImage()
                }}
                />

                <DrawerItem label="Home" inactiveBackgroundColor='gray' onPress={()=>{this.props.navigation.navigate('Home')}}/>
                <DrawerItem label="Details" inactiveBackgroundColor='gray' onPress={()=>{this.props.navigation.navigate('Details')}}/>

            </View>
        )
    }

    uploadImage = async()=>{
        const pickup = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        this.setState({uriImage:pickup.uri})
    }
}