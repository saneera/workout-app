import React from "react";
import Navigation from "./src/navigation/index";
import useCachedResources from "./src/hooks/useCachedResources";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const isLoaded = useCachedResources();
  console.log(isLoaded);

  if (isLoaded) {
    return <Navigation />;
  } else {
    return <AntDesign name="loading2" size={24} color="black" />;
  }
}
