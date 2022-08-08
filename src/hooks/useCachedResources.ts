import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { clearWorkOuts, initWorkOuts } from "../../storage/workouts";

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState<boolean>(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await initWorkOuts();
        await Font.loadAsync({
          montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
};

export default useCachedResources;
