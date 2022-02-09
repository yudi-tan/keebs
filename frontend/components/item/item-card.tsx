import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const ItemCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="IU Keyboard by Perry Works"
        subheader="Cherry Hyperglide Blacks on Alu Plate"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://i.redd.it/yqlvwm3b1r171.jpg"
        alt="IU Keyboard"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Endgame for real.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
