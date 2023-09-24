import React, { useState } from 'react';
import image1 from './assets/menu.png';
import image2 from './assets/truck.png';
import image3 from './assets/calendar.png';
import image4 from './assets/binocular.png';
import image5 from './assets/apple_logo.png';


// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    title: 'Browse Food',
    text: 'Welcome to our restaurant app! Log in and check  out our delicious food.',
    image: image1,
    backgroundColor: 'green',
  },
  {
    key: 's2',
    title: 'Order Food',
    text: 'Hungry? Order food in just a few clicks and we’ll take care of you..',
    image: image2,
    backgroundColor: 'green',
  },
  {
    key: 's3',
    title: 'Make Reservations',
    text: 'Book a table in advance to avoid waiting in line',
    image: image3,
    backgroundColor: 'green',
  },
  {
    key: 's4',
    title: 'Quick Search',
    text: 'Quickly find food items you like the most',
    image: image4,
    backgroundColor: 'green',
  },
  {
    key: 's5',
    title: 'Apple Pay',
    text: 'We know you’re busy, so you can pay with your phone in just one click',
    image: image5,
    backgroundColor: 'green',
  },
];
