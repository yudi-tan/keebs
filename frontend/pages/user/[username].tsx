import type { NextPage } from "next";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemCard from "../../components/item/item-card.tsx";
import UserCard from "../../components/user/user-card.tsx";
import UserDescription from "../../components/user/user-description.tsx";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <h1> Username: {username} </h1>
      <Grid container spacing={2}>
        <Grid item>
          <UserCard
            profilePictureUrl="https://i.mydramalist.com/vK4lp_5c.jpg"
            profileHandle="@WW"
            profileDescription="Hello I am Willie Boy"
          />
        </Grid>
        <Grid item>
          <UserDescription />
        </Grid>
      </Grid>
      <Box m={5}>
        <Divider>Keebs Collection</Divider>
      </Box>
      <Grid container spacing={2}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ItemCard
              itemUrls={[
                "https://pbs.twimg.com/media/E5HZdLbVgAcJwbN.jpg",
                "https://preview.redd.it/yqlvwm3b1r171.jpg?width=640&crop=smart&auto=webp&s=ba79364856e92106848da1e9c1454f831d2cf4e6",
              ]}
              itemDescription="Endgame for real."
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserPage;
