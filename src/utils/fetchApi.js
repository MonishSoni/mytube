import axios from "axios";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "f1f0359536mshd60d3e0825ca126p12e407jsn9d2d2c18f0bd",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
   
  });

export const fetchApi = async (url) => {
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/${url}`,
    options
  );

  return data;
};
