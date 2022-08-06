import { StyleSheet, Text, View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type DetailParam = {
  route: {
    params: {
      slug: string;
    };
  };
};

const WorkoutDetailsPage = ({
  route,
}: NativeStackHeaderProps & DetailParam) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Slug - {route.params.slug}</Text>
    </View>
  );
};

export default WorkoutDetailsPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
