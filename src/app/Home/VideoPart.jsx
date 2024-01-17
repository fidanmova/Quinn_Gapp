import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";


export default function VideoPart() {
  return (
    <Box width="100%" height="100%" sx={{ backgroundColor: "#111111" }}>
      <video src={require("./bg_video/video.mp4")} autoPlay loop muted playsInline className="video" />

      {/* <video playsInline autoPlay loop muted  className='video'>
        <source src="./bg_video/video.mp4" type="video/mp4" /> */}

    {/* </video> */}
    </Box>
  );
}
