import type { NextPage } from "next";
import Head from "next/head";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginButton from "../components/account/login-button.tsx";

const Home: NextPage = () => {
  const imageUrl = "https://wallpapercave.com/wp/wp8737381.jpg";
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Head>
        <title>Keebs</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppBar>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <LoginButton />
        </Box>
      </AppBar>
      <Typography variant="h1" color="white">
        Showcase your Keebs
      </Typography>
    </Box>
  );
};

export default Home;
