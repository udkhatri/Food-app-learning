import  { Text, StyleSheet, View }  from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetails from './ResultDetails'

const ResultList = ({ title, result }) => {
  return (
    <View>
      <Text style={styles.TextStyle}>{title}</Text>

      <FlatList
        horizontal
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item}/>;
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
        TextStyle: {
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 10,
           
        }
})

export default ResultList;

