import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CustomHeader from './header';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error('Failed to load cart from storage');
      }
    };

    loadProducts();
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const newCartItem = { ...product, cartId: `${product.id}-${Date.now()}` };
    const newCart = [...cart, newCartItem];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.product}> 
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Image source={require('../assets/add_circle.png')} style={styles.addCircle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
              <Text style={styles.name}>{item.title}</Text>
            </TouchableOpacity>
            <Text style={styles.description}>{item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description}</Text>
            <Text style={styles.price}>{`${item.price}$`}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <CustomHeader navigation={navigation} />
            <View style={styles.sectionHeading}>
              <Text style={styles.ourStory}>O U R   S T O R Y</Text>
              <View style={styles.icons}>
                <View style={styles.imageWrapper}>
                  <Image source={require('../assets/Listview.png')} style={styles.listView} />
                </View>
                <View style={styles.imageWrapper}>
                  <Image source={require('../assets/Filter.png')} style={styles.filter} />
                </View>
              </View>
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CartScreen')}>
            <Text style={styles.buttonText}>Go to Cart</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 22,
  },
  row: {
    justifyContent: 'space-between',
  },
  product: {
    flex: 1,
    marginBottom: 20,
    marginLeft: 10
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  addCircle: {
    transform: [{ translateX: 110 }, { translateY: -25 }],
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 12,
    color: '#555555',
  },
  price: {
    fontSize: 14,
    color: '#DD8560',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  ourStory: {
    fontSize: 20,
  },
  imageWrapper: {
    // backgroundColor: '#E8E8E8',
    padding: 10,
    borderRadius: 40,
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    // backgroundColor: '#E8E8E8',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default HomeScreen;
