import React, { useState } from 'react';
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

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(null);

  const handleSignUp = async () => {
    try {
      // Check if the username already exists in AsyncStorage
      const existingUsername = await AsyncStorage.getItem('username');
      if (existingUsername === username) {
        setSignUpSuccess(false); // Username already exists
      } else {
        // Store the username and password in AsyncStorage
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);

        setSignUpSuccess(true); // Sign-up successful
      }
    } catch (error) {
      console.error('Error storing credentials:', error);
      setSignUpSuccess(false); // Sign-up failed
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
          <Button title="Sign Up" onPress={handleSignUp} />
        </View>
        {signUpSuccess === true && (
          <Text style={styles.successMessage}>
            Sign up successful! You can now{' '}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate('LoginScreen')}
            >
              Login now.
            </Text>
          </Text>
        )}
        {signUpSuccess === false && (
          <Text style={styles.errorMessage}>
            Sign up failed. The account already exists or there was an error.
          </Text>
        )}
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
  successMessage: {
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
