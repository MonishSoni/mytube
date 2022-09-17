import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import IconButton from "@mui/material/IconButton";

const Downloadmp3 = ({ videoid }) => {
  const [mlink, setMlink] = useState(null);

  const options = {
    method: "GET",
    url: "https://youtube-mp3-download1.p.rapidapi.com/dl",
    params: { id: videoid },
    headers: {
      "X-RapidAPI-Key": "5bf61050a3mshe9307bcc3d55f3dp12dc70jsn1c42766bba10",
      "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setMlink(response.data.link);
      
    });
  }, [videoid]);

  return (
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      style={{ cursor: "pointer", marginTop: "15px" }}
    >
      <a target="_blank" style={{ color: "#fff" }} download="" href={mlink}>
        <IconButton
          size="small"
          sx={{
            ml: "5px",
            color: "#ffffff",
            width:{
                lg:'25%',sm:'100%',xs:'100%'
            },
            border: "1px solid #fc1503",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          <AudiotrackIcon sx={{ marginRight: "10px" }} />
          Download MP3
        </IconButton>
      </a>
    </Typography>
  );
};

export default Downloadmp3;
