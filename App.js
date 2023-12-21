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
  TextInput,
  Pressable,
  Alert,
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
const [name, SetName] = useState('');
const [submitted, SetSubmitted] = useState(false);
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
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
      Alert.alert(
        'Warning',
        'The name must be longer than 3 characters', [
        {
          text: 'Do not show again',
          onPress: () => console.warn('Do not show Pressed!')
        },
        {
          text: 'Cancel',
          onPress: () => console.warn('Cancel Pressed!')
        },
        {
          text: 'OK',
          onPress: () => console.warn('OK Pressed!')
        },
      ],
        {
          cancelable: true,
          onDismiss: () => console.warn('Alert dismissed!')
        })
      }}
  return (
    // <FlatList
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    // ></FlatList>
    // <SectionList
    //   keyExtractor={(item, index) => index.toString()}
    //   sections={DATA}
    //   renderItem={({ item }) => (
    //       <Text style={styles.text}>{item}</Text>
    //   )}
    //   renderSectionHeader={({ section }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{section.title}</Text>
    //     </View>
    //   )}
    // ></SectionList>

    // <ScrollView style={styles.body}>
    //   {Items.map((object) => {
    //     return (
    //       <View style={styles.item} key={object.key}>
    //         <Text style={styles.text}>{object.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>

    <View style={styles.body}>
    <SafeAreaView>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {submitted ?
        <Text style={styles.text}>
          You are registered as {name}
        </Text>
        :
        null
      }
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  // body: {
  //   flex: 1,
  //   flexDirection: "column",
  //   backgroundColor: "#ffffff",
  // },
  // item: {
  //   margin: 10,
  //   backgroundColor: "#4ae1fa",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // text: {
  //   color: "#000000",
  //   fontSize: 45,
  //   fontStyle: "italic",
  //   margin: 10,
  // },
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});
