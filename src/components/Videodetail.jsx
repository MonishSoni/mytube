import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchApi } from "../utils/fetchApi";

const Videodetail = () => {
  const [videod, setVideod] = useState("demo");
  const [relatedvideo, setRelatedVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistic&id=${id}`).then((data) =>
      setVideod(data.items[0])
    );

    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideo(data.items)
    );
  }, [id]);

  console.log(relatedvideo);
  if (!videod?.snippet) return "Loading...";
  if (!relatedvideo) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videod;

  return (
    <>
      <Box minHeight="95vh" paddingBottom="20px !important">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                className="react-player"
                controls
                url={`https://www.youtube.com/watch?v=${id}`}
              />

              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>

                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: "0.7" }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: "0.7" }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos video={relatedvideo} direction="column" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Videodetail;
