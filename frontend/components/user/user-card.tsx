import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const UserCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Container>
          <Avatar
            alt="profile picture"
            src="https://i.mydramalist.com/vK4lp_5c.jpg"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: 180,
              maxHeight: 180,
            }}
          />
        </Container>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            @IU
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hi i'm IU.
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default UserCard;
