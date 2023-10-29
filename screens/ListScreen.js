import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListScreen = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');

  const screenWidth = Dimensions.get('window').width;

  // Define a function to handle search input changes
  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        {/* Left icon and search bar */}
        <View style={styles.searchContainer}>
          <Image
            source={require('../logos/iconSearch.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
            value={searchText}
            onChangeText={handleSearchChange}
          />
        </View>

        {/* Filter button */}
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('../logos/icon_Filter.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Next to you section */}
      <View style={styles.nextToYouContainer}>
        <Text style={styles.nextToYouTitle}>Next to you</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Text style={styles.onTheMapText}>On the map {'>'}</Text>
        </TouchableOpacity>
        
      </View>

      {/* Card */}
      <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Image
          source={require('../logos/imgDogCard.png')}
          style={{...styles.cardImage, width: screenWidth / 2, height: screenWidth / 2}}
        />
      </TouchableOpacity>
        <Text style={styles.cardText}>Go for a walk and feed the dog</Text>
      </View>

      {/* Categories section */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.category}>
          <Image source={require('../logos/Icon_House.png')} style={styles.icon} />
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>     Help around the house                                                   {'>'}</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../logos/Icon_Moving.png')} style={styles.icon} />
          <Text style={{ fontSize: 16,fontWeight: 'bold'}}>     Moving and things                                                          {'>'}</Text>
        </View>
      </View>

    </View>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2.1, // 2/3 of the row
    marginRight: 18,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
    color: 'black',
  },
  filterButton: {
    //backgroundColor: '#fff',
    borderRadius: 8,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
  },
  filterIcon: {
    marginTop: 10,
    width: 60,
    height: 60,
  },
  nextToYouContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  nextToYouTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  onTheMapText: {
    fontSize: 16,
    color: 'gray',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },

  card:{
    backgroundColor:'#fff',
    borderRadius :10,
    padding :16,
    marginTop :10
  },
  cardImage:{
    width :'50%',
    borderRadius :10
  },
  cardText:{
    marginTop :10,
    fontSize :16
  }
};

export default ListScreen;
