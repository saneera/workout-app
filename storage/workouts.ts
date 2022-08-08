import { containsKey, getData, removeItem, storeData } from "./index";
import data from "../data.json";
import { Workout } from "../types";

export const getWorkOuts = async (): Promise<Workout[]> => {
  const workouts = await getData("workout-data");
  return workouts;
};

export const initWorkOuts = async (): Promise<boolean> => {
  const hasWorkOuts = await containsKey("workout-data");
  if (!hasWorkOuts) {
    await storeData("workout-data", data);
    return true;
  }
  return false;
};

export const clearWorkOuts = async () => {
  await removeItem("workout-data");
};
