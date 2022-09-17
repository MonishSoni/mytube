import axios from "axios";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    // "X-RapidAPI-Key": "f1f0359536mshd60d3e0825ca126p12e407jsn9d2d2c18f0bd",
    // 'X-RapidAPI-Key': '5bf61050a3mshe9307bcc3d55f3dp12dc70jsn1c42766bba10',
    "X-RapidAPI-Key": "2c8a50f4d9mshd3cdd7eeb0b0f8ap1ac8afjsn1ce1de066cf5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {});

export const fetchApi = async (url) => {
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/${url}`,
    options
  );

  return data;
};
