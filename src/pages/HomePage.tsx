import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import WorkoutItem from "./component/WorkoutItem";
import useWorkouts from "../hooks/useWorkouts";

const HomePage = ({ navigation }: NativeStackHeaderProps) => {
  const workouts = useWorkouts();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New workouts</Text>
      <FlatList
        data={workouts}
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
    backgroundColor: "pink",
  },
  header: {
    fontFamily: "montserrat-bold",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
