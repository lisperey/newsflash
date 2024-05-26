import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function CategorySlider() {
    const [active, setActive] = useState(1);
    const categorias = [
        {
            id: 1,
            name: "recentes"
        },
        {
            id: 2,
            name: "esportes"
        },
        {
            id: 3,
            name: "famosos"
        },
        {
            id: 4,
            name: "tech"
        },
        {
            id: 5,
            name: "tech"
        },
        {
            id: 6,
            name: "tech"
        },
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={categorias}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>setActive(item.id)}>
                        <Text style={ item.id === active? styles.categoriasTextSelect:styles.categoriasText}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>)}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10
    },
    categoriasText: {
        marginRight: 15,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#424242'
    },
    categoriasTextSelect: {
        marginRight: 15,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#3480eb'
    },
})