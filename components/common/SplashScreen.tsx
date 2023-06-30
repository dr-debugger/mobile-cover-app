import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const SplashScreen = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        left: 0,
        padding: 3,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 2000,
        backgroundColor: "white",
      }}
    >
      <Box width={400}>
        <LinearProgress />
      </Box>
    </Box>
  );
};

export default SplashScreen;
