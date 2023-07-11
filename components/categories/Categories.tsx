import { View } from 'react-native'
import React from 'react'
import CategorieItem from './CategorieItem'
import { useAppSelector } from '../../store/hooks'



export default function Categories({ navigation }: any) {

    const { categories } = useAppSelector(state => state.categories)



    return (
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                maxWidth: 260,
                marginTop: 20,
            }}
        >
            {
                categories.map(el =>
                    <CategorieItem key={el.id} id={el.id} img={el.img} name={el.name} price={el.price} navigation={navigation} />
                )
            }
        </View>
    )
}