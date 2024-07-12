import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image source={require('../assets/Close.png')} style={styles.close} />
        <Text style={styles.headerText}>E R I C   A T S U</Text>
      </View>
      <DrawerItem
        label="Store"
        onPress={() => props.navigation.navigate('Store')}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Locations"
        onPress={() => props.navigation.navigate('Locations')}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Blog"
        onPress={() => props.navigation.navigate('Blog')}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Jewelery"
        onPress={() => props.navigation.navigate('Jewelery')}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Electronic"
        onPress={() => props.navigation.navigate('Electronic')}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Clothing"
        onPress={() => props.navigation.navigate('Clothing')}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#fff', 
  },
  close: {
    width: 30,
    height: 30
  },
  headerText: {
    fontSize: 18,
    color: '#000',
    marginTop: 20,
    textDecorationLine: 'underline', 
    textDecorationColor: '#DD8560',
  },
  drawerLabel: {
    fontSize: 16,
    color: '#000',
    marginVertical: 4, 
  },
});

export default CustomDrawerContent;
