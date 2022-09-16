import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchApi } from "../utils/fetchApi";

const Searchfeed = () => {
  const {searchterm} = useParams();

  console.log(searchterm)
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchterm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchterm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Search Results For <span style={{ color: "#fc1503" }}>{searchterm}</span>
      </Typography>

      <Videos video={videos} />
    </Box>
  );
};

export default Searchfeed;
