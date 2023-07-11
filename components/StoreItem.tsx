import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants/theme';
import { useAppDispatch } from '../store/hooks';
import { deleteFromStore, minusTotal, plusTotal } from '../store/slicers/storeSlicer';


interface StoreItemProps {
    id: string;
    img: string;
    name: string;
    price: string;
    count: number;
}

export default function StoreItem({ img, name, price, count, id }: StoreItemProps) {

   
    const [countOfItems, setCountOfItems] = useState<number>(count);
    useEffect(() => {
        setCountOfItems(count)
    }, [count])
    const dispatch = useAppDispatch();

    const minusHandler = () => {
        if (countOfItems !== 1) {
            setCountOfItems(prev => prev - 1);
        } else {
            dispatch(deleteFromStore(id))
        }
        dispatch(minusTotal(+price.slice(2)))
    }
    const plusHandler = () => {
        setCountOfItems(prev => prev + 1);
        dispatch(plusTotal(+price.slice(2)))
    }

   

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: img }} />
                <Text style={{ marginTop: 10 }}>{name}</Text>
                <Text style={{ marginTop: 5, color: 'gray' }}>{price}</Text>

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
            </View >
            <View style={styles.line} />
        </>

    )
}


const styles = StyleSheet.create({
    container: {
        height: 130,
        marginLeft: 15,
        width: '22%',
        alignItems: 'center',
    },
    line: {
        borderBottomColor: '#D0D0D0',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginLeft: 15,
        width: '23%'
    },
    img: {
        width: 40,
        height: 40,

    },
    countBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2
    },
    minus: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 7,
        paddingHorizontal: 10,
    },
    plus: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 10,
    },
    count: {
        width: 20,
        paddingHorizontal: 2,
        textAlign: 'center',
    }
})