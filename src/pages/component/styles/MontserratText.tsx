import { Text, TextProps } from "react-native";

const MontserratText = ({ props }: { props: TextProps }) => {
  return <Text {...props} style={[{ fontFamily: "montserrat" }]} />;
};

export default MontserratText;
