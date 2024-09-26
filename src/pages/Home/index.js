import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Button,
  Box
} from "@mui/material";

function Home() {
  const theme = createTheme({
    components: {},
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>IMPLEMENTAR AQUI</Box>
    </ThemeProvider>
  );
}

export default Home;
