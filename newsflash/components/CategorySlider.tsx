import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useCategory } from '@/providers/CategoryContext';

export default function CategorySlider() {
    const [active, setActive] = useState(1);
    const { setCategory, category } = useCategory()
    const categorias = [
        {
            id: 1,
            name: "Recentes",
            categoria: ''
        },
        {
            id: 2,
            name: "Esporte",
            categoria: 'sports'
        },
        {
            id: 3,
            name: "Tecnologia",
            categoria: 'technology'
        },
        {
            id: 4,
            name: "Ciência",
            categoria: 'science'
        },
        {
            id: 5,
            name: "Famosos",
            categoria: 'celebrity'
        },
        {
            id: 6,
            name: "Economia",
            categoria: 'economy'
        },
    ]

    const handleChange = (idItem:number, categoria:string) =>{
        setActive(idItem);
        setCategory(categoria);

    }
    return (
        <View style={styles.container}>
            <FlatList
                data={categorias}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>handleChange(item.id, item.categoria)}>
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