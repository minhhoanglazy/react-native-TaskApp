import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

const ListScreen = () => {
  const [searchText, setSearchText] = useState('');

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
        <Text style={styles.onTheMapText}>On the map {'>'}</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Image
          source={require('../logos/imgDogCard.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>Go for a walk and feed the dog</Text>
      </View>

      {/* Rest of your list content */}
      {/* ... */}
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
  },
};

export default ListScreen;
