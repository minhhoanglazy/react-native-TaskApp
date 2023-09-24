import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="bars" size={30} style={{ marginLeft: 20 }} />
        <Text style={styles.headerText}>Menu</Text>
        <FontAwesome name="shopping-cart" size={30} style={{ marginRight: 20 }} />
      </View>
      <View style={styles.content}>
        <View style={styles.column}>
          <View style={styles.menuItem}>
            <Image source={require('../assets/ramen.jpg')} style={styles.menuItemImage} />
            <View style={styles.overlay}>
              <Text style={styles.menuItemText}>Food Item 1</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('../assets/sandwich.jpg')} style={styles.menuItemImage} />
            <View style={styles.overlay}>
              <Text style={styles.menuItemText}>Food Item 2</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('../assets/burrito.jpg')} style={styles.menuItemImage} />
            <View style={styles.overlay}>
              <Text style={styles.menuItemText}>Food Item 3</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('../assets/salad.jpg')} style={styles.menuItemImage} />
            <View style={styles.overlay}>
              <Text style={styles.menuItemText}>Food Item 4</Text>
            </View>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.menuItem}>
            <Image source={require('../assets/ramen.jpg')} style={styles.menuItemImage} />
            <View style={styles.overlay}>
              <Text style={styles.menuItemText}>Food Item 5</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('../assets/sandwich.jpg')} style={styles.menuItemImage} />
            <View style={styles.overlay}>
              <Text style={styles.menuItemText}>Food Item 6</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('../assets/burrito.jpg')} style={styles.menuItemImage} />
            <View style={styles.overlay}>
              <Text style={styles.menuItemText}>Food Item 7</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('../assets/salad.jpg')} style={styles.menuItemImage} />
            <View style={styles.overlay}>
              <Text style={styles.menuItemText}>Food Item 8</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  column: {
    flex: 1,
  },
  menuItem: {
    margin: 16,
    alignItems: 'center',
  },
  menuItemImage: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenuScreen;
