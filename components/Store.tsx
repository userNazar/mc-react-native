import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import StoreItem from './StoreItem'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { restart } from '../store/slicers/storeSlicer'

export default function Store() {

  const { list, total } = useAppSelector(state => state.storeOwn);
  const dispatch = useAppDispatch();

  const buyHandler = () => {
    Alert.alert(`Your order price: ${total.toFixed(2)}$ was successfully accepted.`)
    dispatch(restart());
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={{ ...styles.text, fontWeight: '900', fontSize: SIZES.h2, maxWidth: 60 }}>My Order</Text>
          <Text style={{ ...styles.text, fontSize: SIZES.h3, color: 'gray' }}>Take out</Text>
          <View style={styles.line} />
        </View>

        <ScrollView>
          {
            list.length
              ?
              list.map(el =>
                <StoreItem
                  key={el.item.id}
                  id={el.id}
                  img={el.item.img}
                  price={el.item.price}
                  name={el.item.name}
                  count={el.count}
                />
              )
              :
              <Text style={styles.emptyText}>The store is empty</Text>
          }

        </ScrollView>

        <View style={styles.containerBtn}>
          <Text style={{ ...styles.containerBtnText, color: 'gray' }}>Total</Text>
          <Text style={{ fontSize: SIZES.h2, width: 100, marginTop: 5, fontWeight: "500", textAlign: 'center' }}>$ {total.toFixed(2)}</Text>
          <TouchableOpacity style={styles.btnAdd} onPress={buyHandler}>
            <Text style={{ fontWeight: '700' }}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',

  },
  body: {
    borderRadius: 20,
    backgroundColor: COLORS.ligthGray,
    height: '90%',
    width: '100%',
    marginTop: 15,
    paddingTop: 54
  },
  text: {
    marginLeft: 15,
  },
  line: {
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginLeft: 15,
    width: '23%'
  },
  containerBtn: {
    marginTop: 'auto',
    marginLeft: 15,
  },
  containerBtnText: {
    marginLeft: '8%',
    marginTop: 2,
  },
  btnAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%',
    height: 85,
    width: 85,
    borderRadius: 26,
    backgroundColor: COLORS.primary,
    marginBottom: 20,
    marginTop: 10,
  },
  emptyText: {
    color: 'gray',
    fontSize: 12,
    marginLeft: '4%'
  },
})