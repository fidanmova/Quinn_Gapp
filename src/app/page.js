import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./Home/HomePage";
import { Box, Grid } from "@mui/material";
import Header from './Header'

export default function Home() {
  return (
    <Box width="100%" height="100%">
      <Header />
      <HomePage />
    </Box>
  );
}
