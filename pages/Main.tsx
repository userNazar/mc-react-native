import { View, Text, StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../types/navigation';
import { SIZES } from '../constants/theme';
import Categories from '../components/categories/Categories';
import Store from '../components/Store';


type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

type MainProps = {
    navigation: MainScreenNavigationProp;
};

export default function Main({ navigation }: MainProps) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>

                <View style={styles.textContainer}>
                    <Text style={{ ...styles.text, fontWeight: 'bold' }}>Hey,</Text>
                    <Text style={styles.text}>what's up?</Text>
                </View>

                <Categories navigation={navigation} />

            </View>
            <Store />
        </View>

    )
}


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flex: 1
    },
    container: {
        paddingLeft: 20,
        backgroundColor: 'white',
    },
    textContainer: {
        marginTop: 70
    },
    text: {
        fontSize: SIZES.h1,
        paddingLeft: 14,
    },

})