import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Stack } from "@mui/material";
import { Check, CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utils/constants";

const Videocard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: {
          lg: "275px",
          md: "255px",
          sm: "230px",
          xs: "360px",
        },

        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          // sx={{ width: '358px', height: '180px' }}
          sx={{
            width: {
              lg: "100%",
              xs: "100%",
              sm: "100%",
              md: "100%",
            },
            height: {
              lg: "140px",
              xs: "180px",
              sm: "130px",
              md: "140px",
            },
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Stack direction="row" justifyContent="space-between">
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle
                sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Videocard;
