import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { activeCategorie } from '../../store/slicers/categorieSlicer';


interface CategorieItemProps extends CategorieItem {
    navigation: any
}

export default function CategorieItem({ id, img, name, price, navigation }: CategorieItemProps) {



    const dispatch = useAppDispatch();
    const { active } = useAppSelector(state => state.categories);

    const elementHandler = () => {
        dispatch(activeCategorie(id))
        navigation.navigate('Item', {
            id,
        })
    }

    return (
        <TouchableOpacity onPress={elementHandler}>
            <View style={{ ...styles.container, backgroundColor: active === id ? COLORS.secondary : COLORS.gray }} >
                <Image style={styles.image} source={{ uri: img }} />
                <Text style={{ ...styles.text, color: active === id ? COLORS.white : COLORS.black }}>{name}</Text>
                <Text style={{ ...styles.text, marginTop: 'auto', color: COLORS.primary }}>{price}</Text>
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container: {
        height: 125,
        width: 100,
        margin: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },

    text: {
        textAlign: 'center',
        maxWidth: 80,
        fontWeight: '600'
    },

    image: {
        height: 50,
        width: 50,
    }
})
