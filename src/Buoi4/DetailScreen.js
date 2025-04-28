import { StyleSheet, Text, View ,Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
