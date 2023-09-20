export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "105fffbe91mshfe95775dff2bb6fp17d121jsnbe86adaca2c1",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

export const bodyMapOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "105fffbe91mshfe95775dff2bb6fp17d121jsnbe86adaca2c1",
    "X-RapidAPI-Host": "muscle-group-image-generator.p.rapidapi.com",
  },
};

export const fetchData = async (url, options, responseType = "json") => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  if (responseType === "json") {
    return await res.json();
  } else if (responseType === "arrayBuffer") {
    return await res.arrayBuffer();
  } else {
    throw new Error(`Unsupported response type: ${responseType}`);
  }
};
