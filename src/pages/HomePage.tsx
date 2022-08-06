import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import data from "../../data.json";
import { Workout } from "../../types";
import WorkoutItem from "./component/WorkoutItem";

const PressableItem = ({ item }: { item: Workout }) => {
  return (
    <Pressable onPress={() => alert(item.name)}>
      <WorkoutItem item={item} />
    </Pressable>
  );
};

const HomePage = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New workouts</Text>
      {/*<MontserratText>New workouts</MontserratText>*/}
      <FlatList
        data={data as Workout[]}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.push("WorkoutDetails", { slug: item.slug })
              }
            >
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  header: {
    fontFamily: "montserrat-bold",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
