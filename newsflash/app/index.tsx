import { View, Text, StyleSheet, SafeAreaView, ScrollView, VirtualizedList } from 'react-native'
import React from 'react'
import CategorySlider from '@/components/CategorySlider'
import TopHeadlineSlider from '@/components/TopHeadlineSlider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import HeadlineList from '@/components/HeadlineList'

export default function Home() {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>

                <View>
                    <Text style={styles.title}>NewsFlash</Text>
                </View>
                <CategorySlider />
                <TopHeadlineSlider />
                <HeadlineList />

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 30,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3480ab',
    }
})