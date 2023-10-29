import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

function DetailScreen() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Image 
        source={require('../logos/imgFlowers1.png')} 
        style={{...styles.image, width: screenWidth, aspectRatio: 1}}
      />
      <Text style={styles.title}>Go for a walk and feed the dog</Text>
      <Text style={styles.description}>Leaving for a week, French Bulldog Wilfred needs help feeding twice a day 
      and walk from 26 to 30 September. I bought food, it'll be easy.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Respond</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#8b74bd', // Change to the color of your button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff', // Change to the color of your button text
    fontSize: 16,
  },
});

export default DetailScreen;
