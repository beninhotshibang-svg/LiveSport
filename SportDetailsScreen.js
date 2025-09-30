import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const sportDetails = {
  Football: {
    history: 'Football (soccer) is played worldwide and originated in England in the 19th century. It is played by two teams of 11 players on a rectangular field.',
    rules: 'The objective is to score by getting the ball into the opposing goal. Only goalkeepers can use their hands. Matches last 90 minutes.',
  },
  Basketball: {
    history: 'Basketball was invented in 1891 by Dr. James Naismith in the USA. It is played by two teams of five players on a court.',
    rules: 'Teams score by shooting the ball through the opponent’s hoop. The game is played in four quarters of 12 minutes each (NBA rules).',
  },
  Tennis: {
    history: 'Tennis originated in England in the late 19th century. It can be played singles or doubles.',
    rules: 'Players use rackets to hit a ball over a net. Points are scored when the opponent fails to return the ball within the boundaries.',
  },
};

export default function SportDetailsScreen({ route }) {
  const { name } = route.params;
  const details = sportDetails[name];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <Text style={styles.subheading}>History</Text>
      <Text style={styles.text}>{details.history}</Text>
      <Text style={styles.subheading}>Basic Rules</Text>
      <Text style={styles.text}>{details.rules}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  subheading: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  text: { fontSize: 16, marginBottom: 10 },
});