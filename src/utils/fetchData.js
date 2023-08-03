export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "105fffbe91mshfe95775dff2bb6fp17d121jsnbe86adaca2c1",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
