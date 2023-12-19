import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Pavit");
  const [session, setSession] = useState({ number: 6, title: "hello" });
  const [current, setCurrent] = useState(true);
  const [value, setValue] = useState(0);
  const [clicks, setClicks] = useState(0);
  const onClickHandler = () => {
    setName("State Updated to Pavit");
    setSession({ number: 7, title: "hello2" });
    setCurrent(false);
  };
  const onAddClickHandler = () => {
    setValue(value + 5);
    setClicks(clicks + 1);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>
        This is session {session.number} with {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? "current session" : "next session"}
      </Text>
      <Button
        title="Update State"
        style={styles.button}
        onPress={onClickHandler}
      ></Button>

      <Text style={styles.text}>{value}</Text>
      <Button
        title="Add"
        style={styles.button}
        onPress={onAddClickHandler}
      ></Button>
      <Text style={styles.text}>You clicked {clicks} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: "24px",
    fontStyle: "italic",
    margin: 10,
  },
});
