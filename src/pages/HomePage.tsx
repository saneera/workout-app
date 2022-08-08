import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { Workout } from "../../types";
import WorkoutItem from "./component/WorkoutItem";
import { getWorkOuts } from "../../storage/workouts";

const HomePage = ({ navigation }: NativeStackHeaderProps) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    async function getData() {
      const _workouts = await getWorkOuts();
      setWorkouts(_workouts);
    }
    getData();
  }, []);

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
  },
  header: {
    fontFamily: "montserrat-bold",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
