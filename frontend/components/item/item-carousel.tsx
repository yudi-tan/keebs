import Carousel from "react-material-ui-carousel";
import CardMedia from "@mui/material/CardMedia";
import { NextPage } from "next";

interface ItemCarouselProps {
  itemUrls: string[];
}

const ItemCarousel: NextPage<ItemCarouselProps> = ({ itemUrls = [] }) => {
  return (
    // TODO(yuditan): Add proper default images.
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      indicators={false}
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
          borderRadius: 0,
        },
      }}
    >
      {itemUrls.map((url, idx) => (
        <CardMedia
          component="img"
          height="194"
          image={url}
          alt="IU Keyboard"
          key={idx}
        />
      ))}
    </Carousel>
  );
};

export default ItemCarousel;
