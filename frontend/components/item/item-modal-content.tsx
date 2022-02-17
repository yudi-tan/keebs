import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import ItemDescriptorField from "./item-descriptor-field.tsx";
import PaletteIcon from "@mui/icons-material/Palette";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  padding: 4,
  outline: "none",
};

// TODO(yuditan): Revisit this props. In reality, these params will be passed
// from backend. In that case, the props should probably just be a generic
// map since we wouldn't know a-prior what fields are in it.
interface ItemCardProps {
  itemImageUrls: string[];
  itemName: string;
  itemDescription?: string;
  itemDescriptors: Map<string, string>;
}

// React.forwardRef is needed when using this as a child component for modal.
// https://mui.com/guides/composition/#caveat-with-refs
const ItemModalContent = React.forwardRef((props: ItemCardProps, ref: any) => {
  const {
    itemImageUrls,
    itemName,
    itemDescription,
    itemDescriptors = new Map<string, string>(),
  } = props;
  return (
    <Box {...props} ref={ref} sx={style}>
      <Stack direction="column" alignItems="left" justifyContent="center">
        <Typography variant="h3">{itemName}</Typography>
        <Box>
          {Array.from(itemDescriptors.entries(), (entry) => (
            <ItemDescriptorField
              icon={<PaletteIcon />}
              descriptor={entry[0]}
              description={entry[1]}
              key={entry[0]}
            />
          ))}
          <Typography>{itemDescription}</Typography>
        </Box>
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
