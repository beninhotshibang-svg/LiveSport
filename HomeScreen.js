import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const sportsData = [
  {
    id: '1',
    name: 'Football',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg',
  },
  {
    id: '2',
    name: 'Basketball',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png',
  },
  {
    id: '3',
    name: 'Tennis',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Tennis_ball_4.png',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Sport</Text>
      <FlatList
        data={sportsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('SportDetails', { name: item.name })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.sportName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { marginBottom: 20, padding: 15, backgroundColor: '#eee', borderRadius: 10, alignItems: 'center' },
  sportName: { fontSize: 18, fontWeight: 'bold' },
  image: { width: 80, height: 80, marginBottom: 10 },
});