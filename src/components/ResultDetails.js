import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ResultDetails = ({result}) => {
    return (
      <View style={styles.view}>
        <Image source={{ uri: result.image_url }} style={styles.img} />
        <Text style={styles.txt}> {result.name}</Text>
        <Text style={styles.txt_b}> {result.rating} stars   {result.review_count} Reviews</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 150,
    borderRadius: 4,
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  txt_b: {
    
    color:"grey"
  },
  view: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 10,
    
    shadowColor: "grey",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default ResultDetails