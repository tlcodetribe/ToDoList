import React, { useState, useLayoutEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView, ImageBackground
} from 'react-native';

import { IonIcons } from '@expo/vector-icons';
import Colors from '../Constants/colors';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';



const ListButton = ({ title, color, onPress, onDelete, navigation, onOptions }) => { 

  let img

  if (title === 'School') {

    img = require('../img/note.jpg')

  } else if (title === 'MLab') {

    img = require('../img/work.jpg')

  } else if (title === 'Meditation') {

    img = require('../img/meditation.jpg')

  } else {

    img = require('../img/housekeep.jpg')

  }
     

  return (   

    

    //ToDo btn
      
     
      <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={[styles.itemContainer, { backgroundColor: color, width: 320 }]}
          onPress={onPress}>

          <ImageBackground style={{width: 120, height: 100}} source= {img} />

          <View style={{paddingRight: 200}}>

            <Text style={styles.itemTitle}>{title}</Text>

          </View>


        </TouchableOpacity>

      </SafeAreaView>
      


  );
};



export default function Home({ navigation }) {
  const [listData, setList] = useState([
    { title: 'Meditation', color: Colors.blue },
    { title: 'MLab', color: Colors.green },
    { title: 'Housekeeping', color: Colors.teal },
  ]);




  const addItemToList = (item) => {
    listData.push(item);
    setList([...listData]);
  };




  const removeItem = (index) => {
    listData.splice(index, 1);
    setList([...listData]);
  };




  const updateItem = (index, item) => {
    listData[index] = item
    setList([...listData])
  }

    



  return (

    <View style={styles.container}>
      
      

      <View style={{ backgroundColor: 'grey', width: 400, alignItems: 'center',  }}>

        

        <View style={{ flexDirection: 'row' }} >

          <Text style={styles.paragraph}>

            <SafeAreaView style={{ fontSize: 28 }}>

              <u>{"Thabiso's "}</u> 

            </SafeAreaView>

              ToDo List
          </Text>

        </View>

      </View>






      <FlatList
        data={listData}
        renderItem={({ item: { title, color }, index }) => {
          
          return (
            <ListButton
              title={title}
              color={color}
              navigation={navigation}
              onPress={() => navigation.navigate('ToDoList', { title, color })}
              onOptions= {() => navigation.navigate('Edit', 
                {title, color, 
                  saveChanges: (item) => updateItem(index, item) })}
              onDelete={() => removeItem(index)}
            />

          );

        }}
      />


    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    color: '#fff', 
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 100,
  },

  itemTitle: {
    fontSize: 24,
    paddingLeft: 20,
    color: '#fff',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },

});
