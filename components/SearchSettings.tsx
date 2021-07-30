import React from 'react';
import {Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';

const SearchSettings = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Configure Search Settings</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}
        accessibilityLabel="Learn more about this purple button">
        <Text style={styles.buttonText}>Search with PIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchSettings;
