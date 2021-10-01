import React, {useState} from 'react'
import {StyleSheet, View, 
        Text, TouchableOpacity, TextInput} from 'react-native'

import Checkbox from './Checkbox'
import Colors from '../Constants/colors'
import { FontAwesome } from '@expo/vector-icons'; 

export default ({text, isChecked, onChecked, onChangeText, onDelete, isNewItem}) => {
  const [isEditMode, setEditMode] = useState(isNewItem)
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Checkbox isChecked={isChecked} onChecked= {onChecked}/>   
        
        <TouchableOpacity style= {{flex: 1}}
          onPress= {() => !isChecked && setEditMode(true) }>
          {
            isEditMode ? 
            <TextInput
               selectionColor= {'transparent'}        
               autoFocus={true}
               value={text}
               onChangeText={onChangeText}
               placeholder= {'Add Text'}
               onSubmitEditing= {() => {}}
               maxLength= {30}
               style= {(styles.input, {outLine:'none', borderRadius: 30, marginTop: 5})} 
               onBlur= {() => setEditMode(false)}              
            /> 
             
            :  
            <View style= 
              {styles.text,
              {color: isChecked ?     
              Colors.lightGray
                
              
            : 
            
              Colors.black,
              textDecoration: isChecked ? 'line-through' 
            : 
            
              'none'}}>
              
                <Text style={{ fontSize: 20 }}>
                  {text}
                </Text>  

            </View>
          }
          
        </TouchableOpacity>




        <TouchableOpacity onPress= {onDelete}>  

                    <FontAwesome name="trash" 
                      size={20} color="red" 
                      style={{marginRight: 15}}
                    />

        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },

  input: {
    height: 25,
    fontSize: 15,
    opacity: 0.5
  },
  
  text: {
    paddingTop: 10,  
    fontSize: 28,
    color: Colors.black  
  }
})