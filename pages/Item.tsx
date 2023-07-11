import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { COLORS, SIZES } from '../constants/theme';
import { addToStore } from '../store/slicers/storeSlicer';



type ItemScreenProps = NativeStackScreenProps<RootStackParamList, 'Item'>;



export default function Item({ route, navigation }: ItemScreenProps) {

  const [countOfItems, setCountOfItems] = useState<number>(1);

  const { id } = route.params;

  const { categories } = useAppSelector(state => state.categories)

  const [currentItem] = categories.filter(ct => ct.id === id);
  
  const dispatch = useAppDispatch();

  function addHandler() {
    if (countOfItems) {

      const obj = {
        id: currentItem.id,
        item: currentItem,
        count: countOfItems,
      }

      dispatch(addToStore(obj))
    }
  }

  const minusHandler = () => {
    if (countOfItems) {
      setCountOfItems(prev => prev - 1);
    }
  }
  const plusHandler = () => {
    setCountOfItems(prev => prev + 1);
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={{ width: 30, height: 30, alignSelf: 'flex-start' }}
        onPress={() => navigation.goBack()}
      >
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/109/109618.png' }} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>




      <View style={styles.content}>

        <Image style={styles.img} source={{ uri: currentItem.img }} />

        <Text style={styles.text}>{currentItem.name}</Text>
        <Text style={{ ...styles.text, color: COLORS.primary }}>{currentItem.price}</Text>


        <View style={styles.countBlock}>
          <TouchableOpacity
            style={styles.minus}
            onPress={minusHandler}
          >
            <Text>-</Text>
          </TouchableOpacity>

          <Text style={{ ...styles.count }}>{countOfItems}</Text>

          <TouchableOpacity
            style={styles.plus}
            onPress={plusHandler}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={addHandler}
      >
        <Text style={{ color: 'white', fontSize: SIZES.h3, fontWeight: '500' }}>Add</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 20,
    alignItems: 'center'
  },
  content: {
    margin: 40,
    alignItems: 'center'
  },
  img: {
    width: 200,
    height: 200,
    borderWidth: 2,
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.radius,
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 'auto',
    marginBottom: 40,
  },
  text: {
    fontSize: SIZES.h2,
    marginTop: 30,
  },
  countBlock: {
    flexDirection: 'row',
    marginTop: '50%',
    justifyContent: 'space-between',
  },
  minus: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderColor: COLORS.gray,
    borderRadius: 10,
  },
  plus: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary
  },
  count: {
    marginVertical: 5,
    marginHorizontal: 13,
    width: 20,
    textAlign: 'center',
  }
})