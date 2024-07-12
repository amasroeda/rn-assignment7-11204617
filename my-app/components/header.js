import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CustomHeader({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require('../assets/Menu.png')} style={styles.menu}/>
      </TouchableOpacity>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <View style={styles.innerHeader}>
        <Image source={require('../assets/Search.png')} style={styles.search} />
        <Image source={require('../assets/shoppingBag.png')} style={styles.shoppingBag} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 22,
  },
  menu: {
    height: 30,
    width: 20,
  },
  logo: {
    height: 41,
    width: 100,
    marginLeft: 27,
  },
  innerHeader: {
    display: 'flex',
    flexDirection: 'row',
    gap: 9,
  },
  search: {
    height: 25,
    width: 25,
  },
  shoppingBag: {
    height: 25,
    width: 25,
  },
});

export default CustomHeader;
