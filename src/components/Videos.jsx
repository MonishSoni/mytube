import React from "react";
import { Stack, Box } from "@mui/material";
import { Videocard, Channelcard } from "./";

const Videos = ({ video, direction }) => {
  return (
    <Stack
      direction={ direction || "row" }
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      sx={{ justifyContent: { md: "start", xs: "center" } }}
    >
      {video.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <Videocard video={item} />}
          {item.id.channelId && <Channelcard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
