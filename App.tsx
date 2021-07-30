import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SearchSettings from './components/SearchSettings';
import { styles } from './styles/styles';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <SearchSettings />
    </View>
  );
};

export default App;
