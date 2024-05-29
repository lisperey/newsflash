import { View, Text, FlatList, TouchableOpacity, StyleSheet, SectionList, VirtualizedList } from 'react-native'
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
            name: "Tecnologia",
            categoria: 'technology'
        },
        {
            id: 3,
            name: "Esporte",
            categoria: 'sports'
        },
        {
            id: 4,
            name: "Ciência",
            categoria: 'science'
        },
        {
            id: 5,
            name: "Economia",
            categoria: 'economy'
        },
    ]

    const getItem = (categorias: any, index: number) => categorias[index];
    const getItemCount = (categorias: any) => categorias.length;

    const handleChange = (idItem: number, categoria: string) => {
        setActive(idItem);
        setCategory(categoria);

    }
    return (
        <View style={styles.container}>
            <VirtualizedList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categorias}
                initialNumToRender={10}
                renderItem={({ item }:any) => (
                    <TouchableOpacity onPress={() => handleChange(item.id, item.categoria)}>
                        <Text style={item.id === active ? styles.categoriasTextSelect : styles.categoriasText}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>)}
                keyExtractor={item => item.id}
            getItem={getItem}
            getItemCount={getItemCount}
    />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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