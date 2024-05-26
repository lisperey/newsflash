import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import CategorySlider from '@/components/CategorySlider'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>NewsFlash</Text>
                <CategorySlider />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 30,
    },

    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3480ab',
    }
})