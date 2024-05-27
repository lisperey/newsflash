import { View, Text, FlatList, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TopHeadlineSlider() {
  const dataTime = new Date();
  const dia = dataTime.getDay();
  const mes = dataTime.getMonth();
  const ano = dataTime.getFullYear();

  const { data, isLoading, error } = useQuery("topHeadline", () => {
    return axios
      .get(`https://api.currentsapi.services/v1/latest-news?apiKey=qOTBTI_K42vvW6fez7s2f5rvgkopTeC3Hv-5FXtWVZcYM-AV&country=br&language=pt&limit:10&category=regional`)
      .then(response => response.data)

  });

  if(isLoading){
    return (
      <ActivityIndicator animating={isLoading} size="large" />
    );
  }

  return (
    <View>
      <FlatList
        data={data?.news}
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.author}</Text>
          </TouchableOpacity>)}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    width: Dimensions.get('screen').width * 0.80,
    marginRight: 15
  },
  image: {
    height: Dimensions.get('screen').width * 0.77,
    borderRadius: 10
  },
  newsTitle: {
    marginTop: 10,
    fontSize: 23,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 5,
    color: '#3480eb'
  }
})