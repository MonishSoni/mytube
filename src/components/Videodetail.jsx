import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography,Divider } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchApi } from "../utils/fetchApi";
import DownloadButton from "./DownloadButton";
import Downloadmp3 from "./Downloadmp3";

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

  if (!videod?.snippet) return "Loading...";
  if (!relatedvideo) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videod;

  return (
    <>
      <Box minHeight="95vh" paddingBottom="20px !important">
        <Stack direction={{ xs: "column", md: "column" }}>
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
                flexWrap="wrap"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`} className="marb">
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

                <Stack  direction="row" gap="10px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: "0.7" }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>

                  <Typography variant="body1" sx={{ opacity: "0.7" }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>

              <Box p={2}>
                <DownloadButton videoid={id} />
                <Downloadmp3 videoid={id} />
              </Box>
             
            </Box>
          </Box>
             
          <Box
            px={6} 
            py={{ md: 4, xs: 6 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos video={relatedvideo} direction="row" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Videodetail;
