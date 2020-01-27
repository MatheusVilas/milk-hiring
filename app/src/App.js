import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import ClimaApi from './api/climaTempo';

const climaApi = new ClimaApi();
const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Teste</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
