import { View, Text, FlatList, Image, StyleSheet, Dimensions, ActivityIndicator, Linking, Alert } from 'react-native'
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
      .get(`https://api.currentsapi.services/v1/latest-news?apiKey=qOTBTI_K42vvW6fez7s2f5rvgkopTeC3Hv-5FXtWVZcYM-AV&country=br&language=pt&limit:5&category=regional`)
      .then(response => response.data)

  });

  if(isLoading){
    return (
      <ActivityIndicator animating={isLoading} size="large" />
    );
  }

  const handlePress = async (url:string) => {
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
        horizontal
        nestedScrollEnabled
        contentContainerStyle={{ gap: 15 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={()=>handlePress(item.url)}>
            {item.image!=='None'?<Image source={{ uri: item.image }} style={styles.image}/>: <View style={{ marginTop: 10}}></View>}
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
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    marginTop: 10,
    width: Dimensions.get('screen').width * 0.71,
    height: Dimensions.get('screen').width * 0.79,
    borderRadius: 10
  },
  newsTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '800',
    width: Dimensions.get('screen').width * 0.63,
  },
  subtitle: {
    marginTop: 5,
    color: '#3480eb'
  }
})