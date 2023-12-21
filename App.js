import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";

export default function App() {
  const [Items, setItems] = useState([
    { key: "1", name: "Item 1" },
    { key: "2", name: "Item 2" },
    { key: "3", name: "Item 3" },
    { key: "4", name: "Item 4" },
    { key: "5", name: "Item 5" },
    { key: "6", name: "Item 6" },
    { key: "7", name: "Item 7" },
    { key: "8", name: "Item 8" },
    { key: "4", name: "Item 9" },
    { key: "6", name: "Item 27" },
    { key: "0", name: "Item 78" },
  ]);

  const DATA = [
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2", "Item 1-3"],
    },
    {
      title: "Title 2",
      data: ["Item 2-1", "Item 2-2", "Item 2-3"],
    },
    {
      title: "Title 3",
      data: ["Item 3-1"],
    },
    {
      title: "Title 4",
      data: ["Item 4-1", "Item 4-2"],
    },
  ];

  return (
    // <FlatList
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    // ></FlatList>
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
          <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    ></SectionList>

    // <ScrollView style={styles.body}>
    //   {Items.map((object) => {
    //     return (
    //       <View style={styles.item} key={object.key}>
    //         <Text style={styles.text}>{object.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  item: {
    margin: 10,
    backgroundColor: "#4ae1fa",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 45,
    fontStyle: "italic",
    margin: 10,
  },
});
