import React from "react";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { FaInstagram } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { FiHome } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
import { FaFileAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <Box
    sx={{
      width: {
        xs: '15%',  // Mobile width
        sm: '10%',   // Tablet width
        md: '5%',   // Desktop width
      },
    }}
      height="100vh"
      borderRight="1px solid rgba(212, 203, 184, 0.1)"
      position="fixed"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box>
    
        <Box flexDirection="column" display="flex">
          <Box
            sx={{
              color: "white",
              fontSize: "28px",
              paddingBottom: "20px",

              // "&:hover": {
              //   border: "1px solid transparent",
              // },
            }}
          >
            <Tooltip
              arrow
              title={<Typography sx={{ fontSize: "16px" }}>Home</Typography>}
              placement="right-start"
              cursor="pointer"
              position="relative"
            >
                <FiHome size={24} />
            </Tooltip>
          </Box>

          <Box sx={{ color: "white", paddingBottom: "20px" }}>
            <Tooltip
              arrow
              title={<Typography sx={{ fontSize: "16px" }}>Projects</Typography>}
              placement="right-start"
              cursor="pointer"
              position="relative"
            >
            <GrGallery  size={24}/>
            </Tooltip>
          </Box>

          <Box sx={{ color: "white", paddingBottom: "20px" }}>
            <Tooltip
              arrow
              title={<Typography sx={{ fontSize: "16px" }}>Publications</Typography>}
              placement="right-start"
              cursor="pointer"
              position="relative"
            >
              <FaFileAlt size={24}  />
            </Tooltip>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box flexDirection="column" display="flex">
          <Box sx={{ color: "white",  paddingBottom: "20px" }}>
            <Tooltip
              arrow
              title={<Typography sx={{ fontSize: "16px" }}>Instagram</Typography>}
              placement="right-start"
              cursor="pointer"
              position="relative"
            >
              <FaInstagram size={24} />
            </Tooltip>
          </Box>

          <Box sx={{ color: "white",  paddingBottom: "20px" }}>
            <Tooltip
              arrow
              title={<Typography sx={{ fontSize: "16px" }}>Vimeo</Typography>}
              placement="right-start"
              cursor="pointer"
              position="relative"
            >
              <FaVimeoV size={24}/>
            </Tooltip>
          </Box>

          <Box sx={{ color: "white",  paddingBottom: "20px" }}>
            <Tooltip
              arrow
              title={<Typography sx={{ fontSize: "16px" }}>E-mail</Typography>}
              placement="right-start"
              cursor="pointer"
              position="relative"
            >
              <MdOutlineMail  size={24}/>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
