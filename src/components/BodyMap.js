import { useEffect, useState } from "react";
import { fetchData, bodyMapOptions } from "../utils/fetchData";
import Loader from "./Loader";

const BodyMap = () => {
  const [image, setImage] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("all");
  const [loading, setLoading] = useState(false);

  const muscles = [
    "all",
    "all_lower",
    "all_upper",
    "abductors",
    "abs",
    "adductors",
    "back",
    "back_lower",
    "back_upper",
    "biceps",
    "calfs",
    "chest",
    "core",
    "core_lower",
    "core_upper",
    "forearms",
    "gluteus",
    "hamstring",
    "hands",
    "latissimus",
    "legs",
    "neck",
    "quadriceps",
    "shoulders",
    "shoulders_back",
    "shoulders_front",
    "triceps",
  ];

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const url = `https://muscle-group-image-generator.p.rapidapi.com/getImage?muscleGroups=${selectedMuscle}&color=200%2C10%2C8&transparentBackground=1`;

      try {
        const responseData = await fetchData(
          url,
          bodyMapOptions,
          "arrayBuffer"
        );
        const imageFile = new Blob([responseData]);
        const imageUrl = URL.createObjectURL(imageFile);
        setImage(imageUrl);
      } catch (error) {
        console.error(error.message);
        setImage(false);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [selectedMuscle]);
  return (
    <div className="bodyMapContainer">
      <select
        value={selectedMuscle}
        onChange={(e) => setSelectedMuscle(e.target.value)}
        className="muscleSelect"
      >
        {muscles.map((muscle) => (
          <option key={muscle} value={muscle}>
            {muscle}
          </option>
        ))}
      </select>
      {loading ? <Loader /> : <img src={image} alt={selectedMuscle} />} 

    </div>
  );
};

export default BodyMap;

//? Empty body map
//! 'https://muscle-group-image-generator.p.rapidapi.com/getBaseImage?transparentBackground=1'
//? One color for all muscle groups body map
//! `https://muscle-group-image-generator.p.rapidapi.com/getImage?muscleGroups=${props.muscleGroups}&color=200%2C10%2C8&transparentBackground=1`
//? Individual color for each muscle groups
//! 'https://muscle-group-image-generator.p.rapidapi.com/getIndividualColorImage?muscleGroups=chest%2Ctriceps%2Cshoulders&colors=ff0000%2C0f0&transparentBackground=1';

// [
// "all",
// "all_lower",
// "all_upper",
// "abductors",
// "abs",
// "adductors",
// "back",
// "back_lower",
// "back_upper",
// "biceps",
// "calfs",
// "chest",
// "core",
// "core_lower",
// "core_upper",
// "forearms",
// "gluteus",
// "hamstring",
// "hands",
// "latissimus",
// "legs",
// "neck",
// "quadriceps",
// "shoulders",
// "shoulders_back",
// "shoulders_front",
// "triceps"
//   ]
