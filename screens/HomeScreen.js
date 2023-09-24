import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';

const foodCategories = [
    {
      name: 'Category 1',
      image: require('../assets/ramen.jpg'), // Add your image source here
    },
    {
      name: 'Category 2',
      image: require('../assets/sandwich.jpg'), // Add your image source here
    },
    {
      name: 'Category 3',
      image: require('../assets/salad.jpg'), // Add your image source here
    },
    {
      name: 'Category 4',
      image: require('../assets/burrito.jpg'), // Add your image source here
    },
];

const bestDealsSlides = [
    {
      key: 'slide1',
      image: require('../assets/ramen.jpg'),
      foodName: 'Ramen',
    },
    {
      key: 'slide2',
      image: require('../assets/sandwich.jpg'),
      foodName: 'Sandwich',
    },
    {
      key: 'slide3',
      image: require('../assets/salad.jpg'),
      foodName: 'Salad',
    },
    {
      key: 'slide4',
      image: require('../assets/burrito.jpg'),
      foodName: 'Burrito',
    },
  ];

const popularFoods = [
    {
        name: 'Ramen',
        image: require('../assets/ramen.jpg'), // Add your image source here
        price: '1.00$',
    },
    {
        name: 'Sandwich',
        image: require('../assets/sandwich.jpg'), // Add your image source here
        price: '1.00$',
    },
    {
        name: 'Salad',
        price: '1.00$',
        image: require('../assets/salad.jpg'), // Add your image source here
    },
    {
        name: 'Burrito',
        price: '1.00$',
        image: require('../assets/burrito.jpg'), // Add your image source here
    },
  ];

const HomeScreen = ({navigation}) => {
  const handleMenuPress = () => {
    navigation.navigate('MenuScreen'); // Navigate to the "Menu" screen
  };

  const renderCategories = () => {
      return foodCategories.map((category, index) => (
        <View style={styles.category} key={`category_${index}`}>
          <Image source={category.image} style={styles.categoryImage} />
          <Text style={styles.categoryText}>{category.name}</Text>
        </View>
      ));
  };

  const renderBestDealsSlides = ({ item }) => {
      return (
        <View style={styles.slide}>
          <Image source={item.image} style={styles.sliderImage} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>{item.foodName}</Text>
          </View>
        </View>
      );
  };

  const renderPopular = () => {
      return popularFoods.map((popular, index) => (
      <View style={styles.popularContainer}>
          <View style={styles.popularItem} key={`popular_${index}`}>
          <Image source={popular.image} style={styles.popularItemImage} />
          </View>
          <View style={styles.popularItemTextContainer}>
              <Text style={styles.popularItemText}>{popular.name}</Text>
              <Text style={styles.popularItemPrice}>{popular.price}</Text>
          </View>
      </View>
      ));
  };
  
  return (
      <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress}>
          <FontAwesome name="bars" size={30} style={{ marginLeft: 20 }} />
        </TouchableOpacity>
          <FontAwesome name="shopping-cart" size={30} style={{ marginRight: 20 }} />
      </View>

      <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Popular Categories</Text>
          <View style={styles.categoryImages}>{renderCategories()}</View>
      </View>

      <Text style={styles.Title}>Best Deals</Text>
      <AppIntroSlider
          data={bestDealsSlides}
          renderItem={renderBestDealsSlides}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          showNextButton={false}
          showDoneButton={false}
          showSkipButton={false}
      />

      <Text style={styles.Title}>Most Popular</Text>
      <View style={styles.popularContainer}>{renderPopular()}</View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  categoriesContainer: {
    margin: 16,
  },
  categoriesTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  categoryText: {
    marginTop: 8,
  },
  Title: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 16,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    width: '100%',
    height: 600,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dotStyle: {
    backgroundColor: '#ccc',
  },
  activeDotStyle: {
    backgroundColor: '#0099cc',
  },
  popularContainer: {
    maxWidth: 1600,
    width: '84%',
    alignSelf: 'center',
  },
  popularItem: {
    alignItems: 'center',
    margin: 4,
    position: 'relative',
  },
  popularItemImage: {
    width: '100%',
    height: 400,
  },
  popularItemTextContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 36,
    paddingHorizontal: 4,
  },
  popularItemText: {
    fontSize: 22,
  },
  popularItemPrice: {
    fontSize: 22,
  },  
});

export default HomeScreen;
