import { StyleSheet, View, Text } from "react-native";
import { Workout } from "../../../types";
import { formatSeconds } from "../../../utils/time";

const WorkoutItem = ({ item }: { item: Workout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>
        Duration : {formatSeconds(item.duration)}
      </Text>
      <Text style={styles.difficulty}>Difficulty : {item.difficulty}</Text>
    </View>
  );
};

export default WorkoutItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "#DFDFDF",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  name: {
    fontFamily: "montserrat-bold",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: {
    fontFamily: "montserrat",
    fontSize: 15,
  },
  difficulty: {
    fontFamily: "montserrat",
    fontSize: 15,
  },
});
