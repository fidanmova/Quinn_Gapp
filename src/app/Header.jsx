import React from "react";
import { Box } from "@mui/material";
import { GoHome } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Box
      width="7%"
      height="100vh"
      borderRight="1px solid rgba(212, 203, 184, 0.1)"
      position="fixed"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box>
        <Box sx={{ color: "white", fontSize: "28px", paddingBottom: "20px" }}>
          <Tooltip
            title="Home"
            placement="right-start"
            cursor="pointer"
            position="relative"
          
          >
              <GoHome style={{ width: "30px", height: "30px"}} />
          </Tooltip>
        </Box>

        <Tooltip
          title={<Button variant="contained" size='small'>Home</Button>}
          arrow
          placement="right-start"
          cursor="pointer"
          position="relative"       
        >
          <Box sx={{ color: "white", paddingBottom: "20px" }}>
          <GoHome style={{ width: "30px", height: "30px", alignSelf: 'center' }} />
          </Box>
        </Tooltip>

        <Tooltip
          title={<Button variant="contained" size='small'>Home</Button>}
          arrow
          placement="right-start"
          cursor="pointer"
          position="relative"  
        
        >
          <Box sx={{ color: "white", paddingBottom: "20px" }}>
          <GoHome style={{ width: "30px", height: "30px", alignSelf: 'center' }} />
          </Box>
        </Tooltip>
             
      </Box>

      <Box>
  
      <Box flexDirection="column" display="flex">
      <Box sx={{ color: "white", fontSize: "28px", paddingBottom: "20px" }}>
          <Tooltip
            title="Instagram"
            placement="right-start"
            cursor="pointer"
            position="relative"
          >
              <GoHome style={{ width: "30px", height: "30px"}} />
          </Tooltip>
        </Box>

        <Box sx={{ color: "white", fontSize: "28px", paddingBottom: "20px" }}>
          <Tooltip
            title="Vimeo"
            placement="right-start"
            cursor="pointer"
            position="relative"
    
          >
              <GoHome style={{ width: "30px", height: "30px"}} />
          </Tooltip>
        </Box>

        <Box sx={{ color: "white", fontSize: "28px", paddingBottom: "20px" }}>
          <Tooltip
            title="Twitter"
            placement="right-start"
            cursor="pointer"
            position="relative"
          >
              <GoHome style={{ width: "30px", height: "30px"}} />
          </Tooltip>
        </Box>
    </Box>
      </Box>
    </Box>
  );
}
