import React from "react";
import { Link } from "react-router-dom";
import FirstPart from "./FirstPart";
import VideoPart from "./VideoPart";
import LastPart from "./LastPart";
// import VideoPlayer from "./VideoPlayer"

export default function HomePage() {
  return (
    < >
      <FirstPart />
      <VideoPart />
      {/* <VideoPlayer /> */}
      <LastPart />
    </>
  );
}
