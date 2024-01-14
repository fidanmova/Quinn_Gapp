import React from "react";
import { Box } from "@mui/material";
import { GoHome } from "react-icons/go";


export default function Header() {
  return (
    <Box
      width="7%"
      height="100vh"
      borderRight="1px solid rgba(212, 203, 184, 0.1)"
      position='fixed'
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      alignItems='center'
    >
      <Box>
        <Box sx={{ color: "white", fontSize: '28px', paddingBottom: '20px' }}><GoHome /></Box>
        <Box sx={{ color: "white", fontSize: '28px', paddingBottom: '20px' }}><GoHome /></Box>
        <Box sx={{ color: "white", fontSize: '28px', paddingBottom: '20px' }}><GoHome /></Box>
      </Box>

      <Box>
        <Box sx={{ color: "white", fontSize: '28px', paddingBottom: '20px' }}><GoHome /></Box>
        <Box sx={{ color: "white", fontSize: '28px', paddingBottom: '20px' }}><GoHome /></Box>
        <Box sx={{ color: "white", fontSize: '28px', paddingBottom: '20px' }}><GoHome /></Box>
      </Box>

    </Box>
  );
}


