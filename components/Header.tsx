import { StyleSheet, SafeAreaView, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HeaderScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export default function Header() {

    const navigation = useNavigation<HeaderScreenNavigationProp>();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Main')}
            >
                <Image style={styles.img} source={{ uri: 'https://img.freepik.com/free-icon/mcdonalds_318-566082.jpg?q=10&h=200' }} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Main')}
            >
                <Image style={styles.img} source={{ uri: 'https://img.freepik.com/free-icon/shopping-cart_318-871857.jpg' }} />
            </TouchableOpacity>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    img: {
        height: 50,
        width: 50,
    }
})