import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import CustomHeader from './header';
import { useNavigation } from '@react-navigation/native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <ScrollView contentContainerStyle={styles.scrollView}>
      <CustomHeader navigation={navigation} />
      <Image source={product.image} style={styles.image} />
      <View style={styles.inner}>
        <Text style={styles.name}>{product.name}</Text>
        <Image source={require('../assets/Export.png')} style={styles.export} />
      </View>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>M A T E R I A L S</Text>
        < Text style={styles.sectionText}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
        <View style={styles.Instructions}>

          <View style={styles.Instruction}>
            <Image source={require('../assets/Do Not Bleach.png')} style={styles.sectionIcon} />
            <Text style={styles.sectionText}>Do not use bleach</Text>
          </View>
          <View style={styles.Instruction}>
            <Image source={require('../assets/Do Not Tumble Dry.png')} style={styles.sectionIcon} />
            <Text style={styles.sectionText}>Do not tumble dry</Text>
          </View>
          <View style={styles.Instruction}>
            <Image source={require('../assets/Do Not Wash.png')} style={styles.sectionIcon} />
            <Text style={styles.sectionText}>Dry clean with tetrachloroethylene</Text>
          </View>
          <View style={styles.Instruction}>
            <Image source={require('../assets/Iron Low Temperature.png')} style={styles.sectionIcon} />
            <Text style={styles.sectionText}>Iron at a maximum of 110ºC/230ºF</Text>
          </View>

        </View>

        <View style={styles.shipping}>
          <View style={styles.shippingHead}>
            <View style = {styles.shippipingInner}>
              <Image source={require('../assets/Shipping.png')} style={styles.shippingImg} />
              <Text style={styles.shippingHeading}> Free Flat Rate Shipping</Text>
            </View>
            <Image source={require('../assets/Up.png')} style={styles.up} />
          </View>
          <Text style={styles.shippingTime}>Estimated to be delivered on</Text>
          <Text style={styles.shippingDate}>09/11/2021 - 12/11/2021.</Text>
        </View>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
  },
  inner:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
    marginTop: 16,
  },
  export:{
    transform: [{ translateX: 0 }, { translateY: 20 }],
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  price: {
    fontSize: 20,
    color: '#DD8560',
  },
  section:{
    marginTop: 16,
  },
  sectionHeader:{
    fontSize: 18,
    marginBottom: 5
  },
  sectionText:{
    fontSize: 14,
    color : '#555555',
    marginBottom: 5,
    width: 300
  },
  Instructions:{
    marginTop: 15
  },
  Instruction:{ 
    flexDirection: 'row',
    gap: 13,
    marginBottom: 15
  },
  shipping:{
    gap: 10
  },
  shippingHead:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shippipingInner:{
    flexDirection: 'row',
    gap: 13,
  },
  shippingHeading:{},
  shippingTime:{
    color : '#555555',
    transform: [{ translateX: 40 }, { translateY: 0 }],
  },
  shippingDate:{
    color : '#555555',
    transform: [{ translateX: 40 }, { translateY: 0 }],
  },
});

export default ProductDetailScreen;
