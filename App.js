// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [coffeeHistory, setCoffeeHistory] = useState([]);

  useEffect(() => {
    // Load coffee history from storage (not implemented in this example)
    // You would typically use AsyncStorage here
  }, []);

  const addCoffee = () => {
    const newCoffee = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString(),
    };
    setCoffeeCount(prevCount => prevCount + 1);
    setCoffeeHistory(prevHistory => [newCoffee, ...prevHistory]);
    // Save to storage (not implemented in this example)
  };

  const renderCoffeeItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Ionicons name="cafe" size={24} color="#6F4E37" />
      <Text style={styles.historyText}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Coffee Consumption</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{coffeeCount}</Text>
        <Text style={styles.counterLabel}>Coffees Today</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addCoffee}>
        <Ionicons name="add-circle" size={64} color="#6F4E37" />
      </TouchableOpacity>
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Coffee History</Text>
        <FlatList
          data={coffeeHistory}
          renderItem={renderCoffeeItem}
          keyExtractor={item => item.id}
          style={styles.historyList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  counterText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#6F4E37',
  },
  counterLabel: {
    fontSize: 18,
    color: '#666',
  },
  addButton: {
    marginBottom: 30,
  },
  historyContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  historyList: {
    flex: 1,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  historyText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default App;
// End of App.js