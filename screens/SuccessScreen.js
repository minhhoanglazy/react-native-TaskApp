import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  const handleGoHome = () => {
    // Navigate back to the LandingScreen and reset the navigation stack
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text>Success</Text>
      <Button title="Go to HomeScreen" onPress={handleGoHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SuccessScreen;
