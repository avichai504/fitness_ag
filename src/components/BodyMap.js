/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { fetchData, bodyMapOptions } from "../utils/fetchData";
import Loader from "./Loader";

const BodyMap = () => {
  const MAX_MUSCLES_SELECTOR = 12;

  const [image, setImage] = useState("");
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectorCount, setSelectorCount] = useState(0);

  const muscles = {
    General: [
      "all",
      "all_lower",
      "all_upper",
      "abs",
      "core",
      "core_lower",
      "core_upper",
    ],
    Upper: [
      "chest",
      "latissimus",
      "back",
      "back_lower",
      "back_upper",
      "biceps",
      "triceps",
      "neck",
    ],
    Limbs: [
      "forearms",
      "hands",
      "shoulders",
      "shoulders_back",
      "shoulders_front",
      "legs",
      "calfs",
    ],
    Lower: [
      "abductors",
      "adductors",
      "gluteus",
      "hamstring",
      "quadriceps",
      "",
      "",
      "Clear All",
    ],
  };


  const muscleMapping = {
    all: "All",
    all_lower: "Lower All",
    all_upper: "Upper All",
    abs: "Abs",
    core: "Core",
    core_lower: "Lower Core",
    core_upper: "Upper Core",
    chest: "Chest",
    latissimus: "Latissimus",
    back: "Back",
    back_lower: "Lower Back",
    back_upper: "Upper Back",
    biceps: "Biceps",
    triceps: "Triceps",
    neck: "Neck",
    forearms: "Forearms",
    hands: "Hands",
    shoulders: "Shoulders",
    shoulders_back: "Back Shoulders",
    shoulders_front: "Front Shoulders",
    legs: "Legs",
    calfs: "Calves",
    abductors: "Abductors",
    adductors: "Adductors",
    gluteus: "Gluteus",
    hamstring: "Hamstring",
    quadriceps: "Quadriceps",
    "Clear All": "Clear All",
  };

  const handleClearAllMuscles = () => {
    if (selectorCount) {
      setSelectorCount(0);
      setSelectedMuscles([]);
    }
  };

  const handleMuscleClick = (current_muscle) => {
    const clearAll = current_muscle === "Clear All";
    const alreadySelected = selectedMuscles.includes(current_muscle);

    if (clearAll && selectorCount > 0) {
      handleClearAllMuscles();
      return [];
    }
    if (clearAll) {
      return [];
    }

    if (selectorCount >= MAX_MUSCLES_SELECTOR && !alreadySelected) return[];

    setSelectedMuscles((prevItems) => {
      const newCount = clearAll
        ? 0
        : alreadySelected
        ? selectorCount - 1
        : selectorCount + 1;
      setSelectorCount(newCount);

      if (alreadySelected) return prevItems.filter((m) => m !== current_muscle);
      return [...prevItems, current_muscle];
    });
  };

  const generateColor = (index) => {
    const r = index % 3 === 0 ? 255 : 200 - 40 * index * Math.random();
    const g = index % 3 === 1 ? 255 : 10 + index * Math.random();
    const b = index % 3 === 2 ? 255 : 8 + index * Math.random();

    return `${r},${g},${b}`;
  };

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      let url = "";

      if (selectedMuscles.length === 0) {
        url =
          "https://muscle-group-image-generator.p.rapidapi.com/getBaseImage?transparentBackground=1";
      } else if (selectedMuscles.length >= 1) {
        const colors = selectedMuscles
          .map((_, index) => generateColor(index))
          .map((rgb) =>
            rgb
              .split(",")
              .map((val) => parseInt(val).toString(16).padStart(2, "0"))
              .join("")
          ); // Convert RGB to HEX

        url = `https://muscle-group-image-generator.p.rapidapi.com/getIndividualColorImage?muscleGroups=${selectedMuscles.join(
          ","
        )}&colors=${colors.join(",")}&transparentBackground=1`;
      }

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
  }, [selectedMuscles]);

  return (
    <div id="body-map-container" className="bodyMapContainer">
      <table className="muscleTable">
        <tr>
          {Object.keys(muscles).map((group) => (
            <th key={group}>{group}</th>
          ))}
        </tr>

        {Object.values(muscles)
          .reduce((max, current) =>
            current.length > max.length ? current : max
          )
          .map((_, index) => (
            <tr key={index}>
              {Object.values(muscles).map((musclesList) => (
                <td key={musclesList[index] || index}>
                  {musclesList[index] && (
                    <button
                      className={
                        selectedMuscles.includes(musclesList[index])
                          ? "selected"
                          : musclesList[index] === "Clear All"
                          ? "clearAllBtn"
                          : ""
                      }
                      onClick={() => handleMuscleClick(musclesList[index])}
                    >
                      {muscleMapping[musclesList[index]]}
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
      </table>

      {loading ? (
        <Loader />
      ) : (
        <img className="bodyMapImage" src={image} alt="Muscle Image" />
      )}
    </div>
  );
};

export default BodyMap;
