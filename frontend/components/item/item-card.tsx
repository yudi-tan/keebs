import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ItemCarousel from "./item-carousel.tsx";
import { NextPage } from "next";

interface ItemCardProps {
  itemUrls: string[];
  itemDescription: string;
}

const ItemCard: NextPage<ItemCardProps> = ({
  itemUrls = [],
  itemDescription = "",
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <ItemCarousel itemUrls={itemUrls} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {itemDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
