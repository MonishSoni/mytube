import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, Channelcard } from "./";
import { fetchApi } from "../utils/fetchApi";

const Channeldetail = () => {
  const { id } = useParams();
  const [channeldetail, setChanneldetail] = useState(null);
  const [videoc, setVideoc] = useState([]);

  console.log(channeldetail, videoc);
  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChanneldetail(data?.items[0])
    );

    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideoc(data?.items)
    );
  }, [id]);
  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              height:'200px',
              background: "#cb2d3e",
              background: "-webkit-linear-gradient(to right, #ef473a, #cb2d3e)",
              background: "linear-gradient(to right, #ef473a, #cb2d3e)",
              zIndex: 10,
              marginBottom: "-110px",
            }}
          />
          <Channelcard channel={channeldetail} />
        </Box>

        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos video={videoc} />
        </Box>
      </Box>
    </>
  );
};

export default Channeldetail;
