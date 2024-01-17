"use client";
import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";

const VideoPlayer = () => {
  //video path
  let video = "/videos/next.mp4";

  return (
    <Box>
      <ReactPlayer
        width="100%"
        height="auto"
        objectFit="cover"
        url={video}
        controls={true}
        light={false}
        pip={true}
      />
      <source src={video} type="video/mp4" />
    </Box>
  );
};

export default VideoPlayer;
