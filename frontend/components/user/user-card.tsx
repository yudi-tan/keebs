import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const UserCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Container>
        <Avatar
          alt="profile picture"
          src="https://i.mydramalist.com/vK4lp_5c.jpg"
          sx={{ width: 200, height: 200 }}
        />
      </Container>
      <Container>
        <CardContent>
          <Container>
            <Typography gutterBottom variant="h5" component="div">
              @IU
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hi i'm IU.
            </Typography>
          </Container>
        </CardContent>
      </Container>
    </Card>
  );
};

export default UserCard;
