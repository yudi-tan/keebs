import type { NextPage } from "next";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemCard from "../../components/item/item-card.tsx";
import UserCard from "../../components/user/user-card.tsx";
import UserDescription from "../../components/user/user-description.tsx";
import { Typography } from "@mui/material";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const mockDescriptors: Map<string, string> = new Map([
    ["Color", "Navy"],
    ["Plate", "Aluminium"],
    ["Switches", "Cherry Hyperglide Blacks"],
    ["Keycaps", "CRP Tulip R4"],
  ]);
  return (
    <Box my={2} mx={4} pt={3}>
      <Grid container spacing={5}>
        <Grid item>
          <UserCard
            // TODO: Always crop center of the pic so its not flat
            profilePictureUrl="https://c.tenor.com/OCOiVx90IYMAAAAC/iu-wave.gif"
            // TODO: this is the username (maybe should allow users to log in using it too)
            profileHandle={username}
            // TODO: this was intended to be a display name rather than description
            profileDescription="Will Wang"
          />
        </Grid>
        <Grid item xs>
          <UserDescription />
        </Grid>
      </Grid>
      <Box my={4}>
        <Divider>Keebs Collection</Divider>
      </Box>
      <Grid container spacing={5}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item sx={{ width: 350 }} key={index}>
            <ItemCard
              itemImageUrls={[
                "https://pbs.twimg.com/media/E5HZdLbVgAcJwbN.jpg",
                "https://preview.redd.it/yqlvwm3b1r171.jpg?width=640&crop=smart&auto=webp&s=ba79364856e92106848da1e9c1454f831d2cf4e6",
              ]}
              itemName="Jinsoul TKL"
              itemDescription="Yudiboi's endgame for real."
              itemDescriptors={mockDescriptors}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserPage;
