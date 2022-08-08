import { useEffect, useState } from "react";
import { Workout } from "../../types";
import { getWorkOuts } from "../../storage/workouts";

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    async function getData() {
      const _workouts = await getWorkOuts();
      setWorkouts(_workouts);
    }

    getData();
  }, []);

  return workouts;
};

export default useWorkouts;
