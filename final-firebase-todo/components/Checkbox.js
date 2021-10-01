import React, {useState} from 'react'
import {StyleSheet, View, 
        Text, TouchableOpacity} from 'react-native'


import Colors from '../Constants/colors'

export default ({isChecked, onChecked, ...props}) => {
  return (
    <TouchableOpacity style= {styles.checkbox} onPress= {onChecked}>
      <Text style= {{color: Colors.red, fontSize: 22, paddingBottom: 8}}>{isChecked ? 'x' : '' }</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    height: 15,
    marginTop: 8,
    marginRight: 5,
    backgroundColor: '#ffff0',
    color: Colors.lightGray,  
    borderColor: Colors.lightGray,
    borderWidth:1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
