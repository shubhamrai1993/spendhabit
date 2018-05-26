import React from 'react';
import { charcoal_grey, white } from '../styles/Colors';
import { View, StyleSheet, Image, Text } from 'react-native';

const SplashScreen = (props) => {
  return (
    <View style={styles.container} >
      <Image 
        style={styles.logo}
        source={require('../res/logo/logo@hdpi.png')}
      />
      <Text style={styles.subText} >
        Record expenses. Habitually. 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: charcoal_grey,
  },
  logo: {
    height: 120,
    width: 120,
  },
  subText: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    color: white,
  }
});

export { SplashScreen };
