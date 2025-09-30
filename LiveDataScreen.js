import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, Linking } from 'react-native';
import axios from 'axios';

const NEWS_API_KEY = 'YOUR_NEWSAPI_KEY'; // replace with your NewsAPI key

export default function LiveDataScreen() {
  const [scores, setScores] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch live scores (football example)
    axios.get('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328') // English Premier League
      .then(res => setScores(res.data.events || []))
      .catch(err => console.error(err));

    // Fetch sports news
    axios.get(`https://newsapi.org/v2/top-headlines?category=sports&apiKey=${NEWS_API_KEY}`)
      .then(res => setNews(res.data.articles || []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={{ marginTop: 50 }} size="large" />;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Live Scores (Football)</Text>
      <FlatList
        data={scores}
        keyExtractor={item => item.idEvent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.event}>{item.strEvent}</Text>
            <Text>{item.dateEvent} {item.strTime}</Text>
            <Text>Venue: {item.strVenue}</Text>
          </View>
        )}
      />
      <Text style={styles.heading}>Latest Sports News</Text>
      <FlatList
        data={news}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.event}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(item.url)}>Read more</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginVertical: 12 },
  card: { backgroundColor: '#eee', padding: 10, marginVertical: 5, borderRadius: 8 },
  event: { fontWeight: 'bold', fontSize: 16 },
  link: { color: 'blue', marginTop: 5 },
});
var fbURLv2="https://www.thesportsdb.com/api/v2/json/all/leagues";
var commentdata = "";
$.ajax({
    url: fbURLv2,
    data: "message="+commentdata,
    dataType: "json",
    type: 'POST',
    beforeSend: function(xhr) {
        xhr.setRequestHeader('X-API-KEY', 'xxxxxx');
        xhr.setRequestHeader('Content-Type', 'application/json');
    },
    // If success         
    success: function (resp) {
        console.log(resp);
    },
    // If error
    error: function(e) {
        console.log(e);
    }
});