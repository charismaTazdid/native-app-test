import React from 'react';
import {
  SafeAreaView, StyleSheet, Text,
  View,
} from 'react-native';


function App(): JSX.Element {
  return (
    <SafeAreaView >
      <View>
        <Text> ok? </Text>
        <Text> ok :) </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
