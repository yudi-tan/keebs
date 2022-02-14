import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  padding: 4,
  outline: "none",
};

interface ItemCardProps {
  itemImageUrls: string[];
  itemName: string;
  itemColor?: string;
  itemPlate?: string;
  itemSwitches?: string;
  itemKeycaps?: string;
  itemDescription?: string;
}

// React.forwardRef is needed when using this as a child component for modal.
// https://mui.com/guides/composition/#caveat-with-refs
const ItemModalContent = React.forwardRef((props: ItemCardProps, ref: any) => {
  const {
    itemImageUrls,
    itemName,
    itemColor,
    itemPlate,
    itemSwitches,
    itemKeycaps,
    itemDescription,
  } = props;
  return (
    <Box {...props} ref={ref} sx={style}>
      <Stack direction="column" alignItems="left" justifyContent="center">
        <Typography>{itemName}</Typography>
        {itemColor && <Typography> [ColorIcon] {itemColor}</Typography>}
        {itemColor && <Typography> [PlateIcon] {itemPlate}</Typography>}
        {itemColor && <Typography> [SwitchesIcon] {itemSwitches}</Typography>}
        {itemColor && <Typography> [KeycapsIcon] {itemKeycaps}</Typography>}
        {itemColor && <Typography>{itemDescription}</Typography>}
        <ImageList cols={1}>
          {itemImageUrls.map((url, idx) => (
            <ImageListItem key={idx} cols={1}>
              <img src={url} alt="item image" />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Box>
  );
});

export default ItemModalContent;
