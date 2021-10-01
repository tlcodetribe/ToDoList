import React, {useState} from 'react'
import {StyleSheet, View, 
        Text, TouchableOpacity, FlatList} from 'react-native'

import ToDoItem from '../components/ToDoItem'
import Colors from '../Constants/colors'  
import { AntDesign } from '@expo/vector-icons'; 
import note from '../img/note.jpg'
import work from '../img/work.jpg'
import meditation from '../img/meditation.jpg'
import housekeep from '../img/housekeep.jpg' 




const renderAddListIcon = (addItem, text) => {

        return (
          <TouchableOpacity style={{marginLeft: 300, marginBottom: 100}} onPress= {() => 
            addItem({txt: text, isChecked: false, isNewItem: true})} >

            <AntDesign name="pluscircle" size={24} color={'blue'} />

          </TouchableOpacity>
        )
      }

 

export default function ToDoList({navigation}) {

  

  const [toDoItems, setToDoItems] = useState([{txt: 'Pray', isChecked: false}, 
  {txt: 'Eat', isChecked: false }])

  const addItemToList = (item) => {
        toDoItems.push(item)
        setToDoItems([...toDoItems])    
      }

      const removeItem = (index) => {
        toDoItems.splice(index, 1)
        setToDoItems([...toDoItems])
      }

  const updateItem = (index, item) => {
    toDoItems[index] = item
    setToDoItems([...toDoItems])
  }



  return (
    <View style= {styles.container}>

    

       <FlatList 
         data={toDoItems}
         renderItem= {({item: { txt, isChecked, isNewItem}, index}) => {
           
           return <ToDoItem 
             text={txt} 
             isChecked={isChecked}
             isNewItem= {isNewItem}
             

             onChecked={() => { 
               const toDoItem = toDoItems[index]
               toDoItem.isChecked = !isChecked
               updateItem(index, toDoItem)
             }}


             onChangeText= {(newText) => {

               const toDoItem = toDoItems[index]
               toDoItem.txt = newText
               updateItem(index, toDoItem)
             }}
             

             onDelete= {() => {
               removeItem(index)
             }}

             />

            }}
        />

      <View>
        {
          renderAddListIcon(addItemToList)
        }
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },


})