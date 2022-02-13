import { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface UserCardProps {
  profilePictureUrl: string;
  profileHandle: string;
  profileDescription: string;
}

// TODO(yuditan): Add proper default images.
const UserCard: NextPage<UserCardProps> = ({
  profilePictureUrl = "https://i.mydramalist.com/vK4lp_5c.jpg",
  profileHandle = "@Anon",
  profileDescription = "I am too lazy to write an intro.",
}) => {
  return (
    // TODO(yuditan): Probably need to set maxHeight for this card and
    // cut of the profileDescription text if it exceeds certain length.
    <Card sx={{ maxWidth: 200, padding: 2 }}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Avatar
          alt="profile picture"
          src={profilePictureUrl}
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: 150,
            maxHeight: 150,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {profileHandle}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {profileDescription}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default UserCard;
