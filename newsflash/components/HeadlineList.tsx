import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, Linking, Alert } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useCategory } from '@/providers/CategoryContext';


export default function HeadlineList() {
  const { setCategory, category } = useCategory();

  const { data, isLoading, error } = useQuery(["headline", category], () => {
    return axios
      .get(`https://api.currentsapi.services/v1/latest-news?apiKey=qOTBTI_K42vvW6fez7s2f5rvgkopTeC3Hv-5FXtWVZcYM-AV&country=br&language=pt&limit=10${category === '' ? '' : `&category=${category}`}`)
      .then(response => response.data)

  },
  );

  if (isLoading) {
    return (
      <ActivityIndicator animating={isLoading} size="large" />
    );
  }

  const handlePress = async ( url:string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
      return;
    }
    Alert.alert(`Não foi possível abrir o URL: ${url}`);
    return;

  };

  return (
    <View>
      <FlatList
        data={data?.news}
        keyExtractor={(item, index) => item.id + index}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
        renderItem={({ item }) => (
          <View>
            <View style={{ height: 1, backgroundColor: '#cccccf', marginLeft: -200 }}></View>
            <TouchableOpacity style={{ marginTop: 50 }} onPress={()=>handlePress(item.url)}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                <View style={{ marginRight: 135, marginLeft: 10 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ color: '#3480eb', marginTop: 6 }}>{item.author}</Text>
                </View>
              </View>
              <Text style={{ padding:10}}>{item.description}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}