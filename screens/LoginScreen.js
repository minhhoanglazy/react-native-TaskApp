import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    // Clear the initial values of username and password when the component mounts
    setUsername('');
    setPassword('');
    setErrorMessage('');
    setLoginSuccess(false);
  }, []);

  const handleLogin = () => {
    if (username === '' || password === '') {
      setErrorMessage('Please enter both username and password.');
      setLoginSuccess(false);
    } else {
      // Check if credentials match the ones stored in AsyncStorage
      AsyncStorage.getItem('username')
        .then((storedUsername) => {
          if (username === storedUsername) {
            AsyncStorage.getItem('password')
              .then((storedPassword) => {
                if (password === storedPassword) {
                  setLoginSuccess(true);
                  // Delay navigation to the success screen by .5 seconds
                  setTimeout(() => {
                    navigation.navigate('SuccessScreen');
                  }, 500);
                } else {
                  setErrorMessage('Invalid password. Please try again.');
                  setLoginSuccess(false);
                }
              })
              .catch((error) => {
                console.error('Error getting password:', error);
                setErrorMessage('An error occurred. Please try again.');
                setLoginSuccess(false);
              });
          } else {
            setErrorMessage('Invalid username. Please try again.');
            setLoginSuccess(false);
          }
        })
        .catch((error) => {
          console.error('Error getting username:', error);
          setErrorMessage('An error occurred. Please try again.');
          setLoginSuccess(false);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} />
        </View>
        {loginSuccess ? (
          <Text style={[styles.successMessage, styles.overlayMessage]}>
            Login Successful!
          </Text>
        ) : null}
        {errorMessage && !loginSuccess ? (
          <Text style={[styles.errorMessage, styles.overlayMessage]}>
            {errorMessage}
          </Text>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '70%',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    backgroundColor: '#0099cc',
    width: '70%',
    marginBottom: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
  },
  overlayMessage: {
    zIndex: 1,
  },
});

export default LoginScreen;
