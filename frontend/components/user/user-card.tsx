import React, { useState } from "react";
import { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageMode } from "../../utils/enums.tsx";
import TextField from "@mui/material/TextField";

interface UserCardProps {
  profilePictureUrl: string;
  profileHandle: string;
  profileDescription: string;
  pageMode: int;
}

// TODO(yuditan): Add proper default images.
const UserCard: NextPage<UserCardProps> = ({
  profilePictureUrl = "https://i.mydramalist.com/vK4lp_5c.jpg",
  profileHandle = "@Anon",
  profileDescription = "I am too lazy to write an intro.",
  pageMode,
}) => {
  const [handle, setHandle] = useState(profileHandle);
  const [description, setDescription] = useState(profileDescription);

  return (
    // TODO(yuditan): Probably need to set maxHeight for this card and
    // cut of the profileDescription text if it exceeds certain length.
    <Card sx={{ width: 180, padding: 2 }}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Avatar
          alt="profile picture"
          src={profilePictureUrl}
          sx={{
            width: 150,
            height: 150,
          }}
        />

        <CardContent>
          {pageMode == PageMode.Default ? (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {handle}
            </Typography>
          ) : (
            <TextField
              id="standard-basic"
              label="Handle"
              variant="standard"
              defaultValue={handle}
              onChange={(e) => setHandle(e.target.value)}
            />
          )}

          {pageMode == PageMode.Default ? (
            <Typography variant="body2" color="text.secondary" align="center">
              {description}
            </Typography>
          ) : (
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          )}
        </CardContent>
      </Stack>
    </Card>
  );
};

export default UserCard;
