import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

 const Searchbar = ({Term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Ionicons name="ios-search" size={24} color="black" style={styles.ImgField}/>
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing= {onTermSubmit}
        placeholder="Search" 
        style={styles.IpField} 
        value= {Term}
        onChangeText ={onTermChange}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#e6e7e8",
    height: 40,
    borderRadius: 9,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
    
    
  },
  IpField: {
    flex: 1,
    paddingStart: 5,
  },
  ImgField: {
    alignSelf: "center",
    paddingStart: 10,
  },
});

export default Searchbar;